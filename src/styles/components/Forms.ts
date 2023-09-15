import tw from "twin.macro";

export const Form = tw.form`bg-white animate-slideInDown w-4/5 sm:w-3/5 mx-auto mt-4 p-4 border rounded-lg shadow-lg lg:w-2/5 lg:mx-0`;
export const InputWrapper = tw.div`mb-4 relative`;
export const InputLabel = tw.label`font-pokemon block text-gray-700 font-thin tracking-widest`;
export const LoginInputForm = tw.input`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-lime-500 font-pokemon font-thin tracking-widest`;
export const ShowPWButton = tw.button`absolute top-0 right-2 text-lime-500 focus:outline-none font-pokemon font-thin tracking-widest`;
export const SubmitButton = tw.button`bg-lime-500 text-white px-4 py-2 rounded-lg hover:bg-lime-600 font-pokemon font-thin tracking-widest`;
export const ErrorMessage = tw.p`text-xs text-red-500 whitespace-normal font-pokemon font-thin tracking-widest`;
