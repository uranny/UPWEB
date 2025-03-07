import React, { useState } from 'react';
import * as P from '../../data/DummyData.ts';
import PostHorizontalList from '../../common/postList/horizontal/PostHorizontalList.tsx';
import PostVerticalList from '../../common/postList/vertical/PostVerticalList.tsx';
import MainSlider from '../../common/slider/MainSlider.tsx';
import * as S from './style.ts';

function Home() {
    return (
        <S.HomeContainer>
            <S.AdContainer>
                <MainSlider/>
                <S.QrBox>
                </S.QrBox>
                <S.NotificationBox>
                </S.NotificationBox>
            </S.AdContainer>
            <S.SubBanner>
            </S.SubBanner>
            <PostHorizontalList postList={P.postList} subjectTxt='대회안내' path='/rally'/>
            <PostHorizontalList postList={P.postList} subjectTxt='구인공고' path='/job'/>
            <PostVerticalList postList={P.communityPostList} subjectTxt='커뮤니티' path='/community'/>
        </S.HomeContainer>
    );
}

export default Home;