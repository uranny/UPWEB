import React, { useState } from 'react';
import * as S from './style.ts';
import CategoryBar from '../../constants/categoryBar/index.tsx';
import CategoryList from '../../constants/list/horizontal/category/index.tsx';

function Rally() {
    const categoryList = ["1", "21321", '21']
    return (

        <S.RallyContainer>
            <CategoryBar categoryList={categoryList}></CategoryBar>
        </S.RallyContainer>
    );
}

export default Rally;