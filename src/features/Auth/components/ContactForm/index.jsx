import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-control/InputField';
import './style.scss';
import emailjs from 'emailjs-com';
import { LinearProgress } from '@material-ui/core';

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};

function ContactForm(props) {
    const schema = yup.object().shape({
     fullname: yup.string().required('Please enter your name').test('should has at least two words','Please enter 2 word', (value) =>{
         console.log('Value', value)
         return value.split(' ').length >=2}),
     email: yup.string().required('Please enter your email').email('Please enter valid email'),
     submit: yup.string().required('please enter your submit'),
     comment: yup.string().required('please enter your comment'),

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
const handleSubmit = async (values,e)=>{
    e.preventDefault();

    emailjs.sendForm('service_8zq9tjp', 'template_sgne9kd', e.target, 'user_AhgypaaKySTp3K69XkY5P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    const {onSubmit}= props;
    if(onSubmit){
      await onSubmit(values);
    }
    form.reset();
};
    const {isSubmitting}= form.formState;

    return (
        <div>
            {isSubmitting && <LinearProgress/>}
       <form onSubmit={form.handleSubmit(handleSubmit)}>
           <ul className='input__list'>
               <li><InputField className='input__name ' name="fullname" label='full name' form={form}/></li>
               <li><InputField className='input__gmail' name="email" label='email' form={form}/></li>
               <li><InputField className='input__submit' name="submit" label='submit' form={form}/></li>
               <li><InputField className='input__comment' name="comment" label='commnet' form={form}/></li>  
               <button disabled={isSubmitting} className='input__btn'>Send Message</button>
           </ul>
       </form>
        </div>
    );
}

export default ContactForm;