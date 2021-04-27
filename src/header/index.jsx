import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Tab from '@material-ui/core/Tab';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import React, { useState } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import AboutFeature from '../features/AboutFeature';
import Register from '../features/Auth/components/Register';
import ContactFeature from '../features/ContactFeature';
import ProjectFeature from '../features/ProjectFeature';
import './style.scss';
Header.propTypes = {};

function Header(props) {
  const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
    return (
      <div>
        <div className='header__nav'>
            <h2 className='font letter'><span className='font bran__title'>BR</span>
            <NavLink className='font' to='/'>Architects</NavLink></h2>
            <div  className='header_list'><MenuOpenIcon className='menu__btn' style={{ fontSize: 40, height:54}}></MenuOpenIcon>
            <ul>
                <li><NavLink className='tab' to='/project'>
                 <Tab style={{height: 55, minWidth: 180}} className='letter' label="Project" />
                  </NavLink></li> 
                <li><NavLink  className='tab' to='/about'>
                <Tab style={{height: 55, minWidth: 180}} className='letter' label="About"/>
                  </NavLink></li>  
                <li><NavLink className='tab' to='/contact'>
                  <Tab style={{height: 55, minWidth: 180}} className='letter' label="Contact" />
                  </NavLink></li>
                <li className='register__btn'><a onClick={handleClickOpen} className='tab'>
                <Tab style={{height: 55, minWidth: 180}} className='letter ' label="Register"/>
                  </a></li>  
          </ul>
            </div>
                <Route path='/project' component={ProjectFeature} exact/>
                <Route path='/about' component={AboutFeature} exact/>
                <Route path='/contact' component={ContactFeature} exact/>
        </div>
        <div className='register__form'>
        <Dialog 
        open={open} 
        onClose={handleClose}
        disableEscapeKeyDown
        disableBackdropClick
        aria-labelledby="form-dialg-title"
        >
        <DialogContent>
           <Register/> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      </div>
    );
};
export default Header;