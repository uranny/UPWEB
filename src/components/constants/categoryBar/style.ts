import styled from "styled-components";

export const CategoryBarContainer = styled.span`
    user-select: none;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow: hidden;
`;

export const CategoryBoxContainer = styled.ul`
    user-select: none;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    white-space: nowrap;
    list-style-type: none;
    flex-wrap: nowrap;
    align-items: center;
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

export const CategoryBox = styled.li`
    user-select: none;
    display: inline-block;
    margin: 0px 8px;
    border: 1px solid black;
    border-radius: 20px;
    color: black;
    font-size: 12px;
    font-weight: bolder;
    text-align: center;
    padding: 6px 24px;
`;