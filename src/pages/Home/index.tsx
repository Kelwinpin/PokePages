import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { searchPokemon } from "../../utils/api";
import Button from "../../components/Button";
import { Container, Title } from "./styles";

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
        <Container>
            <Title>PokéPages</Title>
            {pokemon &&
             <Card id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites} />
            } 
            <div>         
                <Button onClick={handlePrevious}>{"<"}</Button>
                <Button>{"Info"}</Button>
                <Button onClick={handleNext}>{">"}</Button>
            </div>
        </Container>  
    );
}