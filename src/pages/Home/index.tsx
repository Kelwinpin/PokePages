import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { searchPokemon } from "../../utils/api";
import Button from "../../components/Button";

export const Home = () => {
    const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
    const [numberInPokedex, setNumberInPokedex] = useState(1);
    const handleNext = () => {
        setNumberInPokedex(numberInPokedex + 1);
    };
    const handlePrevious = () => {
        if (numberInPokedex !== 0) {
            setNumberInPokedex(numberInPokedex - 1);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
        const pkm = await searchPokemon(numberInPokedex);
        setPokemon(pkm);
    };

        fetchData();
    }, [numberInPokedex]);

    return(
        <div>
            <h1>PokePages</h1>
            {pokemon &&
             <Card id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites}/>
            }            
            <Button onClick={handlePrevious}>{"<"}</Button>
            <Button onClick={handleNext}>{">"}</Button>
        </div>
    );
}