import React, { useState } from 'react';
import './BottomBar.css';
import titleLogoImage from '../assets/titleLogo.png'

function BottomBar() {
    return (
        <div id='bottomBarBox'>
            <img id='titleImg' src={titleLogoImage}/>
        </div>
    );
}

export default BottomBar;