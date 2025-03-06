import styled from "styled-components";

export const PostItemContainer = styled.div`
    width: 100%;
    height: 40px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px;
    border-color: black;
    border-style: solid;
    display : grid;
    grid-template-columns: repeat(12,  1fr);
    grid-template-rows: 1fr;
`;

export const CategoryBox = styled.div`
    grid-column: 1 / 2;
    margin-top: 13px;
    text-align: center; 
    font-size: 14px;
`;

export const TitleBox = styled.div`
    grid-column: 2 / 10;
    margin-top: 13px;
    text-align: center; 
    font-size: 14px;
`;


export const MasterBox = styled.div`
    grid-column: 10 / 11;
    margin-top: 13px;
    text-align: center; 
    font-size: 14px;
`;

export const TimeBox = styled.div`
    grid-column: 11 / 12;
    margin-top: 13px;
    text-align: center; 
    font-size: 14px;
`;

export const CommentBox = styled.div`
    grid-column: 12 / 13;
    margin-top: 13px;
    text-align: center; 
    font-size: 14px;
`;