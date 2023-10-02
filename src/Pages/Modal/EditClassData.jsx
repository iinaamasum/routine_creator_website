import {
  Button,
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
  const [labTheoryError, setLabTheoryError] = useState('');
  const [isUpdateCourse, setIsUpdateCourse] = useState(false);
  const { course_id } = useParams();

  const [newCourseError, setNewCourseError] = useState({
    error_course_short_form: '',
    error_credit: '',
    error_instructor1: '',
  });

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

    if (!slot.haveData) {
      slot.haveData = true;
    }
    if (selectCategory === 'Theory') {
      if (c.credit < 3) {
        setLabTheoryError("Theory class can't be less than 3 credit");
        toast.error("Theory class can't be less than 3 credit");
        return;
      }
    } else if (selectCategory === 'Lab') {
      if (c.credit > 1.5) {
        setLabTheoryError("Lab class can't be greater than 1.5 credit");
        toast.error("Lab class can't be greater than 1.5 credit");
        return;
      }
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

  const handleSubmitCourse = async (e) => {
    e.preventDefault();
    toast('Will do later');
    if (e.target.csf.value === '') {
      setNewCourseError({
        ...newCourseError,
        error_course_short_form: 'Please Enter Course Short Form',
      });
      return;
    }
    if (e.target.cr.value === '') {
      setNewCourseError({
        ...newCourseError,
        error_credit: 'Please Enter Course Credit',
      });
      return;
    }
    if (e.target.ins.value === '') {
      setNewCourseError({
        ...newCourseError,
        error_instructor1: 'Please Enter Course Instructor',
      });
      return;
    }
    const form_data = {
      course_short_form: e.target.csf.value,
      credit: e.target.cr.value,
      instructor1: e.target.ins.value,
      instructor2: e.target.ins2.value,
    };
    try {
      const { data } = await axios.patch(
        `http://localhost:5001/api/v1/class/${course_id}`,
        form_data
      );
      if (!data.result._id) {
        toast.error('Error');
        return;
      }
      console.log(data.result);
      setAllClass({ ...data.result.courses });
      setIsUpdateCourse(false);
    } catch (error) {
      toast.error('Check DB and Network');
      console.log(error);
      return;
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

        {isUpdateCourse ? (
          <>
            <DialogHeader className="w-full flex items-center justify-center text-3xl mt-5">
              Add New Course Data
            </DialogHeader>
            <DialogBody className="pb-8 border-0">
              <form
                onSubmit={handleSubmitCourse}
                id="course_info_update_form"
                className="mt-4 mb-2"
              >
                <div className="mb-2 flex flex-wrap justify-center items-center gap-6 max-w-4xl">
                  <div className="text-center">
                    <div className="my-4">
                      <Input
                        size="lg"
                        label="Course Short Form"
                        type="text"
                        name="csf"
                        onChange={() =>
                          setNewCourseError({
                            ...newCourseError,
                            error_course_short_form: '',
                          })
                        }
                      />
                      <div className="text-left mb-1">
                        {newCourseError.error_course_short_form !== '' && (
                          <p className="text-red-500 font-semibold text-[12px] pt-1">
                            ❌ {newCourseError.error_course_short_form}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="my-4">
                      <Input
                        size="lg"
                        label="Course Credit"
                        type="number"
                        name="cr"
                        onChange={() =>
                          setNewCourseError({
                            ...newCourseError,
                            error_credit: '',
                          })
                        }
                      />
                      <div className="text-left mb-1">
                        {newCourseError.error_credit !== '' && (
                          <p className="text-red-500 font-semibold text-[12px] pt-1">
                            ❌ {newCourseError.error_credit}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="my-4">
                      <Input
                        size="lg"
                        label="Instructor - 1"
                        type="text"
                        name="ins"
                        onChange={() =>
                          setNewCourseError({
                            ...newCourseError,
                            error_instructor1: '',
                          })
                        }
                      />
                      <div className="text-left mb-1">
                        {newCourseError.error_instructor1 !== '' && (
                          <p className="text-red-500 font-semibold text-[12px] pt-1">
                            ❌ {newCourseError.error_instructor1}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="my-4">
                      <Input
                        size="lg"
                        label="Instructor - 2 (Optional)"
                        type="text"
                        name="ins2"
                      />
                    </div>

                    <div className="flex items-center justify-center gap-x-5">
                      <Button
                        type="submit"
                        color="blue"
                        variant="text"
                        form="course_info_update_form"
                        className="mt-3 flex items-center gap-2"
                      >
                        Submit New Course
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
                      <Button
                        color="green"
                        variant="text"
                        onClick={() => setIsUpdateCourse(false)}
                        className="mt-3 flex items-center gap-2"
                      >
                        Return to Add Course
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
                    </div>
                  </div>
                </div>
              </form>
            </DialogBody>
          </>
        ) : (
          <>
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

              <div className="text-center mb-1">
                {labTheoryError !== '' && (
                  <p className="text-red-500 font-semibold text-[12px] pt-1">
                    ❌ {labTheoryError}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-3 gap-3 text-center w-[97%] md:w-[90%] mx-auto px-4 text-gray-800 -mb-3">
                {Object.values(allClass).map((c) => (
                  <Button
                    size="md"
                    variant="text"
                    onClick={() => handleSelectedCourse(c)}
                    className="items-center gap-2 border-[2px] py-2 px-1 rounded-md hover:text-gray-900 transition-all duration-100 capitalize text-gray-800 font-semibold"
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
                  </Button>
                ))}
                <>
                  <Button
                    onClick={() => setIsUpdateCourse(true)}
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2 h-20"
                  >
                    Add More Course
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
                </>
              </div>
            </DialogBody>
          </>
        )}
      </Dialog>
    </>
  );
};

export default EditClassData;
