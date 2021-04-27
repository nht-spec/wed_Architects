import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import PasswordField from '../../../../components/form-control/PasswordField';
import Button from '@material-ui/core/Button';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

const useStyles =makeStyles(theme=>({
    root:   {},
    avatar: {},
    title:  {},
    submit: {},
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
function RegisterForm(props) {
    const classes =useStyles();

    const schema = yup.object().shape({
     fullname: yup.string().required('Please enter your name').test('should has at least two words','Please enter 2 word', (value) =>{
         console.log('Value', value)
         return value.split(' ').length >=2}),
     email: yup.string().required('Please enter your email').email('Please enter valid email'),
     password: yup.string().required('please enter your password').min(6,'please enter at least 6 charcaters.'),
     retypePassword: yup.string().required('Please retype your passsword').oneOf([yup.ref('password')],'password dose note match')


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
const handleSubmit = (values)=>{
    const {onSubmit}= props;
    if(onSubmit){
        onSubmit(values);
    }
    form.reset();

}
    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
              <LockOutlined></LockOutlined>
          </Avatar>
          <Typography className={classes.title} component='h3'variant='h5'> 
              Create An Account
          </Typography>
       <form onSubmit={form.handleSubmit(handleSubmit)}>
           <ul >
               <InputField  name="fullname" label='full name' form={form}/>
               <InputField  name="email" label='email' form={form}/>
               <PasswordField name="password"label='password' form={form}/>
               <PasswordField name="retypePassword" label='retypePassword' form={form}/>  
               <button>
                   <Button variant='contained' color='secondary'>
                   Create an Account
                   </Button>    
                </button> 
           </ul>
       </form>
        </div>
    );
}

export default RegisterForm;