import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { clearUserAndToken } from "../app/slices/userSlice";
import { MdDensityMedium, MdClose } from "react-icons/md";
import {
    HeaderMenuWrapper,
    HeaderMenuMainOption,
    HeaderMenuOptionsWrapper,
    HeaderMenuOption,
    HeaderMenuImage,
} from "../styles/components/HeaderMenu";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.user.user);
    let user = null;
    if (data) {
        if (typeof data === "object") {
            user = data;
        } else {
            user = JSON.parse(data);
        }
    }
    const handleClick = () => {
        dispatch(clearUserAndToken());
    };
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            {user && (
                <HeaderMenuWrapper onClick={() => toggleDropdown()}>
                    <HeaderMenuMainOption id="main-menu-button">
                        <HeaderMenuImage src={user?.image} alt="" />
                        {isDropdownOpen ? (
                            <MdClose
                                color={"white"}
                                style={{ fontSize: "1.5rem" }}
                            />
                        ) : (
                            <MdDensityMedium
                                color={"white"}
                                style={{ fontSize: "1.5rem" }}
                            />
                        )}
                    </HeaderMenuMainOption>
                    {isDropdownOpen && (
                        <HeaderMenuOptionsWrapper>
                            <Link to={"/user"}>
                                <HeaderMenuOption>Perfil</HeaderMenuOption>
                            </Link>
                            <HeaderMenuOption onClick={() => handleClick()}>
                                Logout
                            </HeaderMenuOption>
                        </HeaderMenuOptionsWrapper>
                    )}
                </HeaderMenuWrapper>
            )}
        </>
    );
};

export default HeaderMenu;
