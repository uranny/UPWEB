import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListContainer = styled.div`
    overflow: hidden;
    width: 100%;
    margin-top: 34px;
`;

export const SubjectTxt = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: 16px;
`;

export const MoreTxt = styled.span`
    font-size: 12px;
    font-weight: lighter;
    margin-left: 4px;
`;

export const PostContainer = styled.div`
    width: calc(100%-16px);
    height: 270px;
    padding: 4px;
    margin-top: 12px;
    margin-left: 8px;
    margin-right: 8px;

    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover{
    text-decoration: none;
    color: #7a7a7a;
    }
`;
