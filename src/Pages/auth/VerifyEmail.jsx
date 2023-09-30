import React, { useEffect } from 'react';
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../Components/LoadingComponent';

const VerifyEmail = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user?.emailVerified) {
      navigate('/');
    }
  }, [user, sending, error, navigate]);

  if (sending) {
    return <LoadingComponent />;
  }
  if (error) {
    toast(error);
  }

  return (
    <div>
      <div
        style={{ minHeight: '70vh' }}
        className="w-full md:w-1/2 mx-auto my-20 text-center"
      >
        <h2 className="text-red-700 text-4xl font-bold">
          Your email is not verified
        </h2>
        <p className="mt-4 text-slate-400 text-md font-normal">
          Not received any verification mail?
        </p>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast('Email verification link has been sent again.');
          }}
          className="px-5 py-2 bg-indigo-500 text-xl text-white rounded mt-2"
        >
          Resent Verification Link
        </button>
        <h2 className="text-2xl font-semibold text-green-600 mt-5">
          If you already verified your email using other devices or other
          browser tab, please{' '}
          <a className="text-blue-700 underline" href="http://localhost:3000">
            Click Here
          </a>
        </h2>
      </div>
    </div>
  );
};

export default VerifyEmail;
