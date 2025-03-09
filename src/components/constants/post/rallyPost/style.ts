import styled from "styled-components";

export const PostItemContainer = styled.div`
    width: 300px;
    margin: 0px;
    position:relative;
`;

export const PostImgBox = styled.div `
    width: 100%;
    height: 180px;
    background-color: black;
    border-radius: 5px;
    position:relative;
`;

export const PostImg = styled.img`
    color: white;
    border-radius: 5px;
    width: 100%;
    height: 180px;
    object-fit:contain;
`;

export const Category = styled.div`
    position: absolute;
    right: 8px;
    bottom: 12px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 24px;
    padding-right: 24px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px;
    border-color: black;
    border-style: solid;
    border-radius: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TitleTxt = styled.div`
    width: calc(100% - 12px);
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 8px;
    font-size: 20px;
    font-weight:600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TimeTxt = styled.div`
    width: calc(100% - 12px);
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 4px;
    font-size: 16px;
    font-weight:400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #7F7F7F;
`;

export const MasterTxt = styled.div`
    width: calc(100% - 12px);
    margin-left: 6px;
    margin-right: 6px;
    font-size: 16px;
    font-weight:400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #7F7F7F;
`;

export const BookMarkBtn = styled.img`
    width: 28px;
    position: absolute;
    bottom: 12px;
    right: 6px;
`;