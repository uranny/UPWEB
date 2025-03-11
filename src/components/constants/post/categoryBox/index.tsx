import React from "react";
import * as S from "./style.ts"

function CategoryBox(
    {key, text}:{key : number, text : string}
){
    return(
        <S.CategoryContainer key={key}>
            {text}
        </S.CategoryContainer>
    )
}

export default CategoryBox;