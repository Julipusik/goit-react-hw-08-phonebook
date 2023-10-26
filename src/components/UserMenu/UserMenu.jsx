import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";
import { UserContainer, LogOutBtn } from "./UserMenu.styled";

export const UserMenu= () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <UserContainer>
            <p>{user}</p>
            <LogOutBtn type="button" onClick={() => dispatch(logOut())}>Log out</LogOutBtn>
        </UserContainer>
    )
}