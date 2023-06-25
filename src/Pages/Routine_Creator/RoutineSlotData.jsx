import React, { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import { TiEdit } from 'react-icons/ti';
import Swal from 'sweetalert2';
import EditClassData from '../Modal/EditClassData';

const RoutineSlotData = ({ slot }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  //   confirm deletion
  const deleteClass = async (e) => {
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
      console.log(willDelete);
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
                  <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4">
                    <p className="p-0 m-0 leading-5">
                      {slot.period1.courseShortForm}
                    </p>
                    <p className="p-0 m-0 leading-5">
                      {slot.period1.Instructor.length > 1 ? (
                        <span>
                          {slot.period1.Instructor[0]} /{' '}
                          {slot.period1.Instructor[1]}{' '}
                        </span>
                      ) : (
                        <span>{slot.period1.Instructor[0]}</span>
                      )}
                      <p className="p-0 m-0 leading-5">
                        <span>{slot.period1.roomNo}</span>
                      </p>
                    </p>
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={deleteClass}
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
                  <div className="border-[2px]  border-blue-gray-400 group relative pt-6 pb-4">
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
                  <div className="border-[2px]  border-blue-gray-400 group relative pt-6 pb-4">
                    <p className="p-0 m-0 leading-5">
                      {slot.period2.courseShortForm}
                    </p>
                    <p className="p-0 m-0 leading-5">
                      {slot.period2.Instructor.length > 1 ? (
                        <span>
                          {slot.period2.Instructor[0]} /{' '}
                          {slot.period2.Instructor[1]}{' '}
                        </span>
                      ) : (
                        <span>{slot.period2.Instructor[0]}</span>
                      )}
                      <p className="p-0 m-0 leading-5">
                        <span>{slot.period2.roomNo}</span>
                      </p>
                    </p>
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={deleteClass}
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
                  <div className="border-[2px]  border-blue-gray-400 group relative pt-6 pb-4">
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
                  <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4">
                    <p className="p-0 m-0 leading-5">
                      {slot.period3.courseShortForm}
                    </p>
                    <p className="p-0 m-0 leading-5">
                      {slot.period3.Instructor.length > 1 ? (
                        <span>
                          {slot.period3.Instructor[0]} /{' '}
                          {slot.period3.Instructor[1]}{' '}
                        </span>
                      ) : (
                        <span>{slot.period3.Instructor[0]}</span>
                      )}
                      <p className="p-0 m-0 leading-5">
                        <span>{slot.period3.roomNo}</span>
                      </p>
                    </p>
                    {/* edit delete */}
                    <div className="invisible group-hover:visible">
                      <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                        <span
                          onClick={deleteClass}
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
                  <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4">
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
                <div className="border-[2px] border-blue-gray-400 group relative pt-6 pb-4">
                  <p className="p-0 m-0 leading-5">
                    {slot.period1.courseShortForm}
                  </p>
                  <p className="p-0 m-0 leading-5">
                    {slot.period1.Instructor.length > 1 ? (
                      <span>
                        {slot.period1.Instructor[0]} /{' '}
                        {slot.period1.Instructor[1]}{' '}
                      </span>
                    ) : (
                      <span>{slot.period1.Instructor[0]}</span>
                    )}
                    <p className="p-0 m-0 leading-5">
                      <span>{slot.period1.roomNo}</span>
                    </p>
                  </p>
                  {/* edit delete */}
                  <div className="invisible group-hover:visible">
                    <p className="flex items-center justify-center absolute right-0 top-[2px] ">
                      <span
                        onClick={deleteClass}
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
            <div className="border-[2px]  border-blue-gray-400 group relative pt-6 pb-4">
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
      <>{open && <EditClassData open={open} handleOpen={handleOpen} />}</>
    </>
  );
};

export default RoutineSlotData;
