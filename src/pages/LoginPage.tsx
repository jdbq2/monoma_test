import LoginForm from "../components/LoginForm";
import { TitleBig } from "../styles/components/Fonts";
import { LoginWrapper } from "../styles/components/PageWrappers";

const LoginPage = () => {
    return (
        <LoginWrapper>
            <TitleBig>Pokemon API</TitleBig>
            <LoginForm />
        </LoginWrapper>
    );
};

export default LoginPage;
