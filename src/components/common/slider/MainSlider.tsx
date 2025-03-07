import React, {useState} from "react";
import * as S from "./style.ts"

function MainSlider(){

    const [sliderIndex, useSliderIndex] = useState(0)

    const clickLeftBtn = () => {
    }

    const clickRightBtn = () => {
    }

    return (
        <>
            <S.SliderConatainer>
            </S.SliderConatainer>
            <S.ShadowBox>
                <S.TextBox>
                    <S.TitleTxt>
                        타이틀
                    </S.TitleTxt>
                    <S.PeriodTxt>
                        00~00
                    </S.PeriodTxt>
                </S.TextBox>
                <S.ButtonBox>
                    <S.LeftButton onClick={clickLeftBtn}>
                        ◀
                    </S.LeftButton>
                    <S.RightButton onClick={clickRightBtn}>
                        ▶
                    </S.RightButton>
                </S.ButtonBox>
            </S.ShadowBox>
        </>
    )
}

export default MainSlider;