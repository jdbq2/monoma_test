import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={<PublicRoutes />} />
                <Route path="/*" element={<PrivateRoutes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
