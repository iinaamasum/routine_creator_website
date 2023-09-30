import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import LoadingComponent from '../Components/LoadingComponent';

const ResetPass = () => {
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const [userData, setUserData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState({
    emailError: '',
  });

  const handleEmail = (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(e.target.value)) {
      setUserData({ ...userData, email: e.target.value });
      setErrors({ ...errors, emailError: '' });
    } else {
      setErrors({ ...errors, emailError: 'Invalid Email' });
      setUserData({ ...userData, email: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.emailError !== '') {
      sendPasswordResetEmail(userData.email);
      toast.success('Password reset link has been sent to your email.');
      navigate('/login');
    } else {
      toast.warn('Enter Your Email First');
    }
  };

  if (sending) {
    return <LoadingComponent />;
  }
  if (error) {
    toast(error);
  }
  return (
    <div>
      <div className="w-full md:w-1/2 mx-auto my-10 lg:my-20 bg-slate-200 rounded min-h-[75vh]">
        <form className="p-10 w-full" onSubmit={handleSubmit}>
          <h1 className="text-center text-indigo-600 text-4xl font-bold">
            Password Reset
          </h1>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={handleEmail}
              type="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Your Email"
            />
            <p className="text-sm text-red-600 font-medium">
              {errors?.emailError ? errors.emailError : ''}
            </p>
          </div>

          <input
            type="submit"
            value="Reset Password"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mt-2 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
