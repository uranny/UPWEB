import React, { useState } from 'react';
import CommunityPostBox from '../../post/communityPost/CommunityPostBox.tsx';
import CommunityPost from '../../../data/CommunityPost.ts';
import { VariableSizeList } from "react-window";
import { To } from 'react-router-dom';
import AutoSizer from "react-virtualized-auto-sizer";
import * as S from "./style.ts"

function PostVerticalList(
    {postList, subjectTxt, path} : {postList : CommunityPost[]; subjectTxt : string; path : To;}
){
    const CommunityItem = ({index}) => (
        <div>
            <CommunityPostBox post={postList[index]}/>
        </div>
    );

    const getItemSize = () => {
        return 41
    }

    return (
        <S.ListContainer>
            <S.SubjectTxt>{subjectTxt}</S.SubjectTxt>
            <S.MoreTxt>
                <S.NavLink to={path}>
                    더보기
                </S.NavLink>
            </S.MoreTxt>
            <S.PostContainer style={{height: `${postList.length * 41}px`}}>
                <CommunityPostBox post={null}/>
                <AutoSizer>
                    {({width, height}) => (
                        <VariableSizeList
                        width={width}
                        height={height} 
                        itemCount={postList.length}
                        itemSize={getItemSize}
                        overscanCount={2}
                        layout='vertical'>
                            {CommunityItem}
                        </VariableSizeList>
                    )}
                </AutoSizer>
            </S.PostContainer>
        </S.ListContainer>
    );
}

export default PostVerticalList;