import React from "react";
import * as S from "./style.ts";

function TitleBar(
    {category, title} : {category : string, title : string}
){
    return (
        <S.TitleBar>
            <S.Title>
                {category} {title}
            </S.Title>
            <S.CreatePostBox>
                게시글 작성하기
            </S.CreatePostBox>
        </S.TitleBar>
    );
}

export default TitleBar;