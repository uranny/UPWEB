import React from "react";
import * as S from "./style.ts"

function CategoryBox(
    {text}:{text : string}
){
    return(
        <S.CategoryContainer>
            {text}
        </S.CategoryContainer>
    )
}

export default CategoryBox;