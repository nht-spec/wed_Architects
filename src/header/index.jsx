import { Box, IconButton, makeStyles, Menu } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';
import Tab from '@material-ui/core/Tab';
import { AccountCircle, Close } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import AboutFeature from '../features/AboutFeature';
import Login from '../features/Auth/components/Login';
import Register from '../features/Auth/components/Register';
import { logout } from '../features/Auth/userSlice';
import ContactFeature from '../features/ContactFeature';
import ProjectFeature from '../features/ProjectFeature';
import MenuIcon from '@material-ui/icons/Menu';
import './style.scss';
Header.propTypes = {
};
const useStyles =makeStyles(theme=>({
  close:{
    position:'absolute',
    top: '0',
    margin: '0 0 0 85%',
  },
}));

const MODE ={
  LOGIN:'Login',
  REGISTER: 'register',
};

 function Header(props) {
   const dispatch =useDispatch();
   const loggedInUser =useSelector(state => state.user.current);
   const isLoggedIn =!!loggedInUser.id;
  const classes =useStyles();
  const [mode, setMode]= useState(MODE.LOGIN);
  const[anchorEl, setAnchoEl]=useState(null)

  const [open, setOpen] = useState(false);

  const handleUserClick=(e)=>{
    setAnchoEl(e.currentTarget)
  }

  const handleCloseMenu=()=>{
    setAnchoEl(null)
  }

  const handleLogoutClick=()=>{
    const action =logout();
    dispatch(action);

  }
const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
    return (   
        <div className='header__nav'>
            <h2 className='font letter'><span className='font bran__title'>BR</span>
            <NavLink className='font' to='/'>Architects</NavLink></h2>
            <div >
              <div className='header__list'>
              <MenuIcon className='login__btn' style={{ fontSize: 30 }}></MenuIcon>
             <ul>
                <li>
                   <NavLink className='tab' to='/project'>
                   <Tab className='letter' label="Project" />
                   </NavLink>
                </li>
                <li>
                   <NavLink  className='tab' to='/about'>
                   <Tab className='letter' label="About"/>
                   </NavLink> 
                </li>
                <li>
                   <NavLink className='tab' to='/contact'>
                   <Tab className='letter' label="Contact"/>
                   </NavLink>
                </li>
                </ul>
              </div>
                <div>
                {!isLoggedIn &&(
                <Button className='menu__icon'onClick={handleClickOpen}>
                  sign in
                </Button> 
                  )}
                   {isLoggedIn &&(
                     <IconButton className='user__btn' color='default' onClick={handleUserClick}>
                       <AccountCircle style={{ fontSize: 30 }}></AccountCircle>
                     </IconButton>
                   )}
                     <Menu
                       keepMounted
                       anchorEl={anchorEl}
                       open={Boolean(anchorEl)}
                       onClose={handleCloseMenu}
                       anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      getContentAnchorEl={null}
                      >
                        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
                       </Menu>
                </div>
            </div>
                <Route path='/project' component={ProjectFeature} exact/>
                <Route path='/about' component={AboutFeature} exact/>
                <Route path='/contact' component={ContactFeature} exact/>

                       <div className='register__form'>
                        <Dialog 
                            open={open} 
                            onClose={handleClose}
                            disableEscapeKeyDown
                            disableBackdropClick
                            aria-labelledby="form-dialg-title">   
                        <DialogContent>
                            <Button className={classes.close} onClick={handleClose} >
                            <Close></Close>
                            </Button>
                              {mode === MODE.REGISTER &&(
                            <>
                              <Register closeDialog={handleClose}/>
                            <Box textAlign='center'>
                            <Button color='primary' onClick={()=> setMode(MODE.LOGIN)}>
                              Already have an account. Login here
                            </Button>
                            </Box>
                            </>
                              )}
                              {mode === MODE.LOGIN&&(
                            <>
                             <Login closeDialog={handleClose}/>  
                             <Box textAlign='center'>
                             <Button color='primary' onClick={()=> setMode(MODE.REGISTER)}>
                               Dont have an account. Register here 
                             </Button>
                            </Box>
                            </>
                            )}
                        </DialogContent>
                      </Dialog>
                   </div>             
       </div>     
    );
};
export default Header;