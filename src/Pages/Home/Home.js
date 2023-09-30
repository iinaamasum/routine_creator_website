import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../images/bg_img.jpg';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/course-info');
  };
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-[67vh] lg:h-[90vh] bg-center bg-cover bg-no-repeat flex items-center"
    >
      <div className="px-8">
        <Typography
          color="blue-gray"
          className="font-normal text-[16px] sm:text-[20px]"
        >
          Streamline your workflow, boost productivity, and achieve success with
          better routine.
        </Typography>
        <div className="flex items-center gap-x-3">
          <Button
            onClick={handleClick}
            variant="gradient"
            color="blue"
            className="mt-5"
          >
            Create Routine Now
          </Button>
          <Button
            onClick={() => navigate('/user-routine')}
            variant="gradient"
            color="green"
            className="mt-5"
          >
            Edit Your Own Routine
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
