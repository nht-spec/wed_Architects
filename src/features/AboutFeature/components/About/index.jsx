import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
About.propTypes = {
    about:PropTypes.func,
};
About.defaulProps={
    about: null,
}

function About({about}) {
    return (
        <div className='about'>
            <div className='about__img'>
                <img src={about.thumbnailUrl} alt=""/>
            </div>
            <div className='about__title line_height'>
                <h3>{about.name}</h3>
                <p className='about__positon font_style'>{about.position}</p>
                <p className='about__desc font_style'>{about.desc}</p>
            </div>
        </div>
    );
}

export default About;