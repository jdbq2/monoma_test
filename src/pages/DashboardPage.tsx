import { useState } from "react";
import { useGetPokemonsQuery } from "../app/services/pokemonAPI";
import {
    DasboardCardsWrapper,
    DashboardPageWrapper,
} from "../styles/components/PageWrappers";
import Pagination from "../components/Pagination";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "../../types/types";
import { Circles } from "react-loader-spinner";

const DashboardPage = () => {
    const [offset, setOffset] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data, isLoading, isError } = useGetPokemonsQuery(offset);
    let isBackDisabled: boolean = true;
    let isFrontDisabled: boolean = true;
    let totalPages: number = 0;

    const handleBack = () => {
        setOffset((offset) => offset - 10);
        setCurrentPage((page) => page - 1);
    };

    const handleAdvance = () => {
        setOffset(offset + 10);
        setCurrentPage(currentPage + 1);
    };

    if (data) {
        isBackDisabled = currentPage === 1;
        totalPages = Math.ceil(Number(data.count) / 10) - 1;
        isFrontDisabled = currentPage === totalPages;
    }

    if (isError) {
        //@ts-ignore
        toast.error(`${error.data.error}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <DashboardPageWrapper>
            <DasboardCardsWrapper>
                {isLoading && (
                    <Circles
                        height="80"
                        width="80"
                        color="#2563eb"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                )}
                {data &&
                    data.pokemons.map((pokemon: Pokemon) => {
                        return (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        );
                    })}
            </DasboardCardsWrapper>
            {data && (
                <Pagination
                    handleBack={handleBack}
                    handleAdvance={handleAdvance}
                    isBackDisabled={isBackDisabled}
                    isFrontDisabled={isFrontDisabled}
                    totalPages={totalPages}
                    currentPage={currentPage}
                />
            )}
        </DashboardPageWrapper>
    );
};

export default DashboardPage;
