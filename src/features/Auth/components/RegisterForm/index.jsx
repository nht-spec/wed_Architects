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
    root:   {paddingTop: theme.spacing(4)},
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

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
function RegisterForm(props) {
    const classes =useStyles();

    const schema = yup.object().shape({
     fullname: yup.string().required('Please enter your full name').test('Must contain at least two characters','Please enter 2 or more characters', (value) =>{
         console.log('Value', value)
         return value.split(' ').length >=2}),
     email: yup.string().required('Please enter your email').email('Please enter a valid email'),
     password: yup.string().required('Please enter your password').min(6,'Password must be at least 6 characters'),
     retypePassword: yup.string().required('Please re-enter your password').oneOf([yup.ref('password')],'incorrect password')


 });

    const form= useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
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
              Create An Account
          </Typography>
       <form  onSubmit={form.handleSubmit(handleSubmit)}>
               <InputField  name="fullname" label='Full name' form={form}/>
               <InputField  name="email" label='Email' form={form}/>
               <PasswordField name="password"label='Password' form={form}/>
               <PasswordField name="retypePassword" label='Confirm Password' form={form}/>  
               <button className='account__btn' >
               <Button className={classes.submit} disabled={isSubmitting} variant='contained' color='secondary' fullWidth>             
               Create an Account    
               </Button>             
               </button>         
       </form>
        </div>
    );
}

export default RegisterForm;