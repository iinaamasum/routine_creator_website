import React from 'react';
import RoutineSlotData from './RoutineSlotData';

const RoutineSlot = ({ day, dayName }) => {
  const { slot1, slot2, slot3 } = day;
  return (
    <div>
      <div className="flex">
        <p className="w-32 text-center flex items-center justify-center border-[2px]  border-blue-gray-400">
          {dayName}
        </p>
        <div className="w-full h-full text-center grid grid-cols-3">
          <RoutineSlotData slot={slot1} />
          <RoutineSlotData slot={slot2} />
          <RoutineSlotData slot={slot3} />
        </div>
      </div>
    </div>
  );
};

export default RoutineSlot;
