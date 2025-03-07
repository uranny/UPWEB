import styled from "styled-components";

export const SliderConatainer = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    border-radius: 5px;
`;

export const ShadowBox = styled.div`
    position: relative;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    border-radius: 5px;
    background-color:rgba(0, 0, 0, 0.6);
`;

export const TextBox = styled.span`
    position: absolute;
    left: 30px;
    bottom: 30px;
`;

export const TitleTxt = styled.div`
    color: white;
    font-size: 28px;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PeriodTxt = styled.div`
    color: white;
    font-size: 18px;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ButtonBox = styled.span`
    position: absolute;
    right: 30px;
    bottom: 20px;
`;

export const RightButton = styled.span`
    color: white;
    font-size: 28px;
    font-weight: bolder;
    margin-left: 12px;

    &:active{
        color:rgb(195, 195, 195);
    }
`;

export const LeftButton = styled.span`
    color: white;
    font-size: 28px;
    font-weight: bolder;

    &:active{
        color:rgb(195, 195, 195);
    }
`;