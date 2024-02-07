import React, { useMemo } from 'react';
import * as THREE from "three"
import { useMaterials } from '../useMaterials';
import type { AssetMaterialType, HexInfo } from '../../LevelGenTypes';
import { getHexPositionFromGrid } from '../../NewMapGen/utils';

interface BuildingInfo {
    pop?: number;
    BuildingMat: THREE.MeshStandardMaterial[];
    scaleY: number; 
    posX:number;
    posY:number;
}

interface BuildingMeshesProps {
    buildingsInfo: BuildingInfo[];
    buildingGeometry: THREE.BoxGeometry;
    buildingWidth:number;
}

interface BuildingRules {
   materials: THREE.MeshStandardMaterial[];
   popMin: number;
   popMax: number;
   scaleMin: number;
   scaleMax: number;
}


interface CityMapProps {
    cityHexInfo: HexInfo
    startingPopulation?: number
    radius: number
    borderSize: number
  }
  
export function CityGen({ cityHexInfo, startingPopulation=1000,radius, borderSize }: CityMapProps) {

    const materials = useMaterials();

    const buildingWidth = 0.25
    const buildingSpacing = 0.27

    const position = getHexPositionFromGrid(cityHexInfo.gridPosX, cityHexInfo.gridPosY, radius, borderSize);
    const cityPosX = position[0]
    const cityPosY = position[1]

    const areMaterialsLoaded = Object.keys(materials).length > 0; 
    
    const buildingsInfo = useMemo(() => {
        if (!areMaterialsLoaded || !materials) return [];
        else{
            const totalPopulation = startingPopulation; // Or use startingPopulation
            const numBuildings = 9;
            const distribution = distributePopulation(totalPopulation, numBuildings);
            return generateBuildingsInfo(distribution, materials, buildingSpacing, cityPosX!, cityPosY!);
        }
    }, [cityHexInfo, buildingSpacing, cityPosX, cityPosY, startingPopulation])

    const buildingGeometry = new THREE.BoxGeometry(1,1,1)
   

    return(
        <>
            <BuildingMeshes 
                buildingsInfo={buildingsInfo} 
                buildingGeometry={buildingGeometry}
                buildingWidth={buildingWidth}
            />
        </>
    );
}

const BuildingMeshes: React.FC<BuildingMeshesProps> = ({ buildingsInfo, buildingGeometry, buildingWidth}) => {
    return (
        <>
            {buildingsInfo.map((building, index) => (
                <mesh
                    key={`build-${index}`}
                    geometry={buildingGeometry}
                    material={building.BuildingMat}
                    position={new THREE.Vector3(building.posX, building.scaleY / 2, building.posY)}
                    rotation={new THREE.Euler(0, 0, 0)}
                    scale={new THREE.Vector3(buildingWidth, building.scaleY, buildingWidth)}
                    castShadow
                />
            ))}
        </>
    );
};

function distributePopulation(totalPopulation: number, numBuildings: number) {
    let populationLeft = totalPopulation;
    const distribution: number[] = [];
    let decreasingFactor = 1.3; // Start with a factor of 1.2 for the first building

    for (let i = 0; i < numBuildings; i++) {
        let allocatedPopulation = 0;

        if (i === 0) {
            // First building gets population based on the initial factor
            allocatedPopulation = Math.floor(populationLeft / numBuildings * decreasingFactor);
        } else {
            // Decrease the factor for subsequent buildings
            decreasingFactor -= 0.05; // Decrease factor by 0.1 for each building
            decreasingFactor = Math.max(decreasingFactor, 1); // Ensure factor doesn't go below 1

            allocatedPopulation = Math.floor(populationLeft / numBuildings * decreasingFactor);
        }

        populationLeft -= allocatedPopulation;
        distribution.push(allocatedPopulation);
    }

    return distribution;
}

function generateBuildingsInfo(distribution: number[], materials: Record<AssetMaterialType, THREE.MeshStandardMaterial>, buildingSpacing:number, cityPosX: number, cityPosY: number) { 

    return distribution.map((pop, index) => {

        const snailPattern = [
            [0, 0],
            [0, -buildingSpacing],
            [buildingSpacing, -buildingSpacing],
            [buildingSpacing, 0],
            [buildingSpacing, buildingSpacing],
            [0, buildingSpacing],
            [-buildingSpacing, buildingSpacing],
            [-buildingSpacing, 0],
            [-buildingSpacing, -buildingSpacing]
        ];

        const [offsetX, offsetY] = snailPattern[index] as [number, number];


        const [buildingMaterial, scale] = generateBuildingMatAndSize(materials, pop);
        
        return {
            pop: pop,
            BuildingMat: buildingMaterial, 
            scaleY: scale, 
            posX: cityPosX + offsetX,
            posY: cityPosY + offsetY
        };
    });
}

function generateBuildingMatAndSize( materials: Record<AssetMaterialType, THREE.MeshStandardMaterial> ,pop: number): [THREE.MeshStandardMaterial[], number] {

    const buildingRules = 
        [
            {
                materials: [materials.buildingLSide1, materials.buildingLSide2, materials.buildingLSide3, materials.buildingLSide4],
                popMin: 1000,
                popMax: 10000,
                scaleMin: 1.2,
                scaleMax: 2
            },
            {
                materials: [materials.buildingMSide1, materials.buildingMSide2, materials.buildingMSide3],
                popMin: 600,
                popMax: 1000,
                scaleMin: 0.5,
                scaleMax: 1
            },
            {
                materials: [materials.buildingSSide1, materials.buildingSSide2, materials.buildingSSide3, materials.buildingSSide4],
                popMin: 0,
                popMax: 600,
                scaleMin: 0.3,
                scaleMax: 0.5
            }
        ]
    
    let rule: BuildingRules;
    
    let sideMaterial= new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, metalness: 0.6, roughness: 0.3})
    const topMaterial= new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, metalness: 0.6, roughness: 0.3})
    let scale = 0
    for (rule of buildingRules) {
        if (pop > rule.popMin && pop <= rule.popMax) {
            // Get a random index from the materials array
            const randomIndex = pop % rule.materials.length;
            sideMaterial = rule.materials[randomIndex]!;
            //We define the scaleY of the building using the ration of pop / pop max and predifined min and max scales 
            scale = rule.scaleMin + (pop/rule.popMax)*(rule.scaleMax-rule.scaleMin)
            break; // Exit the loop once a material is selected
        }
    }
    
    const buildingMaterial =[
            sideMaterial, // Right side
            sideMaterial, // Left side
            topMaterial,   // Top side
            sideMaterial, // Front side
            sideMaterial, // Back side
            sideMaterial, // Bottom, buggy if empty
    ];

    return [buildingMaterial, scale]
}