import React, { useState } from 'react';
import * as S from './style.ts';
import CategoryBar from '../../constants/categoryBar/index.tsx';
import { CategoryLst } from '../../data/DummyData.ts';
import TitleBar from '../../constants/titleBar/index.tsx';
import { postList } from '../../data/DummyData.ts';
import RallyPost from '../../constants/post/rallyPost/index.tsx';

function Rally() {

    const [categoryState, setCategoryState] = useState("전체")

    return (
        <S.RallyContainer>
            <CategoryBar categoryList={CategoryLst} onClick={(item) => {setCategoryState(item)}}/>
            <TitleBar category={categoryState} title='대회안내'/>
            <S.PostContainer>
                {postList.map((item, index) => 
                    <RallyPost post={item} path="/job/page"/>
                )}
            </S.PostContainer>
        </S.RallyContainer>
    );
}

export default Rally;