import React, { useState } from 'react';
import CommunityPost from '../../data/CommunityPost.ts';
import Post from '../../data/Post.ts';
import PostHorizontalList from '../../common/postList/horizontal/PostHorizontalList';
import PostVerticalList from '../../common/postList/vertical/PostVerticalList';
import * as S from './style.ts';

const communityPostList : CommunityPost[] = [
    new CommunityPost({
        category : "잡담",
        title : "제목",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ['', '', '']
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),
    new CommunityPost({
        category : "잡담",
        title : "제목",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    }),

    new CommunityPost({
        category : "잡담",
        title : "제목",
        master : "uranny",
        createTime : new Date(2024, 10, 16), 
        comment : ["", "", ""]
    })
]

const postList = [
    new Post({
        img : "https://img-va.myshopline.com/image/store/2000343102/1637138871395/SK3-1016.jpeg?w=1000&h=1000",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img2",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img3",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img4",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img5",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img6",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    }),
    new Post({
        img : "img7",
        title : "titleasdfsadfsafasfsdafsadfsfdsfafadsfadsfds", 
        startTime : new Date(2024, 10, 16), 
        endTime : new Date(2025, 10, 16), 
        master : "uranny", 
        category : "it-소프트웨어", 
        bookMark : false
    })
]

function Home() {
    return (
        <S.HomeContainer>
            <S.AdContainer>
                <S.MainBanner>
                </S.MainBanner>
                <S.QrBox>
                </S.QrBox>
                <S.NotificationBox>
                </S.NotificationBox>
            </S.AdContainer>
            <div id='subBanner'>
            </div>
            <PostHorizontalList postList={postList} subjectTxt='대회안내' path='/rally'/>
            <PostHorizontalList postList={postList} subjectTxt='구인공고' path='/job'/>
            <PostVerticalList postList={communityPostList} subjectTxt='커뮤니티' path='/community'/>
        </S.HomeContainer>
    );
}

export default Home;