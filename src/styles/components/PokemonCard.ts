import tw from "twin.macro";

export const CardWrapper = tw.div`transition-all w-64 h-90 rounded-lg my-2 mx-4 overflow-hidden border-2 border-blue-100 hover:shadow-lg`;
export const PokemonCardImageWrapper = tw.div`bg-blue-100 p-6 w-full h-52 relative flex justify-center items-center`;
export const PokemonCardImage = tw.img`max-w-full max-h-full`;
export const PokemonCardWeight = tw.p`absolute right-2 bottom-2 bg-blue-500 text-white px-4 py-2 rounded-lg `;
export const PokemonCardName = tw.h2`m-4 text-2xl font-extrabold text-blue-500`;
export const PokemonCardAbility = tw.p`mt-8 text-blue-500 px-4 py-2`;
