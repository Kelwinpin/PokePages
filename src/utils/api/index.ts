import axios from "axios";

export async function searchPokemon<T>(params:string): Promise<T[]>{
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params}/`);
        return data;
    } catch (error) {
        console.error(error);
    }
    return [];
}