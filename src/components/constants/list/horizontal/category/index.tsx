import React from "react";
import * as S from "./style.ts"
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import CategoryBox from "../../../post/categoryBox/index.tsx";

function CategoryList(
    {categoryList} : {categoryList : string[]}
){
    return(
        <S.ListContainer>
            {categoryList.map((item)=>
                <CategoryBox text={item}/>
            )}
        </S.ListContainer>
    )
}

export default CategoryList;