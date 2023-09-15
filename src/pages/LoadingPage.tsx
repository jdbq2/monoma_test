import { Circles } from "react-loader-spinner";
import { LoadingPageWrapper } from "../styles/components/PageWrappers";

const LoadingPage = () => {
    return (
        <LoadingPageWrapper>
            <Circles
                height="80"
                width="80"
                color="#84cc16"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </LoadingPageWrapper>
    );
};

export default LoadingPage;
