import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { useAppSelector } from "../app/hooks/hooks";

const PublicRoutes = () => {
    const token = useAppSelector((state) => state.user.token);
    if (token) return <Navigate to="/" />;
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
    );
};

export default PublicRoutes;
