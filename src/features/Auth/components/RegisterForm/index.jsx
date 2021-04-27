import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import PasswordField from '../../../../components/form-control/PasswordField';
import './style.scss';
import Button from '@material-ui/core/Button';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
function RegisterForm(props) {
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
        <div>
       <form onSubmit={form.handleSubmit(handleSubmit)}>
           <ul >
               <li><InputField  name="fullname" label='full name' form={form}/></li>
               <li><InputField  name="email" label='email' form={form}/></li>
               <li><PasswordField name="password"label='password' form={form}/></li>
               <li><PasswordField name="retypePassword" label='retypePassword' form={form}/></li>  
               <button><Button color="primary">Submit</Button></button>
           </ul>
       </form>
        </div>
    );
}

export default RegisterForm;