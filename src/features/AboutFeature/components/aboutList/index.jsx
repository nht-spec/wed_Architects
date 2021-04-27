import PropTypes from 'prop-types';
import About from '../About';
import './style.scss';

AboutList.propTypes = {
    aboutList: PropTypes.array,
};
AboutList.defaultProps={
    aboutList: [],
};
function AboutList({aboutList}) {

    return (
        <div>
      <ul className='about__list'>
          {aboutList.map(about=>(
              <li key={about.id}>
                  <About about={about}/>
                  <button className='about__contact font'>Contact</button>
              </li>
          ))}
      </ul>
        </div>
    );
}

export default AboutList;