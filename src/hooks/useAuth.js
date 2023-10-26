import { useSelector } from "react-redux";
import { selectIsLogIn, selectIsRefresh, selectUser } from "redux/auth/selectors";

export const useAuth = () => {
    const isLogIn = useSelector(selectIsLogIn);
    const isRefresh = useSelector(selectIsRefresh);
    const user = useSelector(selectUser);

    return {
        isLogIn,
        isRefresh,
        user,
    };
};