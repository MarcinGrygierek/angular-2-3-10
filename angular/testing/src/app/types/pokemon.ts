export type SinglePokemonResponse = {
    name: string;
}

export type PokemonResponse = {
    count: number;
    results: SinglePokemonResponse[];
}