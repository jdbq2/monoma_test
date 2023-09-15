import tw from "twin.macro";

export const HeaderMenuWrapper = tw.div`relative`;
export const HeaderMenuMainOption = tw.button`transition-all hover:bg-lime-700 p-2 rounded-full flex justify-center items-center`;
export const HeaderMenuImage = tw.img`w-10 mr-2 rounded-full`;
export const HeaderMenuOptionsWrapper = tw.div`z-50 absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden`;
export const HeaderMenuOption = tw.button`transition-all block text-gray-800 px-4 py-2 hover:bg-gray-200 w-full text-left`;
