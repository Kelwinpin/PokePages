import { StyledCard } from "./styles";

export function Card ({id, name, sprites}: Pokemon){
    return(
        <StyledCard key={id}>
            <img src={sprites.front_default} alt={`${name}-Image`} width="300px"/>
            <h3>{id} - {name.toUpperCase()}</h3>
        </StyledCard>
    )
}