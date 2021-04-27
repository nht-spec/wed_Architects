import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import './style.scss';

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};

function ContactForm(props) {
    const {enqueueSnackbar}= useSnackbar();
    const schema = yup.object().shape({
     fullname: yup.string().required('Please enter your full name').test('should has at least two words','Please enter 2 or more characters', (value) =>{
         console.log('Value', value)
         return value.split(' ').length >=2}),
     email: yup.string().required('Please enter your email').email('Invalid email'),
     submit: yup.string().required('Please enter a title'),
     comment: yup.string().required('Please enter a comment'),

 });
    const form= useForm({
    defaultValues: {
      fullname: '',
      email: '',
      submit: '',
      comment: '',
    },
    resolver: yupResolver(schema),
});
const handleSubmit = (values,e)=>{
    e.preventDefault();

    emailjs.sendForm('service_8zq9tjp', 'template_sgne9kd', e.target, 'user_AhgypaaKySTp3K69XkY5P')
      .then((result) => {
          console.log(result.text);
          enqueueSnackbar('Thanks for contacting us, we will contact you as soon as possible', {variant:'info'})
      }, (error) => {
          console.log(error.text);
      });

    const {onSubmit}= props;
    if(onSubmit){
     onSubmit(values);
    }
    form.reset(); 
};
    return (
        <div>
       <form onSubmit={form.handleSubmit(handleSubmit)}>
           <ul className='input__list'>
               <li><InputField className='input__name ' name="fullname" label='full name' form={form}/></li>
               <li><InputField className='input__gmail' name="email" label='email' form={form}/></li>
               <li><InputField className='input__submit' name="submit" label='submit' form={form}/></li>
               <li><InputField className='input__comment' name="comment" label='comment' form={form}/></li>  
               <button className='input__btn'>Send Message</button>               
           </ul>
       </form>
        </div>
    );
}

export default ContactForm;