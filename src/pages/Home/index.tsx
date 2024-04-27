import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { searchPokemon } from "../../utils/api";

export const Home = () => {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
        const pkm = await searchPokemon("1");
        setPokemon(pkm);
    };

        fetchData();
    }, []);

    return(
        <div>
            <h1>PokePages</h1>
            {pokemon ?
             <Card id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites}/>
             :
             <h2></h2>
            }
        </div>
    );
}