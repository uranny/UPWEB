import React, { useState } from 'react';
import BookMarkImg from '../../../../assets/bookMark.png';
import Post from '../../../data/Post.ts';
import { Link } from "react-router-dom";
import * as S from './style.ts'
import { To } from 'react-router-dom';

function RallyPost(
    {post, path} : {post : Post, path : To}
){
    return (
        <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <S.PostItemContainer>
                <S.PostImgBox>
                    <S.Category>
                        {post.category}
                    </S.Category>
                    <S.PostImg src={post.img} alt={post.img}/>
                </S.PostImgBox>
                <S.TitleTxt>
                    {post.title}
                </S.TitleTxt>
                <S.TimeTxt>
                    {post.toReceiptTxt()}
                </S.TimeTxt>
                <S.MasterTxt>
                    {post.master}
                </S.MasterTxt>
                <S.BookMarkBtn src={BookMarkImg}/>
            </S.PostItemContainer>
        </Link>
    );
}

export default RallyPost;