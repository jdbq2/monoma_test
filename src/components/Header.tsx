import { Link } from "react-router-dom";
import { MdOutlineHouse } from "react-icons/md";
import { HeaderTitle } from "../styles/components/Fonts";
import { HeaderWrapper } from "../styles/components/Header";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/">
                <HeaderTitle>
                    <MdOutlineHouse /> PokeDex
                </HeaderTitle>
            </Link>
            <HeaderMenu />
        </HeaderWrapper>
    );
};

export default Header;
