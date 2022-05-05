import React from 'react';
import './portfolio.css';
import PortfolioModule from './Portfolio-module';
function Portfolio(){
    return (
        <div className='portfolio'>
            <div className="portfolio__title">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nesciunt incidunt doloribus recusandae quia, vitae officia nobis ad libero aut.</p>
            </div>
            <PortfolioModule />
        </div>
    )
}
export default Portfolio;