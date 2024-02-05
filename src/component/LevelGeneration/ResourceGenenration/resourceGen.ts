import type { HexInfo, Resource } from "../LevelGenTypes";

export function resourceGen(hextype: HexInfo[], count: number): Resource[]  {
    const hexRessource: Resource[] = [];
  
    for (let hexNumber = 0; hexNumber < count * count; hexNumber++) {
      const hex = {} as Resource;
      const probaCoal = Math.floor(Math.random() * 100)
      const probaWheat = Math.floor(Math.random() * 100)
  
      if (hextype[hexNumber]?.type === 'grass'){
        // Assign a random value between 1 and 3 for resource wheat
        if (probaWheat  > 70){
            const wheatValue = Math.floor(Math.random() * 4) ;
            hex.wheat = wheatValue;
        }
        if (probaCoal > 98){
            hex.coal = 3
        } else if (probaCoal > 90){
            hex.coal = 2
        } else if (probaCoal > 70){
            hex.coal = 1
        }
      }
      if (hextype[hexNumber]?.type === 'mountain'){
        if (probaCoal > 98){
            hex.coal = 3
        } else if (probaCoal > 90){
            hex.coal = 2
        } else if (probaCoal > 70){
            hex.coal = 1
        }
      }
      hexRessource.push(hex);
    }
    //console.log(hexRessource)
    return hexRessource;
}

