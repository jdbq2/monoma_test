import Router from "./routes/Router";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "./pages/LoadingPage";
import { AppWrapper } from "./styles/components/PageWrappers";

function App() {
    return (
        <Suspense fallback={<LoadingPage />}>
            <ToastContainer />
            <AppWrapper>
                <Router />
            </AppWrapper>
        </Suspense>
    );
}

export default App;
