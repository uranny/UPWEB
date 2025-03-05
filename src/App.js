import React, { useState } from 'react';
import Header from '../src/components/common/header/Header';
import BottomBar from '../src/components/common/bottombar/BottomBar.tsx';
import Home from './components/main/home/index.tsx';
import Rally from './components/main/rally/index.tsx';
import Community from './components/main/community/index.tsx';
import Job from './components/main/job/index.tsx';
import Login from '../src/components/auth/login/Login';
import Register from '../src/components/auth/register/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={Home()} />
                <Route path="/rally" element={Rally()} />
                <Route path="/job" element={Job()} />
                <Route path="/community" element={Community()} />
                <Route path="/login" element={Login()} />
                <Route path="/register" element={Register()} />
            </Routes>
            <BottomBar/>
        </Router>
    );
}

export default App;