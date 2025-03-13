import styled from "styled-components";

export const HomeContainer = styled.div`
    margin-left: 150px;
    margin-right: 150px;
`

export const AdContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
    display: grid;
    grid-template-rows: repeat(2, 140px);
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`

export const MainBanner = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    background-color: aquamarine;
    border-radius: 5px;
`;

export const SubBanner = styled.div`
    display: block;
    width: 100%;
    height: 90px;
    background-color: black;
    margin-bottom: 12px;
    border-radius: 5px;
`