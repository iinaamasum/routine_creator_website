import {
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Option,
  Select,
} from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdCancel } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const EditClassData = ({
  open,
  handleOpen,
  day,
  slot,
  Routine,
  setRoutine,
}) => {
  const [selectPeriod, setSelectPeriod] = useState('');
  const [selectCategory, setSelectCategory] = useState('Theory');
  const [roomNumber, setRoomNumber] = useState('');
  const [roomNumberError, setRoomNumberError] = useState(false);
  const [selectPeriodError, setSelectPeriodError] = useState(false);
  const [allClass, setAllClass] = useState({});
  const { course_id } = useParams();

  useEffect(() => {
    if (!course_id) return;
    async function getResults() {
      try {
        const { data } = await axios.get(
          `http://localhost:5001/api/v1/class/${course_id}`
        );
        setAllClass({ ...data.result.courses });
        console.log(data?.result.courses);
      } catch (error) {
        toast.error("Can't get routine. Check network");
      }
    }
    getResults();
  }, [course_id]);

  console.log('AllClass', allClass);
  if (Object.keys(allClass).length === 0) {
    return;
  }

  const handleSelectedCourse = async (c) => {
    if (roomNumber === '') {
      setRoomNumberError(true);
    }
    if (selectPeriod === '' && selectCategory === 'Theory') {
      setSelectPeriodError(true);
      console.log(selectPeriodError);
      return;
    }
    if (roomNumber === '') {
      return;
    }
    const addedData = {
      ...c,
      roomNumber,
      selectCategory,
      selectPeriod,
    };
    if (!slot.haveData) {
      slot.haveData = true;
    }

    if (selectCategory === 'Theory') {
      slot.isMul = true;
      slot[selectPeriod] = {
        ...slot[selectPeriod],
        have: true,
        courseShortForm: c.course_short_form,
        instructor1: c.instructor1,
        instructor2: c.instructor2,
        credit: c.credit,
        roomNumber: roomNumber,
      };
    } else {
      slot.isMul = false;
      slot['period1'] = {
        ...slot[selectPeriod],
        have: true,
        courseShortForm: c.course_short_form,
        instructor1: c.instructor1,
        instructor2: c.instructor2,
        credit: c.credit,
        roomNumber: roomNumber,
      };
    }

    try {
      const { data } = await axios.patch(
        `http://localhost:5001/api/v1/routine/sub/${Routine._id}/${day._id}/${slot._id}`,
        slot
      );
      setRoutine({ ...data.result });
      handleOpen(!open);
    } catch (error) {
      toast.error("Can't get routine. Check network");
    }
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
                <Option value="period1">Period 1</Option>
                <Option value="period2">Period 2</Option>
                <Option value="period3">Period 3</Option>
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
                setRoomNumber(e.target.value);
                setRoomNumberError(false);
              }}
              size="lg"
              label="Room Number"
              type="text"
              name="room_number"
              min="0"
            />
            {roomNumberError && (
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
