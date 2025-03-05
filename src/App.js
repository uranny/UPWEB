import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import BottomBar from './bottombar/BottomBar';
import Home from './page/Home';
import Rally from './page/Rally';
import Job from './page/Job';
import Community from './page/Community';
import Login from './page/Login';
import Register from './page/Register';
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