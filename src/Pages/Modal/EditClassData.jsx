import {
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Option,
  Select,
} from '@material-tailwind/react';
import { useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const EditClassData = ({ open, handleOpen }) => {
  const [selectPeriod, setSelectPeriod] = useState('');
  const [selectCategory, setSelectCategory] = useState('Theory');
  const [selectRoom, setSelectRoom] = useState('');
  const [selectRoomError, setSelectRoomError] = useState(false);
  const [selectPeriodError, setSelectPeriodError] = useState(false);

  const { course_id } = useParams();
  console.log(course_id);

  const allClass = {
    1695575501670: {
      course_short_form: 'CSE3100',
      credit: '0.75',
      instructor1: 'TJ',
    },
    1695575502566: {
      course_short_form: 'CSE3101',
      credit: '3',
      instructor1: 'ALI',
      instructor2: 'Sen',
    },
    1695575503093: {
      course_short_form: 'CSE3102',
      credit: '1.5',
      instructor1: 'ALI',
      instructor2: 'Sen',
    },
    1695575503698: {
      course_short_form: 'CSE3105',
      credit: '3',
      instructor1: 'FP',
    },
  };

  // useEffect

  const handleSelectedCourse = (c) => {
    if (selectRoom === '') {
      setSelectRoomError(true);
    }
    if (selectPeriod === '' && selectCategory === 'Theory') {
      setSelectPeriodError(true);
      console.log(selectPeriodError);
      return;
    }
    if (selectRoom === '') {
      return;
    }
    const addedData = {
      ...c,
      selectRoom,
      selectCategory,
    };
    console.log(addedData);
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="min-w-[350px] sm:min-w-[450px] relative"
      >
        <p
          variant="gradient"
          color="red"
          onClick={handleOpen}
          className="h-[30px] w-[30px] min-h-16 flex items-center justify-center absolute top-2 right-2 bg-gray-300 rounded-full cursor-pointer"
        >
          <span className="text-red-600 font-extrabold text-xl">
            <MdCancel />
          </span>
        </p>

        <DialogHeader className="w-full flex items-center justify-center text-3xl mt-5">
          Add Class
        </DialogHeader>
        <DialogBody className="pb-8 border-0">
          <div className="w-[97%] md:w-[90%] mx-auto px-4 pb-2">
            <Select
              value={selectCategory}
              onChange={(e) => {
                setSelectCategory(e);
              }}
              size="lg"
              label="Course Category"
            >
              <Option value="Lab">Lab</Option>
              <Option value="Theory">Theory</Option>
            </Select>
          </div>

          {selectCategory === 'Theory' && (
            <div className="w-[97%] md:w-[90%] mx-auto px-4 pt-2 pb-2">
              <Select
                value={selectPeriod}
                onChange={(e) => {
                  setSelectPeriod(e);
                  setSelectPeriodError(false);
                }}
                size="lg"
                label="Select Period"
              >
                <Option value="Period1">Period 1</Option>
                <Option value="Period2">Period 2</Option>
                <Option value="Period3">Period 3</Option>
              </Select>

              {selectPeriodError && (
                <p className="text-red-500 font-semibold text-[12px] pt-1">
                  ❌ Period is not added.
                </p>
              )}
            </div>
          )}

          <div className="w-[97%] md:w-[90%] mx-auto px-4 pt-2 pb-5">
            <Input
              onChange={(e) => {
                setSelectRoom(e.target.value);
                setSelectRoomError(false);
              }}
              size="lg"
              label="Room Number"
              type="text"
              name="room_number"
              min="0"
            />
            {selectRoomError && (
              <p className="text-red-500 font-semibold text-[12px] pt-1">
                ❌ Room Number is not provided.
              </p>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3 text-center w-[97%] md:w-[90%] mx-auto px-4 text-gray-800 -mb-3">
            {Object.values(allClass).map((c) => (
              <div
                onClick={() => handleSelectedCourse(c)}
                className="border-[2px] py-2 px-1 rounded-md border-blue-gray-400 hover:cursor-pointer hover:bg-blue-gray-200 hover:text-black transition-all duration-100"
              >
                <p>{c.course_short_form}</p>
                <p className="text-[13px]">Credit: {c.credit}</p>
                <p>
                  {c?.instructor2 ? (
                    <span>
                      {c.instructor1} / {c?.instructor2}
                    </span>
                  ) : (
                    <span>{c.instructor1}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default EditClassData;
