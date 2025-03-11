import React, { useState } from 'react';
import * as S from './style.ts';
import CategoryBar from '../../constants/categoryBar/index.tsx';

function Community() {

    const categoryLst : string[] = ['전체', '잡담', '창작', '공지사항']

    return (
        <S.CommunityContainer>
            <CategoryBar categoryList={categoryLst}/>
        </S.CommunityContainer>
    );
}

export default Community;