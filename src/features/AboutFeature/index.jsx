import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AboutList from './components/aboutList';
import './style.scss';
AboutFeature.propTypes = {
    
};

function AboutFeature(props) {
    const aboutlist= [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO & Founder',
            desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
            thumbnailUrl: 'https://www.w3schools.com/w3images/team2.jpg',
        },
        {
            id: 2,
            name:'Jane Doe',
            position:'Architect',
            desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
            thumbnailUrl: 'https://www.w3schools.com/w3images/team1.jpg',
        },
        {
            id: 3,
            name: 'Mike Ross',
            position: 'Architect',
            desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
            thumbnailUrl: 'https://www.w3schools.com/w3images/team3.jpg',
        },
        {
            id: 4,
            name: 'Dan Star',
            position: 'Architect',
            desc: 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.',
            thumbnailUrl: 'https://www.w3schools.com/w3images/team4.jpg',
        },
    ]
   
    return (
        <div className='about_feature'>
            <h1 className='title'>About</h1>
            <p className='decr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <AboutList aboutList={aboutlist}/>
        </div>
    );
}

export default AboutFeature;