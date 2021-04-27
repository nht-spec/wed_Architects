import PropTypes from 'prop-types';
import React from 'react';
import ProjectItem from '../ProjectItem';
import './style.scss';
ProjectList.propTypes = {
    projectList: PropTypes.array,
};
ProjectList.defaultProps= {
    projectList: [],
}

function ProjectList({projectList}) {
    return (
       <ul className='project__list'>
           {projectList.map(item=>(
               <li key={item.id}>
          <ProjectItem item={item}/>
               </li>
           ))}
       </ul>
    );
}

export default ProjectList;