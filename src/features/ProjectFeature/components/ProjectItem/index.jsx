
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
ProjectItem.propTypes = {
    projectItem: PropTypes.func,
};
ProjectItem.defaultProps = {
    projectItem: null,
}

function ProjectItem({item}) {
    return (
        <div className='project__items'>
            <div className='items'>
                <img src={item.thumbnailurl} alt=""/>
            <p>
                {item.title}
            </p>
            </div>
        </div>
    );
}

export default ProjectItem;