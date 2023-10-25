import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
    const { isLoggenIn } = useAuth();

    return (
        <Header>
            <Navigation />
            {isLoggenIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
};