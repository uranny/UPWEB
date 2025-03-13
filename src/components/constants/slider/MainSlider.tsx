import React, {useState, useEffect} from "react";
import * as S from "./style.ts"
import { BannerDataLst } from "../../data/DummyData.ts";

function MainSlider(){

    const [sliderIndex, setSliderIndex] = useState(0)
    const clickLeftBtn = () => {
        setSliderIndex(index => ((index -1 + BannerDataLst.length) % BannerDataLst.length ));
    }
    const clickRightBtn = () => {
        setSliderIndex(index => ((index +1) % BannerDataLst.length ));
    }
    
    useEffect( () => {
        console.log("use Effect")
        const intervel = setInterval(() => {
            clickRightBtn()
            console.log("next banner")
        }, 3000)

        return () => clearInterval(intervel)
    }, []);

    return (
        <>
            <S.SliderContentImg src={BannerDataLst[sliderIndex].imgUrl} alt={`이미지${sliderIndex}`}/>
            <S.ShadowBox>
                <S.TextBox>
                    <S.TitleTxt>
                        {BannerDataLst[sliderIndex].title}
                    </S.TitleTxt>
                    <S.PeriodTxt>
                        {BannerDataLst[sliderIndex].toTimeTxt()}
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