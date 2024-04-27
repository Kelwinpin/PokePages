import axios, { AxiosResponse } from "axios";

export async function searchPokemon(params:string): Promise<Pokemon>{
        try {
            const response: AxiosResponse<any, any> = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params}`);
            const pokemonData: Pokemon = response.data;
            return pokemonData;
        } catch (error) {
            throw new Error("Error ao obter dados do Pokemon!");
        }
}
