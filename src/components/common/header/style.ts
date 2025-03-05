import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
    background-color: black;
`;

export const Img = styled.img`
    user-select: none;
    width: 70px;
    height: 70dx;
    margin-left: 8%;
`;

export const ContentBox = styled.div`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    float: right;
    margin-right: 105px;
`;

export const ChildNav = styled.div`
    text-decoration: none;
    user-select: none;
    display: inline-block;
    color: white;
    font-size: 16px;
    font-weight: bolder;
    text-align: center;
    padding: 8px 22px 8px 22px;
    margin: auto auto;
`;


export const NavLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover{
    text-decoration: none;
    color: #7a7a7a;
    }
`;

export const LoginBtn = styled(Link)`
    background-color: #3c3c3c;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    user-select: none;
    display: inline-block;
    color: white;
    font-size: 16px;
    font-weight: bolder;
    text-align: center;
    padding: 8px 22px 8px 22px;
    margin: auto auto;
`;