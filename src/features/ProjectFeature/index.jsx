import React from 'react';
import ProjectList from './components/ProjectList';
import './style.scss';
ProjectFeature.propTypes = {
    
};

function ProjectFeature(props) {
    const projectList = [
        {
            id: 1,
            title:'Summer House',
            thumbnailurl: 'https://www.w3schools.com/w3images/house5.jpg'
        },
        {
            id: 2,
            title:'Brick House',
            thumbnailurl: 'https://www.w3schools.com/w3images/house2.jpg',
        },
        {
            id: 3,
            title:'Renovated',
            thumbnailurl: 'https://www.w3schools.com/w3images/house3.jpg',
        },
        {
            id: 4,
            title:'Barn House',
            thumbnailurl: 'https://www.w3schools.com/w3images/house4.jpg',
        },
        {
            id: 5,
            title:'Summer House',
            thumbnailurl: 'https://www.w3schools.com/w3images/house2.jpg',
        },
        {
            id: 6,
            title:'Brick House',
            thumbnailurl: 'https://www.w3schools.com/w3images/house5.jpg',
        },
        {
            id: 7,
            title:'Renovated',
            thumbnailurl: 'https://www.w3schools.com/w3images/house4.jpg',
        },
        {
            id: 8,
            title:'Barn House',
            thumbnailurl: 'https://www.w3schools.com/w3images/house3.jpg',
        },

    ];
    return (
        <div>
            <div className='project__feature'>
            <h2 className='project__title'>Project</h2>
            <ProjectList projectList={projectList}/>
            </div>
        </div>
    );
}

export default ProjectFeature;