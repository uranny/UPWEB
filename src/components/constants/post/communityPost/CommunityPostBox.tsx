import React, { useState } from 'react';
import CommunityPost from '../../../data/CommunityPost.ts';
import { Link } from "react-router-dom";
import * as S from './style.ts';

function CommunityPostBox(
    {post} : {post : CommunityPost | null}
){

    return (
        <Link to="/community/page" style={{ textDecoration: 'none', color: 'inherit' }}>
            <S.PostItemContainer>
                <S.CategoryBox>
                    {post?.category ?? "카테고리"}
                </S.CategoryBox>
                <S.TitleBox>
                    {post?.title ?? "제목"}
                </S.TitleBox>
                <S.MasterBox>
                    {post?.master ?? "작성자"}
                </S.MasterBox>
                <S.TimeBox>
                    {post?.toTimeTxt() || "작성일자"}
                </S.TimeBox>
                <S.CommentBox>
                    {post?.toCommentTxt() || "댓글"}
                </S.CommentBox>
            </S.PostItemContainer>
        </Link>
    );
}

export default CommunityPostBox;