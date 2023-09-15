import tw from "twin.macro";

export const PokemonDetailImageWrapper = tw.div`w-auto lg:w-2/5 h-90 p-4  flex justify-center items-center`;
export const PokemonDetailImage = tw.img`animate-slideInDown h-full drop-shadow-2xl`;
export const PokemonDetailTextWrapper = tw.div`animate-fadeIn w-full lg:w-2/5  p-4 flex flex-col justify-center items-center lg:items-start`;
export const PokemonDetailText = tw.p`m-2 bg-lime-500 text-white px-4 py-2 rounded-lg font-pokemon font-thin tracking-widest`;
