import { styled } from "styled-components";

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    p {
        color: white;
        font-size: 20px;
    }
`;

export const LogOutBtn = styled.button`
    padding: 6px 12px;
    border: 1px solid #EAC645;
    border-radius: 12px;
    background: #EAC645;
    font-size: 16px;
    height: 100%;

    &:hover {
        border: 1px solid #4F2EE8;
        background: #4F2EE8;
        color: white;
    }
`;