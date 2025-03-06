import React, { useState } from 'react';
import * as S from './style.ts';
import logoImage from '../../../assets/drawLogo.png';

function Header() {
    return (
        <S.Main>
            <S.NavLink to = '/'>
                <S.Img src={logoImage}/>
            </S.NavLink>
            <S.ContentBox>
                <S.ChildNav>
                    <S.NavLink to="/rally">
                        대회 안내
                    </S.NavLink>
                </S.ChildNav>
                <S.ChildNav>
                    <S.NavLink to="/job">
                        구인공고
                    </S.NavLink>
                </S.ChildNav>
                <S.ChildNav>
                    <S.NavLink to="/community">
                        커뮤니티
                    </S.NavLink>
                </S.ChildNav>
                <S.ChildNav>
                    <S.LoginBtn to="/login">
                        로그인
                    </S.LoginBtn>
                </S.ChildNav>
            </S.ContentBox>
        </S.Main>
    );
}

export default Header;