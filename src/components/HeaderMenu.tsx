import { useState } from "react";
import { useAppDispatch } from "../app/hooks/hooks";
import { clearUserAndToken } from "../app/slices/userSlice";
import { MdDensityMedium, MdClose } from "react-icons/md";
import {
    DropdownMenuWrapper,
    DropdownMenuMainOption,
    DropdownMenuOptionsWrapper,
    DropdownMenuOption,
} from "../styles/components/DropdownMenu";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(clearUserAndToken());
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <DropdownMenuWrapper onClick={() => toggleDropdown()}>
            <DropdownMenuMainOption id="main-menu-button">
                {isDropdownOpen ? (
                    <MdClose color={"white"} style={{ fontSize: "1.5rem" }} />
                ) : (
                    <MdDensityMedium
                        color={"white"}
                        style={{ fontSize: "1.5rem" }}
                    />
                )}
            </DropdownMenuMainOption>
            {isDropdownOpen && (
                <DropdownMenuOptionsWrapper>
                    <Link to={"/user"}>
                        <DropdownMenuOption>Perfil</DropdownMenuOption>
                    </Link>
                    <DropdownMenuOption onClick={() => handleClick()}>
                        Logout
                    </DropdownMenuOption>
                </DropdownMenuOptionsWrapper>
            )}
        </DropdownMenuWrapper>
    );
};

export default HeaderMenu;
