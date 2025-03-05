import React, { useState } from 'react';
import './PostVerticalList.css';
import CommunityPostBox from '../../post/communityPost/CommunityPostBox';
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Link } from "react-router-dom";

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
                        layout='vertical'>
                            {CommunityPost}
                        </List>
                    )}
                </AutoSizer>
            </div>
        </div>
    );
}

export default PostVerticalList;