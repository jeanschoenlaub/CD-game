import { HexMap } from "../LevelGeneration/TerrainGeneration/HexMap";
import type { HexInfo } from "../LevelGeneration/LevelGenTypes";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { AssetMap } from "../LevelGeneration/AssetGeneration/AssetMap";
import { useLevelControls } from "./useLevelControls";
import { CameraMovement } from "../LevelGeneration/CameraMovement";
import { useAudio } from "../../features/Audio/AudioContext";
import { useProgress } from "@react-three/drei";
import { hexAssetsGen, terrainGen } from "../LevelGeneration/NewMapGen/terrainGen";
import { blendTerrain } from "../LevelGeneration/NewMapGen/blended-map-textures";
import { decodeSeed } from "../LevelGeneration/utilsSeed";


export function Level1() {
    
    // State to store the hex types
    const [hexMapInfo, setHexMapInfo] = useState< HexInfo[] >([]);
    const [levelLoaded, setLeveLLoaded] = useState< boolean>(false);

    const { active, progress, errors, item, loaded, total } = useProgress()

    useEffect(() => {
        // This will run when 'loaded' or 'total' changes
        if (!active && (total != 0)) {
            setLeveLLoaded(true);
        }
    }, [active]); // Dependencies for the effect
   
    const { seed, hideAssets, borderSize, treeScale } = useLevelControls();

    const { tileCount, mountainProba, desertProba, startingPopulation, nbFarms, randomFactor }= decodeSeed(seed)

    const cityHexBlockXOffset = 0
    const cityHexBlockYOffset = 0
    const cityPosX = Math.floor((tileCount-1)/4) + cityHexBlockXOffset
    const cityPosY = Math.floor((tileCount-1)/2) + cityHexBlockYOffset

    const radius=1;

    //Play music once loaded - disabled for testing 
    const audioContext = useAudio();
    useEffect(() => {
        if (levelLoaded){
            console.log("play")
            // audioContext.togglePlay()
        }
    },[levelLoaded])

    // Generate Map if New Map (always yes now)
    const hexTerrainInfo = useMemo(() => terrainGen(tileCount, mountainProba, desertProba,  cityPosX, cityPosY,randomFactor), [tileCount, seed]);
    const hexTerrainWithBlend = useMemo(() => blendTerrain(hexTerrainInfo, tileCount), [tileCount, seed]);
    const hexAssetInfo = useMemo(() => hexAssetsGen(tileCount,hexTerrainWithBlend,nbFarms,cityPosX,cityPosY), [tileCount, seed]);
    
    //Use effect to reset map on slider change
    useEffect(() => {
        setHexMapInfo(hexAssetInfo);
    }, [hexAssetInfo, hideAssets]); // Only update when hexTerrainWithBlend changes

    return (
        <>
            <Suspense fallback={null}>
                <CameraMovement 
                    tileCount={tileCount} 
                />
                <HexMap 
                    count={tileCount} 
                    hexMapInfo={hexMapInfo}
                    radius={radius}
                    borderSize={borderSize}
                />
                {/* <ResourceMap 
                    count={tileCount} 
                    hexTypes={hexTypes}
                /> */}
                {hexMapInfo.length > 0 && (
                    <AssetMap 
                        hexTypes={hexMapInfo}
                        startingPopulation={startingPopulation}
                        radius={radius}
                        borderSize={borderSize}
                        treeScale={treeScale}
                        hideAssets={hideAssets}
                        randomFactor={randomFactor}
                    />
                )}
            </Suspense>
        </>
    );
}