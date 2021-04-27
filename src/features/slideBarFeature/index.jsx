import React from 'react';
import SlideBarList from './components/slideBarList';
import './style.scss';
SlideBarFeature.propTypes = {
    
};

function SlideBarFeature(props) {
    const slideBarList=[
        {
            id:1,
            name:'Architects',
        },
    ];
 
    return (
        <div className='slide__feature'>
            <img src="/wallpaper.jpg" alt=""/>
            <SlideBarList slideBarList={slideBarList}/>
        </div>
    );
}

export default SlideBarFeature;