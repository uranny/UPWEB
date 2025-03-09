import styled from "styled-components";

export const SliderContentImg = styled.img`
    user-select: none;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ShadowBox = styled.div`
    user-select: none;
    position: relative;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    border-radius: 5px;
    background-color:rgba(0, 0, 0, 0.6);
`;

export const TextBox = styled.span`
    user-select: none;
    position: absolute;
    left: 30px;
    bottom: 30px;
`;

export const TitleTxt = styled.div`
    user-select: none;
    color: white;
    font-size: 28px;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PeriodTxt = styled.div`
    user-select: none;
    color: white;
    font-size: 18px;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ButtonBox = styled.span`
    user-select: none;
    position: absolute;
    right: 30px;
    bottom: 20px;
`;

export const RightButton = styled.span`
    user-select: none;
    color: white;
    font-size: 28px;
    font-weight: bolder;
    margin-left: 12px;

    &:active{
        color:rgb(195, 195, 195);
    }
`;

export const LeftButton = styled.span`
    user-select: none;
    color: white;
    font-size: 28px;
    font-weight: bolder;

    &:active{
        color:rgb(195, 195, 195);
    }
`;