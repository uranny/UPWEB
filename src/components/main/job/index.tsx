import React, { useState } from 'react';
import * as S from './style.ts'
import CategoryBar from '../../constants/categoryBar/index.tsx';
import TitleBar from '../../constants/titleBar/index.tsx';
import { CategoryLst } from '../../data/DummyData.ts';

function Job() {

    const [categoryState, setCategoryState] = useState("전체")

    return (
        <S.JobContainer>
            <CategoryBar categoryList={CategoryLst} onClick={(item) => {setCategoryState(item)}}/>
            <TitleBar category={categoryState} title='구인공고'/>
        </S.JobContainer>
    );
}

export default Job;