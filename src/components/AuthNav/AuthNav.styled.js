import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const AuthContainer = styled.div`
    display: flex;
    gap: 40px;
`;

export const AuthLink = styled(Link)`
    font-size: 20px;
    color: white;
    text-decoration: none;
`;