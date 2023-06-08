import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from '@material-tailwind/react';
import { useEffect } from 'react';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init.js';
import LoadingComponent from '../Components/LoadingComponent';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  let [signInWithEmailAndPassword, formUser, formLoading, formError] =
    useSignInWithEmailAndPassword(auth);
  let [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      toast.error(error.message);
      gError = '';
      formError = '';
    }
  };

  useEffect(() => {
    const currentUser = formUser || gUser;
    if (currentUser) {
      navigate('/');
      toast.success('Successfully Account Registered.');
    }
  }, [formUser, gUser, navigate]);

  if (gError) {
    toast.error('user not found with the email.');
    gError = '';
  }
  if (formError) {
    toast.error('User not found with the email.');
    formError = '';
  }

  if (gLoading || formLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <section className="flex justify-center mt-14 container px-4 md:px-0 mx-auto">
        <Card
          style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
          className="w-full sm:w-[600px] mx-auto px-0 sm:px-10"
        >
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h2" className="text-center my-5">
              Log<span className="text-orange-600">in</span>
            </Typography>
            <form
              id="login-form"
              onSubmit={handleSubmit(onSubmit)}
              className=""
            >
              {/* email section  */}
              <div className="relative">
                <Input
                  label="Email"
                  size="lg"
                  className=""
                  {...register('email', {
                    required: {
                      value: true,
                      message: '⚠ Please enter a valid email address.',
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      message: '⚠ Invalid Email Provided',
                    },
                  })}
                />
                <label className="text-xs flex absolute top-[44px] left-[3px]">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* password section  */}
              <div className="mt-[24px] relative">
                <Input
                  label="Password"
                  size="lg"
                  {...register('password', {
                    required: {
                      value: true,
                      message: '⚠ Password is required.',
                    },
                    pattern: {
                      value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                      message:
                        '⚠ Password length should be 8 including a special char',
                    },
                  })}
                />
                <label className="text-xs flex absolute top-[44px] left-[3px]">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              form="login-form"
              type="submit"
              variant="gradient"
              color="indigo"
              fullWidth
              className="capitalize text-xl h-10 min-h-10 inline-flex items-center justify-center"
            >
              Login Now
            </Button>
            <div className="flex justify-between items-center my-3 w-[90%] mx-auto">
              <div className="border-b-2 border-black w-full"></div>
              <p className="mx-auto text-center text-slate-400 font-semibold px-2">
                OR
              </p>
              <div className="border-b-2 border-black w-full"></div>
            </div>
            <div className="">
              <div className="sm:flex justify-between text-center">
                <Button
                  onClick={() => {
                    signInWithGoogle();
                  }}
                  variant="outlined"
                  color="indigo"
                  className="w-full inline-flex justify-center items-center text-xl h-10 min-h-10 capitalize"
                >
                  <FcGoogle size={20} className="mr-3" />
                  Google
                </Button>
              </div>
            </div>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/register" className="ml-1 font-bold text-blue-600">
                Register Now
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default Login;
