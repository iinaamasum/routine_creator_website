import React from 'react';
import RoutineSlotData from './RoutineSlotData';

const RoutineSlot = ({ day, dayName, Routine , setRoutine}) => {
  const { slot1, slot2, slot3 } = day;
  return (
    <div>
      <div className="flex">
        <p className="w-32 text-center flex items-center justify-center border-[2px]  border-blue-gray-400">
          {dayName}
        </p>
        <div className="w-full h-full text-center grid grid-cols-3">
          <RoutineSlotData setRoutine={setRoutine} slot={slot1} Routine={Routine} day={day} />
          <RoutineSlotData setRoutine={setRoutine} slot={slot2} Routine={Routine} day={day} />
          <RoutineSlotData setRoutine={setRoutine} slot={slot3} Routine={Routine} day={day} />
        </div>
      </div>
    </div>
  );
};

export default RoutineSlot;
