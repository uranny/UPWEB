import React, { useState } from "react";
import * as S from "./style.ts"

function CategoryBar(
    {categoryList} : {categoryList : string[]}
){
    const [selectIndex, setSelectIndex] = useState(0);

    const selectColor = (index : number, selectColor : string, nonSelectColor : string) => {
        return selectIndex === index ? selectColor : nonSelectColor
    };

    const blackColor = "black"
    const whiteColor = "white"

    return (
        <S.CategoryBarContainer>
            <S.CategoryBoxContainer>
                {categoryList.map((item, index)=>
                    <S.CategoryBox 
                        key={index}
                        onClick={() => setSelectIndex(index)}
                        style={
                            {
                                "backgroundColor" : selectColor(index, blackColor, whiteColor),
                                "color" : selectColor(index, whiteColor, blackColor),
                                "cursor" : "pointer"
                            }
                        }
                    >
                        {item}
                    </S.CategoryBox>
                )}
            </S.CategoryBoxContainer>
        </S.CategoryBarContainer>
    )
}

export default CategoryBar;