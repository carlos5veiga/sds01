import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Records from './pages/Records';
import Charts from './pages/Charts';

const AppRoutes = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Records" element={<Records />} />
            <Route path="/Charts" element={<Charts />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;