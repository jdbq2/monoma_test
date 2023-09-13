import { Link } from "react-router-dom";
import { HeaderTitle } from "../styles/components/Fonts";
import { HeaderWrapper } from "../styles/components/Header";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/">
                <HeaderTitle>PokeAPI</HeaderTitle>
            </Link>
            <HeaderMenu />
        </HeaderWrapper>
    );
};

export default Header;
