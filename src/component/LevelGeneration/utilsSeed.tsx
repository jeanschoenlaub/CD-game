interface SeedInput {
    tileCount: number;
    mountainProba: number;
    desertProba: number;
    startingPopulation: number;
    nbFarms: number;
    randomFactor: number;
}

//Generates a ~ 100 char long string with information about main map variables encoded in string
export function generateSeed(input: SeedInput) {

    // Convert the input object to a JSON string
    const inputString = JSON.stringify(input);

    // Encode the string to Base64
    const encodedSeed = btoa(inputString);

    return encodedSeed;
}

//Function to reverse engineer from the string the initial paremeters. Used to reset maps from seed codes
export function decodeSeed(encodedSeed:string ) {
        const decodedString = atob(encodedSeed); // Decode base64 to string
        const seedObject = JSON.parse(decodedString); // Parse string to JSON

        // Extract parameters from the seed object
        const tileCount = seedObject.tileCount;
        const mountainProba = seedObject.mountainProba;
        const desertProba = seedObject.desertProba;
        const startingPopulation = seedObject.startingPopulation;
        const nbFarms = seedObject.nbFarms;
        const randomFactor = seedObject.randomFactor;

        return {
            tileCount,
            mountainProba,
            desertProba,
            startingPopulation,
            nbFarms,
            randomFactor
        };
}

export class SeededRNG {
    private seed: number;

    constructor(seed: number) {
        this.seed = seed;
    }

    public random(): number {
        // Linear Congruential Generator (LCG) Algorithm
        const a = 1664525;
        const c = 1013904223;
        const m = 2 ** 32;
        this.seed = (a * this.seed + c) % m;
        return this.seed / m;
    }
}

// NOT USED BUT KEEPING 

//Can be used to turn a string into a short numer (~10 digits for our length). NOT REVERSIBLE
// export function hashStringToNumber(str: string) {
//     let hash = 0;
//     if (str.length === 0) return hash;

//     for (let i = 0; i < str.length; i++) {
//         const char = str.charCodeAt(i);
//         hash = ((hash << 5) - hash) + char;
//         hash |= 0; // Convert to 32bit integer
//     }
//     return hash;
// }

//Can be used to generate a random based on a random number and 2 other numbers
// export function seededGridRandom(seed: number, gridPosX: number, gridPosY: number) {
//     var combinedSeed = seed + gridPosX * 31 + gridPosY * 17; // Combine seed with grid positions
//     var x = Math.sin(combinedSeed) * 10000;
//     return x - Math.floor(x);
// }