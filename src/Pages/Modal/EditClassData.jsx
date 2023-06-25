import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from '@material-tailwind/react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const EditClassData = ({ open, handleOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [newClassView, setNewClassView] = useState(false);

  const allClass = [
    { courseShortForm: 'CSE3100', Instructor: ['TJ'] },
    { courseShortForm: 'CSE3101', Instructor: ['Sen', 'Ali'] },
    // { courseShortForm: 'CSE3102', Instructor: ['Sen', 'Ali'] },
    // { courseShortForm: 'CSE3103', Instructor: ['HsN', 'SA'] },
    // { courseShortForm: 'CSE3104', Instructor: ['HsN', 'SA'] },
    // { courseShortForm: 'CSE3105', Instructor: ['FP'] },
    // { courseShortForm: 'CSE3107', Instructor: ['MMI', 'MRI'] },
    // { courseShortForm: 'CSE3109', Instructor: ['SJM'] },
    // { courseShortForm: 'CSE3110', Instructor: ['SJM'] },
  ];
  const onSubmit = (data) => {
    // console.log(data);
    const Instructor = [];
    if (data.Instructor2 !== '') {
      Instructor.push(data.Instructor1);
      Instructor.push(data.Instructor2);
    } else {
      Instructor.push(data.Instructor1);
    }
    allClass.push({
      courseShortForm: data.courseShortForm,
      Instructor: Instructor,
    });
    setNewClassView(!newClassView);
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
          <span className="text-red-600 font-extrabold text-xl">x</span>
        </p>
        {newClassView ? (
          <div>
            <DialogHeader className="w-full flex items-center justify-center text-3xl mt-5">
              Add Course Details
            </DialogHeader>
            <DialogBody className="pb-8 border-0 -mb-3">
              <form
                id="create-new-course"
                onSubmit={handleSubmit(onSubmit)}
                className="w-full md:w-[90%] mx-auto px-4"
              >
                {/* course short form  */}
                <div className="mt-[24px] relative">
                  <Input
                    label="Course short Form"
                    size="lg"
                    type="text"
                    className="bg-secondaryWhite"
                    {...register('courseShortForm', {
                      required: {
                        value: true,
                        message: '⚠ course short form is required. Ex. CSE3100',
                      },
                    })}
                  />
                  <label className="text-xs flex absolute top-[44px] left-[3px]">
                    {errors.courseShortForm?.type === 'required' && (
                      <span className="label-text-alt text-red-600">
                        {errors.courseShortForm.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Instructor input section  */}
                <div className="mt-[24px] relative">
                  <Input
                    label="Instructor 1"
                    size="lg"
                    type="text"
                    className="bg-secondaryWhite"
                    {...register('Instructor1', {
                      required: {
                        value: true,
                        message: '⚠ Instructor name is required',
                      },
                    })}
                  />
                  <label className="text-xs flex absolute top-[44px] left-[3px]">
                    {errors.Instructor1?.type === 'required' && (
                      <span className="label-text-alt text-red-600">
                        {errors.Instructor1.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="mt-[24px] relative">
                  <Input
                    label="Instructor 2"
                    size="lg"
                    type="text"
                    className="bg-secondaryWhite"
                    {...register('Instructor2')}
                  />
                  <label className="text-xs flex absolute top-[44px] left-[3px]">
                    {errors.Instructor2?.type === 'required' && (
                      <span className="label-text-alt text-red-600">
                        {errors.Instructor2.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* Credit input section  */}
                <div className="mt-[24px] relative">
                  <Input
                    label="Course Credit"
                    size="lg"
                    type="number"
                    min="0.75"
                    max="4.00"
                    step="0.25"
                    className="bg-secondaryWhite"
                    {...register('credit', {
                      required: {
                        value: true,
                        message: '⚠ Credit hour is required',
                      },
                    })}
                  />
                  <label className="text-xs flex absolute top-[44px] left-[3px]">
                    {errors.credit?.type === 'required' && (
                      <span className="label-text-alt text-red-600">
                        {errors.credit.message}
                      </span>
                    )}
                  </label>
                </div>
              </form>
            </DialogBody>
          </div>
        ) : (
          <>
            <DialogHeader className="w-full flex items-center justify-center text-3xl mt-5">
              Add Class
            </DialogHeader>
            <DialogBody className="pb-8 border-0">
              <div className="grid grid-cols-3 gap-3 text-center w-[97%] md:w-[90%] mx-auto px-4 text-gray-800 -mb-3">
                {allClass.map((c) => (
                  <div className="border-[2px] py-2 px-1 rounded-md border-blue-gray-400 hover:cursor-pointer hover:bg-blue-gray-200 hover:text-black transition-all duration-100">
                    <p>{c.courseShortForm}</p>
                    <p>
                      {c.Instructor.length > 1 ? (
                        <span>
                          {c.Instructor[0]} / {c.Instructor[1]}
                        </span>
                      ) : (
                        <span>{c.Instructor[0]}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </DialogBody>
          </>
        )}
        <DialogFooter className="justify-center w-full md:w-[90%] mx-auto px-4 mb-4">
          {newClassView ? (
            <>
              <div className="grid grid-cols-2 gap-x-4 w-full px-4">
                <Button
                  variant="gradient"
                  color="red"
                  onClick={() => setNewClassView(!newClassView)}
                  className="h-[45px] min-h-16 flex items-center justify-center"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  form="create-new-course"
                  type="submit"
                  color="blue"
                  className="h-[45px] min-h-16 flex items-center justify-center"
                >
                  <span>Add Course</span>
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-x-4 w-full px-4">
                <Button
                  onClick={() => setNewClassView(!newClassView)}
                  color="blue"
                  className="w-full h-[45px] min-h-16 flex items-center justify-center"
                >
                  <span>Create New Class</span>
                </Button>
              </div>
            </>
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditClassData;
