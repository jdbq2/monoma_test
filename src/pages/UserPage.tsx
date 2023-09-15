import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks/hooks";
import { validateAuth } from "../app/slices/userSlice";
import { TitleBig } from "../styles/components/Fonts";
import { UserPageWrapper } from "../styles/components/PageWrappers";
import {
    UserDetailImage,
    UserDetailImageWrapper,
    UserDetailText,
    UserDetailTextWrapper,
} from "../styles/components/UserDetails";

const UserPage = () => {
    const dispatch = useAppDispatch();
    const user: User = JSON.parse(localStorage.getItem("userInfo") || "{}");
    useEffect(() => {
        dispatch(validateAuth());
    }, []);

    return (
        <>
            {user && (
                <UserPageWrapper>
                    <UserDetailImageWrapper>
                        <UserDetailImage
                            src={user.image}
                            alt={user.name}
                            id="user-image"
                        />
                    </UserDetailImageWrapper>
                    <UserDetailTextWrapper>
                        <TitleBig>{user.name}</TitleBig>
                        <UserDetailText>Telefono: {user.phone} </UserDetailText>
                        <UserDetailText>Email: {user.email} </UserDetailText>
                    </UserDetailTextWrapper>
                </UserPageWrapper>
            )}
        </>
    );
};

export default UserPage;
