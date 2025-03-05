import React, { useState } from 'react';
import './Header.css';
import logoImage from '../../../assets/drawLogo.png'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div id='main'>
            <Link to = '/' className='navLink'>
                <img id='img' src={logoImage}/>
            </Link>
            <div className='contentBox'>
                <div className='childNav'>
                    <Link to="/rally" className='navLink'>
                        대회 안내
                    </Link>
                </div>
                <div className='childNav'>
                    <Link to="/job" className='navLink'>
                        구인공고
                    </Link>
                </div>
                <div className='childNav'>
                    <Link to="/community" className='navLink'>
                        커뮤니티
                    </Link>
                </div>
                <div className='childNav' id = 'loginBtn'>
                    <Link to="/login" className='navLink'>
                        로그인
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;