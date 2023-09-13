import tw from "twin.macro";

export const DropdownMenuWrapper = tw.div`relative`;
export const DropdownMenuMainOption = tw.button`transition-all hover:bg-blue-700 p-2 rounded-full`;
export const DropdownMenuOptionsWrapper = tw.div`z-50 absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden`;
export const DropdownMenuOption = tw.button`transition-all block text-gray-800 px-4 py-2 hover:bg-gray-200 w-full text-left`;
