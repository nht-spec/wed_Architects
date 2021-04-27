import React from 'react';
import PropTypes from 'prop-types';
import SlideBar from '../slideBar';
import './style.scss';
SlideBarList.propTypes = {
    slideBarList: PropTypes.array,
};
SlideBarList.defaultProps={
    slideBarList: [],
};

function SlideBarList({slideBarList}) {
    return (
        <div>
            {slideBarList.map(slideBar=>(
                <div className='slide__bar'>
                <h2 key={slideBar.id}></h2>    
                <div className='slide__title'>
                <h1>br</h1>
                </div>
                <SlideBar slideBar={slideBar}/>
                </div>
            ))}
        </div>
    );
}

export default SlideBarList;