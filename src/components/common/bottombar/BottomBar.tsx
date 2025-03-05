import React, { useState } from 'react';
import './BottomBar.ts';
import titleLogoImage from '../../../assets/titleLogo.png'
import { BottomBarContainer, FooterImg } from './BottomBar.ts';

function BottomBar() {
    return (
        <BottomBarContainer>
            <FooterImg src={titleLogoImage}/>
        </BottomBarContainer>
    );
}

export default BottomBar;