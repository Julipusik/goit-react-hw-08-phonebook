import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
    display: flex;
    gap: 40px;
`;

export const NavigationLink = styled(Link)`
    font-size: 20px;
    color: white;
    text-decoration: none;
`;