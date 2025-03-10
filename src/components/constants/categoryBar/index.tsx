import React, { useState } from "react";
import * as S from "./style.ts"
import CategoryList from "../list/horizontal/category/index.tsx";

function CategoryBar(
    {categoryList} : {categoryList : string[]}
){
    return (
        <S.CategoryBarContainer>
            <CategoryList categoryList={categoryList}/>
        </S.CategoryBarContainer>
    )
}

export default CategoryBar;