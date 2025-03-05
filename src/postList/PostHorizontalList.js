import React, { useState } from 'react';
import './PostHorizontalList.css';
import PostBox from '../post/PostBox';
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Link } from "react-router-dom";

function PostVerticalList(
    {postList, subjectTxt, path}
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
            <PostBox post={postList[index]}/>
        </div>
    );

    const getItemSize = index => {
        if(index === postList.length-1){
            return 300
        }
        return totalSize
    }

    return (
        <div id='listContainer'>
            <span id='subjectTxt'>{subjectTxt}</span>
            <span id='moreTxt'>
                <Link to={path} className='navLink'>
                    더보기
                </Link>
            </span>
            <div id='postContainer'>
                <AutoSizer>
                    {({width, height}) => (
                        <List
                        width={width}
                        height={height} 
                        itemCount={postList.length}
                        itemSize={getItemSize}
                        layout='horizontal'>
                            {Post}
                        </List>
                    )}
                </AutoSizer>
            </div>
        </div>
    );
}

export default PostVerticalList;