import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import {
    Pokemon,
    PokemonPaginationResponse,
    PokemonTransformedResponse,
} from "../../../types/types";
import { fetchAllData } from "../../helpers/fetchData";

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: retry(
        fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
        {
            maxRetries: 2,
        }
    ),
    keepUnusedDataFor: 30,
    endpoints: (builder) => ({
        getPokemons: builder.query<PokemonTransformedResponse, number>({
            query: (offset) => `?limit=10&offset=${offset}`,
            transformResponse: async (
                response: PokemonPaginationResponse
            ): Promise<any> => {
                try {
                    const PokemonsURLs = response.results.map(
                        (pokemon) => pokemon.url
                    );
                    const finalResults = await fetchAllData(PokemonsURLs);
                    return { count: response.count, pokemons: finalResults };
                } catch (err) {
                    console.log(err);
                }
            },
        }),
        getPokemonById: builder.query<Pokemon, string>({
            query: (id) => `${id}`,
        }),
    }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;
