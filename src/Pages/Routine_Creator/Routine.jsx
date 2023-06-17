import React from 'react';
import RoutineSlot from './RoutineSlot';

const Routine = () => {
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

  const Routine = {
    _id: '648946213189dd9f02b42c52',
    user_email: 'iinaamasum@gmail.com',
    series: '19',
    section: 'B',
    sat: {
      slot1: {
        haveData: true,
        isMul: true,
        period1: {
          have: true,
          courseShortForm: 'CSE3101',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c55',
        },
        period2: {
          have: true,
          courseShortForm: 'CSE3103',
          Instructor: ['HsN', 'SA'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c56',
        },
        period3: {
          have: true,
          courseShortForm: 'CSE3105',
          Instructor: ['FP'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c57',
        },
        _id: '648946213189dd9f02b42c54',
      },
      slot2: {
        haveData: false,
        isMul: false,
        _id: '648946213189dd9f02b42c58',
      },
      slot3: {
        haveData: true,
        isMul: false,
        period1: {
          have: true,
          courseShortForm: 'CSE3102',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c5a',
        },
        _id: '648946213189dd9f02b42c59',
      },
      _id: '648946213189dd9f02b42c53',
    },
    sun: {
      slot1: {
        haveData: true,
        isMul: false,
        period1: {
          have: true,
          courseShortForm: 'CSE3102',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c62',
        },
        _id: '648946213189dd9f02b42c61',
      },
      slot2: {
        haveData: false,
        isMul: false,
        _id: '648946213189dd9f02b42c60',
      },
      slot3: {
        haveData: false,
        isMul: false,
        _id: '648946213189dd9f02b42c60',
      },
      _id: '648946213189dd9f02b42c5b',
    },
    mon: {
      slot2: {
        haveData: true,
        isMul: true,
        period1: {
          have: true,
          courseShortForm: 'CSE3101',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c65',
        },
        period2: {
          have: true,
          courseShortForm: 'CSE3103',
          Instructor: ['HsN', 'SA'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c66',
        },
        period3: {
          have: true,
          courseShortForm: 'CSE3105',
          Instructor: ['FP'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c67',
        },
        _id: '648946213189dd9f02b42c64',
      },
      slot1: {
        haveData: false,
        isMul: false,
        _id: '648946213189dd9f02b42c68',
      },
      slot3: {
        haveData: true,
        isMul: false,
        period1: {
          courseShortForm: 'CSE3102',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c6a',
        },
        _id: '648946213189dd9f02b42c69',
      },
      _id: '648946213189dd9f02b42c63',
    },
    tues: {
      slot1: {
        haveData: true,
        isMul: true,
        period1: {
          have: true,
          courseShortForm: 'CSE3101',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c6d',
        },
        period2: {
          have: false,
          courseShortForm: 'CSE3103',
          Instructor: ['HsN', 'SA'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c6e',
        },
        period3: {
          have: false,
          _id: '648946213189dd9f02b42c6f',
        },
        _id: '648946213189dd9f02b42c6c',
      },
      slot2: {
        haveData: false,
        isMul: false,
        _id: '648946213189dd9f02b42c70',
      },
      slot3: {
        haveData: true,
        isMul: false,
        period1: {
          have: true,
          courseShortForm: 'CSE3102',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c72',
        },
        _id: '648946213189dd9f02b42c71',
      },
      _id: '648946213189dd9f02b42c6b',
    },
    wed: {
      slot1: {
        haveData: true,
        isMul: true,
        period1: {
          have: false,
          courseShortForm: 'CSE3101',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c75',
        },
        period2: {
          have: true,
          courseShortForm: 'CSE3103',
          Instructor: ['HsN', 'SA'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c76',
        },
        period3: {
          have: true,
          courseShortForm: 'CSE3105',
          Instructor: ['FP'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c77',
        },
        _id: '648946213189dd9f02b42c74',
      },
      slot2: {
        haveData: false,
        isMul: false,
        _id: '648946213189dd9f02b42c78',
      },
      slot3: {
        haveData: true,
        isMul: false,
        period1: {
          have: true,
          courseShortForm: 'CSE3102',
          Instructor: ['Sen', 'Ali'],
          roomNo: 202,
          _id: '648946213189dd9f02b42c7a',
        },
        _id: '648946213189dd9f02b42c79',
      },
      _id: '648946213189dd9f02b42c73',
    },
    createdAt: '2023-06-14T04:46:25.435Z',
    updatedAt: '2023-06-14T04:46:25.435Z',
    __v: 0,
  };

  const sat = Routine.sat;
  const sun = Routine.sun;
  const mon = Routine.mon;
  const tues = Routine.tues;
  const wed = Routine.wed;

  return (
    <div className="min-w-[900px] max-w-[1400px] flex items-center justify-center mx-auto m-4 md:my-5">
      <div className="w-full md:mx-10">
        <h1 className="text-center text-xl md:text-2xl my-1 text-blue-800 font-semibold">
          Class Routine of '{Routine.series}
          {Routine.section}
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
        <RoutineSlot day={sat} dayName={'Saturday'} />
        <RoutineSlot day={sun} dayName={'Sunday'} />
        <RoutineSlot day={mon} dayName={'Monday'} />
        <RoutineSlot day={tues} dayName={'Tuesday'} />
        <RoutineSlot day={wed} dayName={'Wednesday'} />
      </div>
    </div>
  );
};

export default Routine;
