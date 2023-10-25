import { AuthContainer, AuthLink } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
        <AuthContainer>
            <AuthLink to={`/register`}>Register</AuthLink>
            <AuthLink to={`/login`}>Log in</AuthLink>
        </AuthContainer>
    )
}