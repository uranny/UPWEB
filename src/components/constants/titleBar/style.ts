import styled from "styled-components";

export const TitleBar = styled.div`
    margin-top: 24px;
    margin-left: 12px;
    margin-right: 12px;
`;

export const Title = styled.span`
    float: left;
    margin-left: 4px;
    font-size: 20px;
    font-weight: border;
`;

export const CreatePostBox = styled.span`
    float: right;
    background-color: black;
    color: white;
    font-size: 12px;
    padding: 6px 20px 6px 20px;
    border-radius: 8px;
    font-weight: border;

    &:hover{
        background-color:rgb(58, 58, 58);
    }
`;