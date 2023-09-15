import LoginForm from "../components/LoginForm";
import { TitleBig } from "../styles/components/Fonts";
import { LoginWrapper } from "../styles/components/PageWrappers";

const LoginPage = () => {
    return (
        <LoginWrapper>
            <TitleBig>PokeDex</TitleBig>
            <LoginForm />
        </LoginWrapper>
    );
};

export default LoginPage;
