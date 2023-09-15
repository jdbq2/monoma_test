import tw from "twin.macro";

export const AppWrapper = tw.div`bg-gray-800  relative min-h-screen h-full flex flex-col justify-start `;
export const LoginWrapper = tw.div`bg-gray-800 w-full h-screen flex flex-col justify-center items-center lg:justify-around lg:flex-row`;
export const LoadingPageWrapper = tw.div`bg-gray-800  w-full min-h-screen flex justify-center items-center`;
export const DashboardPageWrapper = tw.div`bg-gray-800  mt-16 mb-16 w-full h-full flex flex-col justify-start items-center`;
export const DasboardCardsWrapper = tw.div`w-full h-full flex justify-center items-center p-4 flex-wrap`;
export const PokemonPageWrapper = tw.div`bg-gray-800  mt-16 lg:mt-32 mb-16 w-full h-full flex flex-col justify-start items-center lg:flex-row lg:justify-evenly`;
export const UserPageWrapper = tw.div`bg-gray-800 mt-16 lg:mt-32 mb-16 w-full h-full flex flex-col justify-start items-center lg:flex-row lg:justify-evenly`;
