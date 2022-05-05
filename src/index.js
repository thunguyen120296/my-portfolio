import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/partials/navigation/Navigation';
import About from './components/about/About';
import Page from './components/partials/page/Page';
import App from './App';
import './index.css';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Page />} />
                <Route path='/about' element={<About />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </React.StrictMode>, 
    document.getElementById('root'));