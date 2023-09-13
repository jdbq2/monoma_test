import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { useAppSelector } from "../app/hooks/hooks";
import Header from "../components/Header";

const Dashboard = React.lazy(() => import("../pages/DashboardPage"));
const PokemonPage = React.lazy(() => import("../pages/PokemonPage"));
const UserPage = React.lazy(() => import("../pages/UserPage"));

const PrivateRoutes = () => {
    const token = useAppSelector((state) => state.user.token);
    if (!token) return <Navigate to="/auth" />;

    return (
        <>
            <Header />
            <Routes>
                <Route path="pokemons" element={<Dashboard />} />
                <Route path="pokemon/:id" element={<PokemonPage />} />
                <Route path="user" element={<UserPage />} />
                <Route path="*" element={<Navigate to="/pokemons" replace />} />
            </Routes>
        </>
    );
};

export default PrivateRoutes;
