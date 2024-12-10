export const transform = (numbers: number[], randomSeed: number) => {
    return [numbers.length * randomSeed, numbers.join('-')]
}