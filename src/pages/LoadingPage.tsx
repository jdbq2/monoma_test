import { Circles } from "react-loader-spinner";
import { LoadingPageWrapper } from "../styles/components/PageWrappers";

const LoadingPage = () => {
    return (
        <LoadingPageWrapper>
            <Circles
                height="80"
                width="80"
                color="#2563eb"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </LoadingPageWrapper>
    );
};

export default LoadingPage;
