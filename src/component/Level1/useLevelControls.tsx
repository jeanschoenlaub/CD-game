import { button, useControls } from 'leva';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { generateSeed } from '../LevelGeneration/utilsSeed';

export function useLevelControls() {

    //Two trigger for the 2 leva controls
    const [newMapTrigger, setNewMapTrigger] = useState(0);
    const [newMapFromSeedTrigger, setNewMapFromSeedTrigger] = useState(0);
    
    //We use a random factor in our controls to mix it in the seed so other random rule's based component 
    //can reuse the same random number to generate the same terrain for example 
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
            nbFarms:infrastructureControls.nbFarms,
            randomFactor: randomFactor,
        });
    }

    // Bunch of code below to generate a new seed when pressing New map and setting it in UI
    useControls({NewMap: button(() => setNewMapTrigger(t => t + 1))});
    let newSeed = useMemo(() => 
        generateSeed({ 
        tileCount: terrainControls.tileCount,
        mountainProba: terrainControls.mountainProba,
        desertProba: terrainControls.desertProba,
        startingPopulation: infrastructureControls.startingPopulation,
        nbFarms:infrastructureControls.nbFarms,
        randomFactor: randomFactor,
    }), [
        newMapTrigger,
    ]);
    useEffect(() => {
        setSeed(newSeed) // Update seed state
        set({ GeneratedSeed: newSeed }); // set the seed in UI to the newSeedGenerated
    },[newSeed])

    // Now both when the user press new map the seed is set from seed entered
    useEffect(() => {
        setSeed(GeneratedSeed);
    }, [newMapFromSeedTrigger]);


    const [{ GeneratedSeed }, set] = useControls(() => ({
        GeneratedSeed: {
            value: seed,
            disabled: false,
            label: 'Seed'
        }
    }));

    useControls({GenerateFromSeed: button(() => setNewMapFromSeedTrigger(t => t + 1))})
    

    return { ...terrainControls, ...infrastructureControls, seed };
}