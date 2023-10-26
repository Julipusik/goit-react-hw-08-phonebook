import { useAuth } from "hooks/useAuth";
import { NavContainer, NavigationLink } from "./Navigation.styled";

export const Navigation = () => {
    const { isLogIn } = useAuth();

    return (
        <NavContainer>
            <NavigationLink to={'/'}>Home</NavigationLink>
            {isLogIn && <NavigationLink to={`/contacts`}>Contacts</NavigationLink>}
        </NavContainer>
    )
};