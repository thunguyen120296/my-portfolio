import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/partials/navigation/Navigation';
import About from './components/about/About';
import Header from './components/partials/header/Header';
import App from './App';
import './index.css';
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='about' element={<About />} />
            </Routes>
        </Router>
    </React.StrictMode>, 
    document.getElementById('root'));