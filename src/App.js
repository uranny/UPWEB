import React, { useState } from 'react';
import Header from './components/constants/header/index.tsx';
import Footer from './components/constants/footer/index.tsx';

import Home from './components/main/home/index.tsx';
import Rally from './components/main/rally/index.tsx';
import Community from './components/main/community/index.tsx';
import Job from './components/main/job/index.tsx';

import Login from './components/auth/login/index.tsx';
import Register from './components/auth/register/index.tsx';

import RallyPage from './components/main/rally/page/index.tsx';
import CommunityPage from './components/main/community/page/index.tsx';
import JobPage from './components/main/job/page/index.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={Home()} />

                <Route path="/login" element={Login()} />
                <Route path="/register" element={Register()} />

                <Route path="/rally" element={Rally()} />
                <Route path="/job" element={Job()} />
                <Route path="/community" element={Community()} />

                <Route path="/rally/page" element={RallyPage} />
                <Route path="/job/page" element={JobPage} />
                <Route path="/community/page" element={CommunityPage} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;