import React, { useState } from "react";
import * as S from "./style.ts"
import CategoryBox from "../post/categoryBox/index.tsx";

function CategoryBar(
    {categoryList} : {categoryList : string[]}
){
    return (
        <S.CategoryBarContainer>
            <S.CategoryBoxContainer>
                {categoryList.map((item, index)=>
                    <CategoryBox key={index} text={item}/>
                )}
            </S.CategoryBoxContainer>
        </S.CategoryBarContainer>
    )
}

export default CategoryBar;