import {
  Dialog,
  DialogBody,
  DialogHeader,
  Option,
  Select,
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

  const [selectSlot, setSelectSlot] = useState('Slot 1');

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

        <DialogHeader className="w-full flex items-center justify-center text-3xl mt-5">
          Add Class
        </DialogHeader>
        <DialogBody className="pb-8 border-0">
          <div className="w-[97%] md:w-[90%] mx-auto px-4 py-5">
            <Select
              value={selectSlot}
              onChange={(e) => {
                setSelectSlot(e);
              }}
              size="lg"
              label="Select Slot"
            >
              <Option value="Slot 1">Slot 1</Option>
              <Option value="Slot 2">Slot 2</Option>
              <Option value="Slot 3">Slot 3</Option>
            </Select>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center w-[97%] md:w-[90%] mx-auto px-4 text-gray-800 -mb-3">
            {Object.values(allClass).map((c) => (
              <div className="border-[2px] py-2 px-1 rounded-md border-blue-gray-400 hover:cursor-pointer hover:bg-blue-gray-200 hover:text-black transition-all duration-100">
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
