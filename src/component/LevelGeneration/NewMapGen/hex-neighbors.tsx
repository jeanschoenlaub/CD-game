import { HexInfo, NeighborHexInfo } from "../LevelGenTypes";

//Returns in clockwise direction the neighbors: NE,E,SE,SW,W,NW
export function getNeighbors(hextype: HexInfo[], count: number): NeighborHexInfo[][] {
    const neighbors: NeighborHexInfo[][] = [];

    for (let i = 0; i < count * count; i++) {
        const hexNeighbors: NeighborHexInfo[] = [];
        const offset = (Math.floor(i / count)) % 2 === 1 ? 1 : 0;

        const addNeighbor = (index: number, direction: string) => {
            if (hextype[index]) {
                hexNeighbors.push({
                    direction: direction,
                    type: hextype[index].type,
                    HexAssets: hextype[index].HexAssets,
                });
            }
        };

        addNeighbor(i - count + offset, "NE");
        addNeighbor(i + 1, "E");
        addNeighbor(i + count + offset, "SE");
        addNeighbor(i + count + offset - 1, "SW");
        addNeighbor(i - 1, "W");
        addNeighbor(i - count - 1 + offset, "NW");

        neighbors.push(hexNeighbors);
    }
    return neighbors;
}

export function getVisibleFences(neighbors: NeighborHexInfo[]): Record<string, boolean> {
    const visibleFences = { NW: true, W: true, E: true, SE: true, NE: true, SW: true };

    neighbors.forEach(neighbor => {
        if (neighbor.HexAssets === "farm") {
            // If a neighboring hex is a farm, set the corresponding fence to false (not visible)
            visibleFences[neighbor.direction] = false;
        }
    });

    return visibleFences;
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
