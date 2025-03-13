import React, { useState } from 'react';
import * as S from './style.ts';
import CategoryBar from '../../constants/categoryBar/index.tsx';
import TitleBar from '../../constants/titleBar/index.tsx';

function Community() {

    const categoryLst : string[] = ['전체', '잡담', '창작', '공지사항'];
    const [categoryState, setCategoryState] = useState("전체");

    return (
        <S.CommunityContainer>
            <CategoryBar categoryList={categoryLst} onClick={(item) => {setCategoryState(item)}}/>
            <TitleBar category={categoryState} title='커뮤니티'/>
        </S.CommunityContainer>
    );
}

export default Community;