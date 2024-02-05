import { button, useControls } from 'leva';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { generateSeed } from '../LevelGeneration/NewMapGen/utils';

export function useLevelControls() {

    const [trigger, setTrigger] = useState(0);
    
    const randomFactor= Math.random()
    const terrainControls = useControls('Terrain', {
        tileCount: {
            value: 18,
            step: 2,
            min: 10,  
            max: 50, 
        },
        borderSize: {
            value: 0,
            step: 0.01,
            min: 0,  
            max: 0.1, 
        },
        mountainProba: {
            value: 0.2,
            step: 0.05,
            min: 0,  
            max: 1, 
        },
        desertProba: {
            value: 0.2,
            step: 0.05,
            min: 0,  
            max: 1, 
        },
    });

    const infrastructureControls = useControls('Assets', {
        hideAssets: {
            label: 'Hide Assets',
            value: false, // Default value
        },
        startingPopulation: {
            label: 'City-Pop ',
            value: 10000,
            step: 1000,
            min: 1000,  
            max: 20000, 
        },
        treeScale: {
            label: 'Tree Scale ',
            value: 1,
            step: 0.1,
            min: 0.5,  
            max: 2.5, 
        },
        nbFarms: {
            label: 'Number of Farms ',
            value: 4,
            step: 1,
            min: 0,  
            max: 5, 
        },
    });

    const [seed, setSeed] = useState(() => generateInitialSeed());

    function generateInitialSeed() {
        return generateSeed({ 
            tileCount: terrainControls.tileCount,
            mountainProba: terrainControls.mountainProba,
            desertProba: terrainControls.desertProba,
            startingPopulation: infrastructureControls.startingPopulation,
            treeScale: infrastructureControls.treeScale,
            nbFarms:infrastructureControls.nbFarms,
            randomFactor: randomFactor,
        });
    }

    useControls({NewMap: button(() => setTrigger(t => t + 1))});

    let newSeed = useMemo(() => 
        generateSeed({ 
        tileCount: terrainControls.tileCount,
        mountainProba: terrainControls.mountainProba,
        desertProba: terrainControls.desertProba,
        startingPopulation: infrastructureControls.startingPopulation,
        treeScale: infrastructureControls.treeScale,
        nbFarms:infrastructureControls.nbFarms,
        randomFactor: randomFactor,
    }), [
        trigger,
        //new regenrate world triggerwith a way to pass arguments from regenrate world
    ]);

    useEffect(() => {
        setSeed(newSeed)
        console.log(newSeed)
        set({ GeneratedSeed: newSeed });
    },[newSeed])

    const regenerateWorld = useCallback(() => {
        const decodedSeed = atob(seed);
        const seedObject = JSON.parse(decodedSeed);

        console.log("farms",seedObject.nbFarms)

        let newSeed = generateSeed({ 
            tileCount: seedObject.tileCount,
            mountainProba: seedObject.mountainProba,
            desertProba: seedObject.desertProba,
            startingPopulation: seedObject.startingPopulation,
            treeScale: seedObject.treeScale,
            nbFarms:seedObject.nbFarms,
            randomFactor: seedObject.randomFactor,
        })

        console.log("farms",seedObject.nbFarms)

        setSeed(newSeed);

    }, []);


    const [{ GeneratedSeed }, set] = useControls(() => ({
        GeneratedSeed: {
            value: seed,
            disabled: false,
            label: 'Seed'
        }
    }));

    useControls({GenerateFromSeed: button(regenerateWorld)})
    

    return { ...terrainControls, ...infrastructureControls, seed };
}