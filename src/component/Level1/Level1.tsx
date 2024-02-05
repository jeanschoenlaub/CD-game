import { HexMap } from "../LevelGeneration/TerrainGeneration/HexMap";
import type { HexInfo } from "../LevelGeneration/LevelGenTypes";
import { Suspense, useEffect, useMemo, useState } from "react";
import { AssetMap } from "../LevelGeneration/AssetGeneration/AssetMap";
import { useLevelControls } from "./useLevelControls";
import { CameraMovement } from "../LevelGeneration/CameraMovement";
import { useAudio } from "../../features/Audio/AudioContext";
import { Float, Text, useProgress } from "@react-three/drei";
import { hexAssetsGen, terrainGen } from "../LevelGeneration/NewMapGen/terrainGen";
import { blendTerrain } from "../LevelGeneration/NewMapGen/blended-map-textures";
import { decodeSeed, hashStringToNumber } from "../LevelGeneration/NewMapGen/utils";


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
   
    const { seed } = useLevelControls();

    const { tileCount, mountainProba, desertProba, hideAssets, startingPopulation, treeScale, borderSize, nbFarms, randomFactor }=decodeSeed(seed)


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
    const hexTerrainInfo = useMemo(() => terrainGen(tileCount, mountainProba, desertProba,  cityPosX, cityPosY), [tileCount, borderSize, seed]);
    const hexTerrainWithBlend = useMemo(() => blendTerrain(hexTerrainInfo, tileCount), [tileCount,borderSize, seed]);
    const hexAssetInfo = useMemo(() => hexAssetsGen(tileCount,hexTerrainWithBlend,nbFarms,cityPosX,cityPosY), [tileCount,borderSize, seed]);
    
    useEffect(() => {
        setHexMapInfo(hexAssetInfo);
    }, [hexAssetInfo]); // Only update when hexTerrainWithBlend changes

    let randomNumberedSeed = 0 
    useEffect(() => {
        randomNumberedSeed = hashStringToNumber(seed);
    }, [seed]); // Only update when hexTerrainWithBlend changes

    return (
        <>
            <Suspense fallback={null}>
                <CameraMovement 
                    tileCount={tileCount} 
                />
                <Float floatIntensity={3} speed={3}>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 1 }
                    color={"#22c55e"}
                    position-y={ 2.5 }
                    position-x={ 0 }
                    maxWidth={ 20 }
                    textAlign="center"
                >
                    CoolDown
                </Text>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 0.5 }
                    color={"#9300db"}
                    position-y={ 2.2 }
                    position-x={ 2.5 }
                    maxWidth={ 20 }
                    textAlign="center"
                >
                    v-0.1
                </Text>
                </Float>
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
                {hexMapInfo.length > 0 && !hideAssets && (
                    <AssetMap 
                        hexTypes={hexMapInfo}
                        startingPopulation={startingPopulation}
                        radius={radius}
                        borderSize={borderSize}
                        treeScale={treeScale}
                        seed={randomNumberedSeed}
                    />
                )}
            </Suspense>
        </>
    );
}