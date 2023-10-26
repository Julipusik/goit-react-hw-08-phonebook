import { useAuth } from "hooks/useAuth";
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLogIn, isRefresh } = useAuth();
    const shouldRedirect = !isLogIn && !isRefresh;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}