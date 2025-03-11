import React, { useState } from 'react';
import * as S from './style.ts';
import CategoryBar from '../../constants/categoryBar/index.tsx';
import { CategoryLst } from '../../data/DummyData.ts';

function Rally() {
    return (

        <S.RallyContainer>
            <CategoryBar categoryList={CategoryLst}></CategoryBar>
        </S.RallyContainer>
    );
}

export default Rally;