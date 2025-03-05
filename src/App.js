import React, { useState } from 'react';
import './App.css';
import Header from '../src/components/common/header/Header';
import BottomBar from '../src/components/common/bottombar/BottomBar.tsx';
import Home from '../src/components/home/Home/Home';
import Rally from '../src/components/home/rally/Rally';
import Job from '../src/components/home/job/Job';
import Community from '../src/components/home/community/Community';
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