import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { HiTrash } from 'react-icons/hi';
import { TiEdit } from 'react-icons/ti';
import Swal from 'sweetalert2';
import EditClassData from '../Modal/EditClassData';

const RoutineSlotData = ({ slot, Routine, day, setRoutine }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  //   confirm deletion
  const deletePeriod = async (e, isMul, period) => {
    console.log(isMul, period);
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (willDelete) => {
      if (willDelete.isConfirmed) {
        if (slot.isMul) {
          slot[period] = {
            have: false,
            _id: slot[period]._id,
          };
        } else {
          slot.haveData = false;
          slot[period] = {
            have: false,
            _id: slot[period]._id,
          };
        }
        let counter = 0;
        if (slot.isMul) {
          counter += slot.period1.courseShortForm ? 1 : 0;
          counter += slot.period2.courseShortForm ? 1 : 0;
          counter += slot.period3.courseShortForm ? 1 : 0;
        }

        console.log(counter, slot);

        if (counter === 0) {
          slot.isMul = false;
        }

        try {
          const { data } = await axios.patch(
            `http://localhost:5001/api/v1/routine/sub/${Routine._id}/${day._id}/${slot._id}`,
            slot
          );
          setRoutine({ ...data.result });
        } catch (error) {
          toast.error("Can't get routine. Check network");
        }
      }

      if (willDelete.isConfirmed === true) {
        Swal.fire({
          title: 'Deletion process completed.',
          text: 'Class has been deleted!',
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Deletion Stopped',
          text: 'Class deletion stopped by you!',
          icon: 'error',
        });
      }
    });
  };

  return (
    <>
      <div className="w-full">
        {slot.haveData ? (
          <>
            {slot.isMul ? (
              // have multiple class under the slot
              <div className="grid grid-cols-3">
                {/* have period or not */}
                {slot.period1.have ? (
                  <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4 h-24">
                    <p className="p-0 m-0 leading-5">
                      {slot.period1.courseShortForm}
                    </p>
                    <p className="p-0 m-0 leading-5">
                      {slot.period1?.instructor2 ? (
                        <span>
                          {slot.period1.instructor1} /{' '}
                          {slot.period1.instructor2}{' '}
                        </span>
                      ) : (
                        <span>{slot.period1.instructor1}</span>
                      )}
                      <p className="p-0 m-0 leading-5">
                        <span>{slot.period1.roomNumber}</span>
                      </p>
                    </p>
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={(e) =>
                            deletePeriod(e, slot.isMul, 'period1')
                          }
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <HiTrash color="red" size={15} />
                        </span>
                        <span
                          onClick={handleOpen}
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <TiEdit color="green" size={15} />
                        </span>
                      </p>
                    </div>
                    {/* edit delete end  */}
                  </div>
                ) : (
                  <div className="border-[2px]  border-blue-gray-400 group relative pt-6 pb-4 h-24">
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={handleOpen}
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <TiEdit color="green" size={15} />
                        </span>
                      </p>
                    </div>
                    {/* edit delete end  */}
                  </div>
                )}

                {slot.period2.have ? (
                  <div className="border-[2px]  border-blue-gray-400 group relative pt-6 pb-4 h-24">
                    <p className="p-0 m-0 leading-5">
                      {slot.period2.courseShortForm}
                    </p>
                    <p className="p-0 m-0 leading-5">
                      {slot.period2?.instructor2 ? (
                        <span>
                          {slot.period2.instructor1} /{' '}
                          {slot.period2.instructor2}{' '}
                        </span>
                      ) : (
                        <span>{slot.period2.instructor1}</span>
                      )}
                      <p className="p-0 m-0 leading-5">
                        <span>{slot.period2.roomNumber}</span>
                      </p>
                    </p>
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={(e) =>
                            deletePeriod(e, slot.isMul, 'period2')
                          }
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <HiTrash color="red" size={15} />
                        </span>
                        <span
                          onClick={handleOpen}
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <TiEdit color="green" size={15} />
                        </span>
                      </p>
                    </div>
                    {/* edit delete end  */}
                  </div>
                ) : (
                  <div className="border-[2px]  border-blue-gray-400 group relative pt-6 pb-4 h-24">
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={handleOpen}
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <TiEdit color="green" size={15} />
                        </span>
                      </p>
                    </div>
                    {/* edit delete end  */}
                  </div>
                )}

                {slot.period3.have ? (
                  <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4 h-24">
                    <p className="p-0 m-0 leading-5">
                      {slot.period3.courseShortForm}
                    </p>
                    <p className="p-0 m-0 leading-5">
                      {slot.period3?.instructor2 ? (
                        <span>
                          {slot.period3.instructor1} /{' '}
                          {slot.period3.instructor2}{' '}
                        </span>
                      ) : (
                        <span>{slot.period3.instructor1}</span>
                      )}
                      <p className="p-0 m-0 leading-5">
                        <span>{slot.period3.roomNumber}</span>
                      </p>
                    </p>
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={(e) =>
                            deletePeriod(e, slot.isMul, 'period3')
                          }
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <HiTrash color="red" size={15} />
                        </span>
                        <span
                          onClick={handleOpen}
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <TiEdit color="green" size={15} />
                        </span>
                      </p>
                    </div>
                    {/* edit delete end  */}
                  </div>
                ) : (
                  <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4 h-24">
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={handleOpen}
                          className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                        >
                          <TiEdit color="green" size={15} />
                        </span>
                      </p>
                    </div>
                    {/* edit delete end  */}
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4 h-24">
                  <p className="p-0 m-0 leading-5">
                    {slot.period1.courseShortForm}
                  </p>
                  <p className="p-0 m-0 leading-5">
                    {slot.period1?.instructor2 ? (
                      <span>
                        {slot.period1.instructor1} / {slot.period1.instructor2}{' '}
                      </span>
                    ) : (
                      <span>{slot.period1.instructor1}</span>
                    )}
                    <p className="p-0 m-0 leading-5">
                      <span>{slot.period1.roomNumber}</span>
                    </p>
                  </p>
                  {/* edit delete */}
                  <div className="invisible group-hover:visible">
                    <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                      <span
                        onClick={(e) => deletePeriod(e, slot.isMul, 'period1')}
                        className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                      >
                        <HiTrash color="red" size={15} />
                      </span>
                      <span
                        onClick={handleOpen}
                        className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                      >
                        <TiEdit color="green" size={15} />
                      </span>
                    </p>
                  </div>
                  {/* edit delete end  */}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 h-full">
            <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4 h-24">
              {/* edit delete */}
              <div className="invisible group-hover:visible">
                <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                  <span
                    onClick={handleOpen}
                    className="bg-gray-300 rounded-full p-[3px] mr-1 hover:cursor-pointer"
                  >
                    <TiEdit color="green" size={15} />
                  </span>
                </p>
              </div>
              {/* edit delete end  */}
            </div>
            {/* <div className="border-[2px]  border-blue-gray-400"></div>
          <div className="border-[2px]  border-blue-gray-400"></div> */}
          </div>
        )}
      </div>
      {/* modal section  */}
      <>
        {open && (
          <EditClassData
            open={open}
            handleOpen={handleOpen}
            day={day}
            slot={slot}
            Routine={Routine}
            setRoutine={setRoutine}
          />
        )}
      </>
    </>
  );
};

export default RoutineSlotData;
