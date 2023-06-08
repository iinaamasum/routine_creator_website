import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init.js';
import LoadingComponent from '../Components/LoadingComponent';

const ProfileInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const postedData = await axios
        .post('http://localhost:5001/api/v1/user-info', {
          userEmail: user?.email,
          userName: data.userName,
          contactNumber: data.contactNumber,
        })
        .then((res) => res.data);
      if (postedData.status === 'failed') {
        toast.error(postedData.message);
      }

      toast.success('Successfully updated user information.');
      navigate('/');
    } catch (error) {
      toast.error("Can't update info. Please check internet connection.");
    }
  };

  if (loading) {
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
              <span className="text-orange-600">Profile</span> Info
            </Typography>
            <form
              id="register-form"
              onSubmit={handleSubmit(onSubmit)}
              className=""
            >
              {/* Name section  */}
              <div className="relative">
                <Input
                  label="Full Name"
                  size="lg"
                  className="bg-secondaryWhite"
                  {...register('userName', {
                    required: {
                      value: true,
                      message: '⚠ Please enter your name.',
                    },
                  })}
                />
                <label className="text-xs flex absolute top-[44px] left-[3px]">
                  {errors.userName?.type === 'required' && (
                    <span className="label-text-alt text-red-600">
                      {errors.userName.message}
                    </span>
                  )}
                </label>
              </div>
              {/* contact number section  */}
              <div className="mt-[24px] relative">
                <Input
                  label="Contact Number"
                  size="lg"
                  className="bg-secondaryWhite"
                  {...register('contactNumber', {
                    required: {
                      value: true,
                      message: '⚠ Contact Number is required.',
                    },
                  })}
                />
                <label className="text-xs flex absolute top-[44px] left-[3px]">
                  {errors.contactNumber?.type === 'required' && (
                    <span className="label-text-alt text-red-600">
                      {errors.contactNumber.message}
                    </span>
                  )}
                </label>
              </div>
              {/* user email section  */}
              <div className="mt-2 text-center">
                <p>Joining As - {user?.email}</p>
              </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              form="register-form"
              type="submit"
              variant="gradient"
              color="indigo"
              fullWidth
              className="capitalize text-xl h-10 min-h-10 inline-flex items-center justify-center"
            >
              Submit Info
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
};

export default ProfileInfo;
