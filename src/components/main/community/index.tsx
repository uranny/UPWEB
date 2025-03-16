import React, { useState } from 'react';
import * as S from './style.ts';
import CategoryBar from '../../constants/categoryBar/index.tsx';
import TitleBar from '../../constants/titleBar/index.tsx';
import CommunityPostBox from '../../constants/post/communityPost/CommunityPostBox.tsx';
import { communityPostList } from '../../data/DummyData.ts';

function Community() {

    const categoryLst : string[] = ['전체', '잡담', '창작', '공지사항'];
    const [categoryState, setCategoryState] = useState("전체");

    return (
        <S.CommunityContainer>
            <CategoryBar categoryList={categoryLst} onClick={(item) => {setCategoryState(item)}}/>
            <TitleBar category={categoryState} title='커뮤니티'/>
            <S.PostContainer>
                <CommunityPostBox post={null}/>
                {communityPostList.map((item, index) => 
                    <CommunityPostBox post={item}/>
                )}
            </S.PostContainer>
        </S.CommunityContainer>
    );
}

export default Community;