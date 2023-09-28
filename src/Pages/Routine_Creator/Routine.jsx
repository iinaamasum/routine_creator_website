import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';
import RoutineSlot from './RoutineSlot';

const Routine = () => {
  const { course_id } = useParams();
  const [Routine, setRoutine] = useState({});
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const Period = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
  ];
  const Time = [
    '08:00 am - 08:50 am',
    '08:50 am - 09:40 am',
    '09:40 am - 10:30 am',
    '10:50 am - 11:40 am',
    '11:40 am - 12:30 pm',
    '12:30 pm - 01:20 pm',
    '02:30 pm - 03:20 pm',
    '03:20 pm - 04:10 pm',
    '04:10 pm - 05:00 pm',
  ];

  useEffect(() => {
    if (state.routine_id === '') return;
    async function getResults() {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/api/v1/routine/${state.routine_id}`
        );
        setRoutine({ ...data.result });
        console.log(data?.result);
      } catch (error) {
        toast.error("Can't get routine. Check network");
      }
    }
    getResults();
  }, [state.routine_id, state.course_id]);
  console.log(course_id);

  if (!Routine._id) {
    return;
  }

  if (Routine.course_id === '' || Routine._id === '') {
    toast.error('Routine Error');
    return;
  }

  const sat = Routine?.sat;
  const sun = Routine?.sun;
  const mon = Routine?.mon;
  const tues = Routine?.tues;
  const wed = Routine?.wed;

  console.log('sat', sat);

  return (
    <div className="overflow-x-auto min-w-[900px] max-w-[1400px] flex items-center justify-center mx-auto m-4 md:my-5">
      <div className="w-full md:mx-10">
        <h1 className="text-center text-xl md:text-2xl my-1 text-blue-800 font-semibold">
          Class Routine of '{Routine.series} {Routine.section}
        </h1>
        <div className="flex">
          <p className="w-32 h-full text-center flex items-center justify-center border-[2px] border-blue-gray-400">
            Period
          </p>
          <div className="flex items-center justify-center w-full">
            {Period.map((p) => (
              <div className="w-full text-center border-[2px] border-blue-gray-400">
                {p}
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <p className="w-32 h-14 text-center flex items-center justify-center border-[2px]  border-blue-gray-400">
            Time
          </p>
          <div className="flex items-center justify-center w-full h-14 bg-gray-200">
            {Time.map((t) => (
              <div className="w-full h-full text-center flex items-center justify-center border-[2px] border-blue-gray-400">
                {t}
              </div>
            ))}
          </div>
        </div>
        {/* Sat */}
        <RoutineSlot day={sat} Routine={Routine} dayName={'Saturday'} />
        <RoutineSlot day={sun} Routine={Routine} dayName={'Sunday'} />
        <RoutineSlot day={mon} Routine={Routine} dayName={'Monday'} />
        <RoutineSlot day={tues} Routine={Routine} dayName={'Tuesday'} />
        <RoutineSlot day={wed} Routine={Routine} dayName={'Wednesday'} />
      </div>
    </div>
  );
};

export default Routine;
