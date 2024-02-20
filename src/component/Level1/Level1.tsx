import { HexMap } from "../HexMap/HexMap";
import type { HexInfo } from "../LevelGeneration/LevelGenTypes";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { AssetMap } from "../LevelGeneration/AssetGeneration/AssetMap";
import { useLevelControls } from "./useLevelControls";
import { CameraMovement } from "../LevelGeneration/CameraMovement";
import { useAudio } from "../../features/Audio/AudioContext";
import { useProgress } from "@react-three/drei";
import { lvl1HexTerrain, lvl1InitialHexAssetsAssignment } from "./InitialiseL1";
import { blendTerrain } from "../LevelGeneration/NewMapGen/blended-map-textures";
import { decodeSeed } from "../LevelGeneration/utilsSeed";
import { Construction } from "../LevelGeneration/AssetGeneration/Buildings/Construction";
import { ConstructionBarriers } from "../LevelGeneration/AssetGeneration/Buildings/ConstructionBarriers";
import { CoalPlant } from "../LevelGeneration/AssetGeneration/Buildings/CoalPlant";

export function Level1() {
    
    // State to store the hex types
    const [hexMapInfo, setHexMapInfo] = useState< HexInfo[] >([]);
    const [levelLoaded, setLeveLLoaded] = useState< boolean>(false);

    const { active, progress, errors, item, loaded, total } = useProgress()

    useEffect(() => {
        if (!active && (total != 0)) {
            setLeveLLoaded(true);
        }
    }, [active]);
   
    //Parameters for now coming from Leva, but later randomly generated
    const { seed, hideAssets, borderSize, treeScale } = useLevelControls();
    const { tileCount, mountainProba, desertProba, startingPopulation, nbFarms, randomFactor }= decodeSeed(seed)
    const radius=1;

    // All the specific starting condition related to Level 1 
    const cityHexBlockXOffset = 0
    const cityHexBlockYOffset = 0
    const cityPosX = Math.floor((tileCount-1)/4) + cityHexBlockXOffset
    const cityPosY = Math.floor((tileCount-1)/2) + cityHexBlockYOffset

    //Play music once loaded - disabled for testing 
    const audioContext = useAudio();
    useEffect(() => {
        if (levelLoaded){
            console.log("play")
            // audioContext.togglePlay()
        }
    },[levelLoaded])

    // If new map: Generate a new map using a mix of specific lvl 1 fucntion and general 
    const hexTerrainInfo = useMemo(() => lvl1HexTerrain(tileCount, mountainProba, desertProba,  cityPosX, cityPosY,randomFactor), [tileCount, seed]);
    const hexTerrainWithBlend = useMemo(() => blendTerrain(hexTerrainInfo, tileCount), [tileCount, seed]);
    const hexAssetInfo = useMemo(() => lvl1InitialHexAssetsAssignment(tileCount,hexTerrainWithBlend,nbFarms,cityPosX,cityPosY), [tileCount, seed]);

    //Use effect to reset map on slider change
    useEffect(() => {
        setHexMapInfo(hexAssetInfo);
    }, [hexAssetInfo, hideAssets]); // Only update when hexTerrainWithBlend changes

    return (
        <>
            <Suspense fallback={null}>
                <CameraMovement tileCount={tileCount} />
                <HexMap 
                    count={tileCount} 
                    hexMapInfo={hexMapInfo}
                    radius={radius}
                    borderSize={borderSize}
                    cityPosX={cityPosX}
                    cityPosY={cityPosY}
                />
    
                {hexMapInfo.length > 0 && (
                    <AssetMap 
                        hexTypes={hexMapInfo}
                        count={tileCount} 
                        startingPopulation={startingPopulation}
                        radius={radius}
                        borderSize={borderSize}
                        treeScale={treeScale}
                        hideAssets={hideAssets}
                        randomFactor={randomFactor}
                    />
                )}
                
            </Suspense>

            <CoalPlant scale={0.09} position={[13,0.05,10.5]}></CoalPlant>

            <Construction scale={0.1} position={[12.1,0.05,12]}></Construction>
            <ConstructionBarriers scale={0.1} position={[12.1,0.05,12]}></ConstructionBarriers>
            <Construction scale={0.1} position={[14,0.05,12]}></Construction>
            <ConstructionBarriers scale={0.1} position={[14,0.05,12]}></ConstructionBarriers>
        </>
    );
}