import { HexInfo, NeighborHexInfo } from "../LevelGenTypes";

//Returns in clockwise direction the neighbors: NE,E,SE,SW,W,NW
export function getNeighbors(hextype: HexInfo[], count: number): NeighborHexInfo[][] {
    const neighbors: NeighborHexInfo[][] = [];

    for (let i = 0; i < count * count; i++) {
        const hexNeighbors = []; // Initialize an empty array for each hex's neighbors

        const offset = (Math.floor(i / count)) % 2 === 1 ? 1 : 0;

        // Push neighbor information into neighbors[i]
        if (hextype[i - count + offset]) {
            hexNeighbors.push({direction: "NE", type: hextype[i - count + offset]?.type});
        }
        if (i < (count * count) - 1 && hextype[i + 1]) {
            hexNeighbors.push({direction: "E", type: hextype[i + 1]?.type});
        }
        if (i < (count * count) - count - 1 && hextype[i + count + offset]) {
            hexNeighbors.push({direction: "SE", type: hextype[i + count + offset]?.type});
        }
        if (i < (count * count) - count - 1 && hextype[i + count + offset - 1]) {
            hexNeighbors.push({direction: "SW", type: hextype[i + count + offset - 1]?.type});
        }
        if (i > 0 && hextype[i - 1]) {
            hexNeighbors.push({direction: "W", type: hextype[i - 1]?.type});
        }
        if (i - count - 1 + offset >= 0 && hextype[i - count - 1 + offset]) {
            hexNeighbors.push({direction: "NW", type: hextype[i - count - 1 + offset]?.type});
        }
        neighbors.push(hexNeighbors)
    }
    return neighbors;
}


export const getNeighborTypeValue = (hexNeighbor: NeighborHexInfo[]) => {
    const numberHexNeighbors: number[] = []
    for (let i = 0; i < hexNeighbor.length; i++){
        if (hexNeighbor[i]!.type == "sea" || hexNeighbor[i]!.type == "desert"){
            numberHexNeighbors[i] = 1;
        }
        else if (hexNeighbor[i]!.type == "mountain"){
            numberHexNeighbors[i] = 2;
        }
        else{
            numberHexNeighbors[i] = 0;
        }
    }

    return numberHexNeighbors
};
