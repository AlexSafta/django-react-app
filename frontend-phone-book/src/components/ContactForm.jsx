import React, { useCallback, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { validContactRules } from '../util';

const ContactForm = ({ loading, onSubmit, addForm }) => {
  const { control, register, handleSubmit, formState: { errors, isValid }, setValue } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
    },
    mode: 'onChange',
  });

  const submitData = useCallback((data) => {
    if (isValid) {
      onSubmit?.({
        name: data.name ?? '',
        phone_number: data.phoneNumber ?? '',
        email: data.email ?? ''
      });
    }
  }, [isValid, onSubmit]); 

  return (
    <div className='contactFormWrapper'>
      <p className='formTitle'>Add a contact</p>
      <form className='contactForm' onSubmit={handleSubmit(submitData)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <TextField
            required
            name="name" 
            label="Name" 
            variant="outlined"
            error={errors?.name ? true : false}
            helperText={errors?.name?.message ?? ''}
            inputRef={register("name", validContactRules.name)}
            InputLabelProps={{ shrink: true }}  
            fullWidth
            onChange={(value) => setValue("name", value)} 
            {...field} 
          />}
        />
        <Controller
          name="phoneNumber"
          control={control}
          rules={validContactRules.phoneNumber}
          error={errors?.phoneNumber ? true : false}
          render={({ field }) => 
            <PhoneInput 
              defaultCountry='RO'
              onChange={(value) => setValue("phoneNumber", value)}
              {...field}
            />}
          />
        {
          !!errors && errors.phoneNumber?.message && (
            <p className='errorText'>{errors.phoneNumber?.message}</p>
          )
        }
        <Controller
          name="email"
          control={control}
          render={({ field }) => <TextField
            color="secondary"
            name="email" 
            type="email" 
            label="Email" 
            variant="outlined"
            error={errors?.email ? true : false}
            helperText={errors?.email?.message ?? ''}
            inputRef={register("email", validContactRules.email)}
            InputLabelProps={{ shrink: true }}  
            fullWidth
            onChange={(value) => setValue("email", value)}
            {...field} 
          />}
        />
        <input type="submit" value={addForm ? 'ADD' : 'EDIT'} className="submitButton" />
      </form>
    </div>
  );
};

export default ContactForm;