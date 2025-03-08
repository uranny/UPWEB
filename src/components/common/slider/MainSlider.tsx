import React, {useState, useEffect} from "react";
import * as S from "./style.ts"

function MainSlider(){

    const [sliderIndex, setSliderIndex] = useState(0)
    const imgLst = [
        "https://cdn.m-i.kr/news/photo/202204/908783_674821_3748.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VDcssTAt6qRuC4dxv_C0C_WBiZCKMS-tgA&s",
        "https://image.ajunews.com/content/image/2015/11/03/20151103164649884420.jpg"
    ]

    const clickLeftBtn = () => {
        setSliderIndex(index => ((index -1 + imgLst.length) % imgLst.length ));
    }

    const clickRightBtn = () => {
        setSliderIndex(index => ((index +1) % imgLst.length ));
    }
    
    useEffect( () => {
        const interval = setInterval(() => {
            clickRightBtn()
        }, 3000)

        return () => clearInterval(interval)
    }, []);

    return (
        <>
            <S.SliderContentImg src={imgLst[sliderIndex]} alt={`이미지${sliderIndex}`}/>
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