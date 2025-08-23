import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from '../validations/validation';
import type { SignupFormData } from '../validations/validation';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { signupUser } from '../store/feature/authSlice';

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

  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated, user } = useAppSelector(state => state.auth);

  const onSubmit = (data: SignupFormData) => {
    dispatch(signupUser({
      email: data.email,
      password: data.password,
      name: data.name,
    }));
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

      <button type="submit" disabled={loading}>
        {loading ? "Signing up..." : "Sign Up"}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isAuthenticated && user && <p>Welcome, {user.name}!</p>}
    </form>
  );
};

export default SignupForm;
