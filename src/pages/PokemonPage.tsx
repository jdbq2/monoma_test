import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../app/services/pokemonAPI";
import { PokemonPageWrapper } from "../styles/components/PageWrappers";
import {
    PokemonDetailImage,
    PokemonDetailImageWrapper,
    PokemonDetailText,
    PokemonDetailTextWrapper,
} from "../styles/components/PokemonDetails";
import { TitleBig } from "../styles/components/Fonts";
import { useAppDispatch } from "../app/hooks/hooks";
import { validateAuth } from "../app/slices/userSlice";
import { useEffect } from "react";
import { Circles } from "react-loader-spinner";

const PokemonPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { data, isLoading } = useGetPokemonByIdQuery(id!);
    useEffect(() => {
        dispatch(validateAuth());
    }, []);

    if (isLoading) {
        return (
            <PokemonPageWrapper>
                <Circles
                    height="80"
                    width="80"
                    color="#84cc16"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </PokemonPageWrapper>
        );
    }

    return (
        <>
            {data && (
                <PokemonPageWrapper>
                    <PokemonDetailImageWrapper>
                        <PokemonDetailImage
                            src={
                                data.sprites.other?.dream_world.front_default ||
                                data.sprites.front_default
                            }
                            alt={data.name}
                            id="detail-pokemon-image"
                        />
                    </PokemonDetailImageWrapper>
                    <PokemonDetailTextWrapper>
                        <TitleBig>{data.name.toUpperCase()}</TitleBig>
                        <PokemonDetailText>
                            Peso: {data.weight} kg
                        </PokemonDetailText>
                        <PokemonDetailText>
                            Altura: {data.height} mts
                        </PokemonDetailText>
                        <PokemonDetailText>
                            Tipo: {data.types.map((type) => type.type.name)}
                        </PokemonDetailText>
                        <PokemonDetailText>
                            Cantidad de Movimientos: {data.moves.length}
                        </PokemonDetailText>
                        <PokemonDetailText>
                            Habilidades:{" "}
                            {data.abilities.map(
                                (ability) => `#${ability.ability.name} `
                            )}
                        </PokemonDetailText>
                    </PokemonDetailTextWrapper>
                </PokemonPageWrapper>
            )}
        </>
    );
};

export default PokemonPage;
