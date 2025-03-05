import React, { useState } from 'react';
import CommunityPostBox from '../../post/communityPost/CommunityPostBox.tsx';
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Link } from "react-router-dom";
import * as S from "./PostVerticalListStyle.ts"

function PostVerticalList(
    {postList, subjectTxt, path}
){
    const CommunityPost = ({index, style}) => (
        <div style={{...style}}>
            <CommunityPostBox post={postList[index]}/>
        </div>
    );

    const getItemSize = index => {
        if(index === postList.length-1){
            return 300
        }
        return 334
    }

    return (
        <S.ListContainer>
            <S.SubjectTxt>{subjectTxt}</S.SubjectTxt>
            <S.MoreTxt>
                <S.NavLink to={path}>
                    더보기
                </S.NavLink>
            </S.MoreTxt>
            <S.PostContainer>
                <AutoSizer>
                    {({width, height}) => (
                        <List
                        width={width}
                        height={height} 
                        itemCount={postList.length}
                        itemSize={getItemSize}
                        layout='vertical'>
                            {CommunityPost}
                        </List>
                    )}
                </AutoSizer>
            </S.PostContainer>
        </S.ListContainer>

    );
}

export default PostVerticalList;