import React, { useState } from 'react';
import PostBox from '../../../post/rallyPost/index.tsx';
import Post from '../../../../data/Post.ts';
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import * as S from "./style.ts"
import { To } from 'react-router-dom';

function PostHorizontalList(
    {postList, subjectTxt, path} : {postList : Post[], subjectTxt : string, path : To}
){

    const itemWidth = 300;
    const itemPadding = 32;
    const totalSize = itemWidth + itemPadding

    function setPadding(index){
        if(index === postList.length-1){
            return 0
        }
        return itemPadding
    }

    const Post = ({index, style}) => (
        <div style={{...style, width:itemWidth, paddingRight:setPadding(index)}}>
            <PostBox post={postList[index]} path='/rally/page'/>
        </div>
    );

    const getItemSize = index => {
        if(index === postList.length-1){
            return 300
        }
        return totalSize
    }

    return (
        <S.ListContainer>
            <S.SubjectTxt>
                {subjectTxt}
            </S.SubjectTxt>
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
                        layout='horizontal'
                        >
                            {Post}
                        </List>
                    )}
                </AutoSizer>
            </S.PostContainer>
        </S.ListContainer>
    );
}

export default PostHorizontalList;