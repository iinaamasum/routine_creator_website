import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../Components/LoadingComponent';

const ShowAllRoutine = () => {
  const [allUserRoutine, setAllUserRoutine] = useState([]);
  const [user, loading, fireError] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.email) return;
    async function getResults() {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/api/v1/routine?user_email=${user.email}`
        );
        setAllUserRoutine([...data.result]);
        console.log(data.result);
      } catch (error) {
        toast.error(
          'You have no created routine. Please create routine first.'
        );
        return;
      }
    }
    getResults();
  }, [user]);

  if (loading || !allUserRoutine) {
    return <LoadingComponent />;
  }

  if (fireError) {
    toast.error('Firebase Error. Check network');
    return;
  }

  const handleEditRoutine = (r) => {
    console.log(r);
    const { course_id, _id: routine_id } = r;
    console.log(course_id);
    navigate(`/routine/${course_id}`, { state: { course_id, routine_id } });
  };

  return (
    <div className="">
      <h1 className="mt-5 text-center font-semibold text-2xl">
        All existing routine associated with you email
      </h1>
      <div className="flex items-center flex-wrap gap-x-10 gap-y-5 mx-10 min-h-[90vh]">
        {allUserRoutine.map((r) => (
          <Card className="mt-6 w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Routine of '{r.series} {r.section}
              </Typography>
              <Typography>Semester: {r.semester}</Typography>
              <Typography>Created Time: {r.createdAt.split('T')[0]}</Typography>
              <Typography>Updated Time: {r.updatedAt.split('T')[0]}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                onClick={() => handleEditRoutine(r)}
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                Edit Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShowAllRoutine;
