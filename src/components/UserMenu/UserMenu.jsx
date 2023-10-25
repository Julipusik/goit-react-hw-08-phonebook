import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations";

export const UserMenu= () => {
    const dispatch = useDispatch();
    const { name } = useAuth();

    return (
        <div className="userdiv">
            <p>{name}</p>
            <button type="button" onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    )
}