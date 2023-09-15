import tw from "twin.macro";

export const CardWrapper = tw.div`bg-white animate-fadeIn transition-all w-64 h-90 rounded-lg my-2 mx-4 overflow-hidden shadow-sm hover:shadow-lg`;
export const PokemonCardImageWrapper = tw.div`bg-gray-100 p-6 w-full h-52 relative flex justify-center items-center`;
export const PokemonCardImage = tw.img`max-w-full max-h-full drop-shadow-2xl`;
export const PokemonCardWeight = tw.p`font-pokemon font-thin tracking-widest absolute right-2 bottom-2 bg-lime-500 text-white px-4 py-2 rounded-lg text-xs`;
export const PokemonCardName = tw.h2`font-pokemon font-thin tracking-widest m-4 text-2xl font-extrabold text-lime-800`;
export const PokemonCardAbility = tw.p`mt-8 text-amber-500 px-4 py-2 font-pokemon font-thin tracking-widest text-xs`;
