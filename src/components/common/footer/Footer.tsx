import React, { useState } from 'react';
import './Footer.tsx';
import titleLogoImage from '../../../assets/titleLogo.png'
import * as S from './style.ts';

function Footer() {
    return (
        <S.BottomBarContainer>
            <S.FooterImg src={titleLogoImage}/>
        </S.BottomBarContainer>
    );
}

export default Footer;