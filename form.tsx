import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from '../validations/validation';
import type { SignupFormData } from '../validations/validation';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    }
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input type="tel" {...register("phone")} placeholder="Phone" />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input type="email" {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register("password")} placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
