import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
SlideBar.propTypes = {
    slideBar: PropTypes.func,
};
SlideBar.defaultProps={
    slideBar: null,
}

function SlideBar({slideBar}) {
    return (
        <div className='slide__list'>
            <h2 className='slide__name'>{slideBar.name}</h2>
        </div>
    );
}

export default SlideBar;