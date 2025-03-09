import React, { useState } from 'react';
import BookMarkImg from '../../../../assets/bookMark.png';
import * as S from './style.ts'

function PostBox(
    {post}
){
    return (
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
    );
}

export default PostBox;