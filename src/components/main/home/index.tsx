import React, { useState } from 'react';
import * as P from '../../data/DummyData.ts';
import PostHorizontalList from '../../constants/list/horizontal/PostHorizontalList.tsx';
import PostVerticalList from '../../constants/list/vertical/PostVerticalList.tsx';
import MainSlider from '../../constants/slider/MainSlider.tsx';
import QrBox from '../../constants/qrBox/index.tsx';
import NotificationBox from '../../constants/notificationBox/index.tsx';
import * as S from './style.ts';

function Home() {
    return (
        <S.HomeContainer>
            <S.AdContainer>
                <MainSlider/>
                <QrBox/>
                <NotificationBox/>
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