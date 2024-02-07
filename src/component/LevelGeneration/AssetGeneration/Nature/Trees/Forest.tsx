import TreeSpruce from './TreeSpruce.jsx';
import TreePalm from './TreePalm.jsx';
import TreeGrass from './TreeGrass.jsx';
import React, { useMemo } from 'react';
import { HexInfo } from '../../../LevelGenTypes.js';

interface NatureProps {
    hexInfo: HexInfo;
    treeScale: number;
    position: number[];
    random: number;
}

type ForestType = 'pine' | 'palm' | 'default';

const FOREST_CONFIG: Record<ForestType, { minTrees: number; maxTrees: number; treeType: React.ComponentType<any>; proba:number, scaleModifier: number; forestRadius: number; forestCentralRandomness: number; scaleVariation: number}> = {
    pine: {
        minTrees: 10,
        maxTrees: 50,
        proba: 0.5,
        treeType: TreeSpruce,
        scaleModifier: 100,
        forestRadius: 0.5,
        scaleVariation:1,
        forestCentralRandomness: 0.3,
    },
    palm: {
        minTrees: 2,
        maxTrees: 15,
        proba: 0.85,
        treeType: TreePalm,
        scaleModifier: 10,
        forestRadius: 0.7,
        scaleVariation: 0.5,
        forestCentralRandomness: 0,
    },
    default: {
        minTrees: 5,
        maxTrees: 20,
        proba: 0.85,
        treeType: TreeGrass,
        scaleModifier: 10,
        forestRadius: 0.6,
        scaleVariation: 1,
        forestCentralRandomness: 0.3,
    },
};

export function Forest({ hexInfo, treeScale, random, position }: NatureProps) {

    const forestType: ForestType = useMemo(() => getForestType(hexInfo), [hexInfo]);
    const forestConfig = FOREST_CONFIG[forestType];

    // Memoize tree generation
    const trees = useMemo(() => {
        const generatedTrees: JSX.Element[] = [];
        if (random > forestConfig.proba) {
            const treeCount = calculateTreeCount(random, forestConfig.minTrees, forestConfig.maxTrees);
            const forestCenter = randomizeForestCenter(position, random, forestConfig.forestCentralRandomness);

            for (let i = 0; i < treeCount; i++) {
                let treePosition = getRandomTreePosition(forestCenter, forestConfig.forestRadius);
                const treeScaleRandomised = getTreeScaleRandomized(random, treeScale, forestConfig);

                const TreeComponent = forestConfig.treeType;
                generatedTrees.push(
                    <TreeComponent
                        key={`${forestType}-${i}`}
                        scale={Array(3).fill(treeScaleRandomised)}
                        position={treePosition}
                    />
                );
            }
        }
        return generatedTrees;
    }, [hexInfo, treeScale]);

    return <>{trees}</>;
}


const calculateTreeCount = (random: number, minTrees: number, maxTrees: number) => {
    const randomAdjustment = (random - 0.75) * 4;
    let treeCount = Math.floor(random * (maxTrees - minTrees + 1)) + minTrees;
    return treeCount;
} 

const randomizeForestCenter = (position: number[], random: number, forestCentralRandomness: number) => {
    const randomAdjustment = (random - 0.75) * 4;
    return [
        position[0]! + randomAdjustment * forestCentralRandomness,
        0,
        position[1]! + randomAdjustment * forestCentralRandomness, //taking position 1 as this is an [x,y] array I am passing
    ];
};

const getRandomTreePosition = (centralPosition: number[], forestRadius: number) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * forestRadius;
    return [
        centralPosition[0]! + Math.cos(angle) * distance,
        0,
        centralPosition[2]! + Math.sin(angle) * distance
    ];
};

function getForestType(hexInfo: HexInfo): ForestType {
    if (hexInfo.hexNeighbors?.some(neighbor => neighbor.type === 'mountain')) {
        return 'pine';
    } else if (hexInfo.hexNeighbors?.some(neighbor => neighbor.type === 'sea')) {
        return 'palm';
    }
    return 'default';
}

const getTreeScaleRandomized = (random: number, treeScale: number, config: typeof FOREST_CONFIG[ForestType]) => {
    const minScale = 0.4 + (1 - config.scaleVariation) * 0.6;
    const maxScale = 1.4 - (1 - config.scaleVariation) * 0.6;
    return (Math.random() * (maxScale - minScale) + minScale) * treeScale / config.scaleModifier;
};
