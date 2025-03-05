import React, { useState } from 'react';
import './Home.css';
import CommunityPost from '../data/CommunityPost';
import Post from '../data/Post';
import PostHorizontalList from '../postList/PostHorizontalList';
import PostVerticalList from '../postList/PostVerticalList';

const communityPostList = [
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
        <div id='parentContainer'>
            <div id='adContainer'>
                <div id='mainBanner'>
                </div>
                <div id='qrBox'>
                </div>
                <div id='notification'>
                </div>
            </div>
            <div id='subBanner'>
            </div>
            <PostHorizontalList postList={postList} subjectTxt='대회안내' path='/rally'/>
            <PostHorizontalList postList={postList} subjectTxt='구인공고' path='/job'/>
            <PostVerticalList postList={communityPostList} subjectTxt='커뮤니티' path='/community'/>
        </div>
    );
}

export default Home;