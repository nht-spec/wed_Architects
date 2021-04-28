import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import PasswordField from '../../../../components/form-control/PasswordField';
import './style.scss'

const useStyles =makeStyles(theme=>({
    root:   {paddingTop: theme.spacing(2)},
    avatar:{
        margin:'0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title:{
        margin: theme.spacing(2,0,3,0),
        textAlign:'center',
    },
    submit:{
        margin: theme.spacing(2,0,2,0),
    },
}));

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};
function LoginForm(props) {
    const classes =useStyles();
    const schema = yup.object().shape({
     identifier: yup.string().required('Please enter your email').email('Please enter a valid email'),
     password: yup.string().required('Please enter your password'),
 });

    const form= useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
});
const handleSubmit = async (values)=>{
    const {onSubmit}= props;
    if(onSubmit){
      await  onSubmit(values);
    }
};
const {isSubmitting}=form.formState;
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress/>}
            <Avatar className={classes.avatar}>
              <LockOutlined></LockOutlined>
          </Avatar>
          <Typography className={classes.title} component='h3'variant='h5'> 
            Sign In
          </Typography>
       <form  onSubmit={form.handleSubmit(handleSubmit)}>
               <InputField  name="identifier" label='Email' form={form}/>
               <PasswordField name="password"label='Password' form={form}/>
               <button className='account__btn' >
               <Button className={classes.submit} disabled={isSubmitting} variant='contained' color='secondary' fullWidth>             
               Sign In  
               </Button>             
               </button>         
       </form>
        </div>
    );
}

export default LoginForm;