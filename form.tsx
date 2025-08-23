import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema, SignupFormData } from './validationSchemas';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data); // data typed and validated by Yup
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register('phone')} placeholder="Phone" />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input {...register('email')} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register('password')} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
