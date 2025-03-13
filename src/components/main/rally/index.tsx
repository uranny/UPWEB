import React, { useState } from 'react';
import * as S from './style.ts';
import CategoryBar from '../../constants/categoryBar/index.tsx';
import { CategoryLst } from '../../data/DummyData.ts';
import TitleBar from '../../constants/titleBar/index.tsx';

function Rally() {

    const [categoryState, setCategoryState] = useState("전체")

    return (
        <S.RallyContainer>
            <CategoryBar categoryList={CategoryLst} onClick={(item) => {setCategoryState(item)}}/>
            <TitleBar category={categoryState} title='대회안내'/>
        </S.RallyContainer>
    );
}

export default Rally;