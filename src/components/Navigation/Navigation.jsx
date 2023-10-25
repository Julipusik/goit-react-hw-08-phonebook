import { useAuth } from "hooks/useAuth";
import { NavContainer, NavigationLink } from "./Navigation.styled";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <NavContainer>
            <NavigationLink to={'/'}>Home</NavigationLink>
            {isLoggedIn && <NavigationLink to={`/contacts`}>Contacts</NavigationLink>}
        </NavContainer>
    )
};