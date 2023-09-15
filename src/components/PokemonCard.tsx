import { FC, Key } from "react";
import {
    CardWrapper,
    PokemonCardAbility,
    PokemonCardImage,
    PokemonCardImageWrapper,
    PokemonCardName,
    PokemonCardWeight,
} from "../styles/components/PokemonCard";
import { Link } from "react-router-dom";
interface Props {
    pokemon: Pokemon;
    key: Key;
}
const PokemonCard: FC<Props> = ({ pokemon }) => {
    return (
        <Link to={`/pokemon/${pokemon.id}`}>
            <CardWrapper>
                <PokemonCardImageWrapper>
                    <PokemonCardImage
                        src={
                            pokemon.sprites.other?.dream_world.front_default ||
                            pokemon.sprites.front_default
                        }
                        alt={pokemon.name}
                    />
                    <PokemonCardWeight>
                        Peso: {pokemon.weight} kg
                    </PokemonCardWeight>
                </PokemonCardImageWrapper>
                <PokemonCardName>{pokemon.name}</PokemonCardName>
                <PokemonCardAbility>
                    {pokemon.abilities.map((ability) => {
                        return `#${ability.ability.name} `;
                    })}
                </PokemonCardAbility>
            </CardWrapper>
        </Link>
    );
};

export default PokemonCard;
