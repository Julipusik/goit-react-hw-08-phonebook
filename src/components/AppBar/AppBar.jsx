import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const { isLogIn } = useAuth();

    return (
        <Header>
            <Navigation />
            {isLogIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
};