import { type Euler } from '@react-three/fiber';

export type MaterialType = 
    'sea' | 'grass' | 'mountain' | 'desert' | 'forest' | 'city' | 'farm'
    | 'grass1Sea' | 'grass2Sea' | 'grass3Sea' | 'grass4Sea' | 'grass5Sea' | 'grass6Sea' 
    | 'sand1Mountain' | 'sand2Mountain' | 'sand3Mountain' | 'sand4Mountain' | 'sand5Mountain' | 'sand6Mountain' 
    | 'grass1Mountain' | 'grass2Mountain' | 'grass3Mountain' ;

export type AssetMaterialType = 
    'buildingSSide1' | 'buildingSSide2' | 'buildingSSide3' | 'buildingSSide4' 
    | 'buildingSTopS' 
    | 'buildingMSide1' | 'buildingMSide2' | 'buildingMSide3'
    | 'buildingLSide1' | 'buildingLSide2' | 'buildingLSide3' | 'buildingLSide4' 
    // | 'buildingLTopS' | 'buildingLTopG' | 'buildingLTopE' ;

export type HexInfo = {
    type: MaterialType, 
    rotation: Euler, // Rotation in radians
    gridPosX: number,
    gridPosY: number,
    hexNeighbors?: NeighborHexInfo[],
    HexAssets?: string,
};

export type NeighborHexInfo = {
    direction: string, //Neighbor direction : NE, NW ...
    type: string | undefined, // Can be undefined if an hex is on the edge
};

export type Resource = Record<string, number>;