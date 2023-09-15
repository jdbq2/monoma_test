import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: localStorage.getItem("userInfo"),
        token: localStorage.getItem("userToken"),
    },
    reducers: {
        setUserAndToken: (state, action) => {
            const user = action.payload;
            const { token, ...userInfo } = user;
            state.token = token;
            state.user = userInfo;
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            localStorage.setItem("userToken", token);
        },
        clearUserAndToken: (state) => {
            state.token = null;
            state.user = null;
            localStorage.clear();
        },
        validateAuth: (state) => {
            const userInfo = localStorage.getItem("userInfo");
            const userToken = localStorage.getItem("userToken");
            if (!userInfo || !userToken) {
                state.token = null;
                state.user = null;
                localStorage.clear();
                toast.error(`Debes autenticarte de nuevo`, {
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
        },
    },
});

export const { setUserAndToken, clearUserAndToken, validateAuth } =
    userSlice.actions;
