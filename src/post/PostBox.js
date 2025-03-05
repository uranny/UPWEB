import React, { useState } from 'react';
import './PostBox.css';
import BookMarkImg from '../assets/bookMark.png'

function PostBox(
    {post}
){
    return (
        <div id='postItemContainer'>
            <div id='postImgBox'>
                <div id='category'>
                    {post.category}
                </div>
                <img id='postImg' src={post.img} alt={post.img}/>
            </div>
            <div id='titleTxt'>
                {post.title}
            </div>
            <div id='timeTxt'>
                {post.toReceiptTxt()}
            </div>
            <div id='masterTxt'>
                {post.master}
            </div>
            <img id='bookMarkBtn' src={BookMarkImg}/>
        </div>
    );
}

export default PostBox;