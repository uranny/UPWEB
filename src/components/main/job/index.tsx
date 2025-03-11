import React, { useState } from 'react';
import * as S from './style.ts'
import CategoryBar from '../../constants/categoryBar/index.tsx';
import { CategoryLst } from '../../data/DummyData.ts';

function Job() {
    return (
        <S.JobContainer>
            <CategoryBar categoryList={CategoryLst}/>
        </S.JobContainer>
    );
}

export default Job;