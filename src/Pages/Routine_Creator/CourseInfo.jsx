import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingComponent from '../Components/LoadingComponent';

function CourseInfo() {
  const [formComponents, setFormComponents] = useState([]);
  const [formData, setFormData] = useState({});
  const [formDataTemp, setFormDataTemp] = useState({});
  const [section, setSection] = useState('');
  const [semester, setSemester] = useState('');
  const [isCourseInfo, setIsCourseInfo] = useState(false);
  const [user, loading, fireError] = useAuthState(auth);
  const navigate = useNavigate();


  if (loading) {
    return <LoadingComponent />;
  }

  if (fireError) {
    toast.error('Firebase Error. Check network');
    return;
  }

  const addFormComponent = () => {
    const newComponentId = Date.now();
    setFormComponents([...formComponents, newComponentId]);
  };

  const removeFormComponent = (componentId) => {
    const updatedComponents = formComponents.filter((id) => id !== componentId);
    const { [componentId]: removedComponent, ...updatedData } = formData;
    setFormComponents(updatedComponents);
    setFormData(updatedData);
  };

  const handleInputChange = (event, componentId, inputName) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      [componentId]: {
        ...formData[componentId],
        [inputName]: value,
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const courseInfo = {
      user_email: user.email,
      ...formDataTemp,
      courses: { ...formData },
    };

    try {
      const { data } = await axios.post(
        'http://localhost:5001/api/v1/class',
        courseInfo
      );
      if (!data.result._id) {
        toast.error('Error');
        return;
      }

      const { _id: course_id } = data.result;

      const defaultRoutine = {
        course: data.result._id,
        user_email: user.email,
        series: data.result.series,
        section: data.result.section,
        sat: {
          slot1: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot2: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot3: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
        },
        sun: {
          slot1: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot2: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot3: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
        },
        mon: {
          slot1: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot2: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot3: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
        },
        tues: {
          slot1: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot2: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot3: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
        },
        wed: {
          slot1: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot2: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
          slot3: {
            haveData: false,
            isMul: false,
            period1: {
              have: false,
            },
            period2: {
              have: false,
            },
            period3: {
              have: false,
            },
          },
        },
      };

      try {
        const { data: routineData } = await axios.post(
          'http://localhost:5001/api/v1/routine',
          defaultRoutine
        );
        const routine_id = routineData.result._id;
        navigate(`/routine/${course_id}`, { state: { course_id, routine_id } });
      } catch (error) {
        toast.error("Can't get routine. Check network");
      }
    } catch (error) {
      toast.error('Check DB and Network');
      console.log(error);
      return;
    }
  };

  const handleSubmitClassInfo = (e) => {
    e.preventDefault();
    if (e.target.series.value === '') {
      toast.error('Please select a series.');
      return;
    }
    if (section === '') {
      toast.error('Please select section.');
      return;
    }
    if (semester === '') {
      toast.error('Please select section.');
      return;
    }

    const data = {
      series: e.target.series.value,
      section,
      semester,
    };
    setFormDataTemp({ ...data });
    setIsCourseInfo(true);
  };

  return (
    <>
      {isCourseInfo ? (
        <div className="flex items-center justify-center min-h-[80vh] mb-5 md:mb-10">
          <Card
            color="transparent"
            shadow={false}
            className="my-2 md:my-4 mx-10 text-center"
          >
            <Typography variant="h4" color="blue-gray">
              Course Information
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-sm">
              Enter class details along with instructor info.
            </Typography>
            <form
              onSubmit={handleSubmit}
              id="course_info_form"
              className="mt-8 mb-2"
            >
              <div className="mb-4 flex flex-wrap justify-center items-center gap-6">
                {formComponents.map((componentId) => (
                  <div key={componentId} className="text-center">
                    <div className="my-2">
                      <Input
                        size="md"
                        label="Course Short Form"
                        type="text"
                        name="course_short_form"
                        value={formData[componentId]?.course_short_form || ''}
                        onChange={(event) =>
                          handleInputChange(
                            event,
                            componentId,
                            'course_short_form'
                          )
                        }
                      />
                    </div>

                    <div className="my-2">
                      <Input
                        size="md"
                        label="Course Credit"
                        type="number"
                        name="credit"
                        value={formData[componentId]?.credit || ''}
                        onChange={(event) =>
                          handleInputChange(event, componentId, 'credit')
                        }
                        defaultValue={0.75}
                      />
                    </div>

                    <div className="my-2">
                      <Input
                        size="md"
                        label="Instructor - 1"
                        type="text"
                        name="instructor1"
                        value={formData[componentId]?.instructor1 || ''}
                        onChange={(event) =>
                          handleInputChange(event, componentId, 'instructor1')
                        }
                      />
                    </div>
                    <div className="my-2">
                      <Input
                        size="md"
                        label="Instructor - 2 (Optional)"
                        type="text"
                        name="instructor2"
                        value={formData[componentId]?.instructor2 || ''}
                        onChange={(event) =>
                          handleInputChange(event, componentId, 'instructor2')
                        }
                      />
                    </div>

                    <Button
                      type="button"
                      color="red"
                      size="sm"
                      onClick={() => removeFormComponent(componentId)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-x-5 w-full">
                <Button
                  type="button"
                  color="blue"
                  className="mt-6"
                  onClick={addFormComponent}
                >
                  Add New Class
                </Button>
                <Button
                  type="submit"
                  color="green"
                  form="course_info_form"
                  className="mt-6"
                >
                  Submit All Class
                </Button>
              </div>
            </form>
          </Card>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[80vh] mb-5 md:mb-10">
          <Card color="transparent" shadow={false} className="my-2 md:my-4">
            <Typography variant="h4" color="blue-gray">
              Classes Information
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-sm">
              Enter class details to reserve routine slot.
            </Typography>
            <form
              onSubmit={handleSubmitClassInfo}
              id="class-data-info-form"
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Series (ex. 19 Series)"
                  type="text"
                  name="series"
                  min="0"
                />
                <Select
                  value={section}
                  onChange={(e) => {
                    setSection(e);
                  }}
                  size="lg"
                  label="Select Section"
                >
                  <Option value="Section A">Section A</Option>
                  <Option value="Section B">Section B</Option>
                  <Option value="Section C">Section C</Option>
                </Select>

                <Select
                  value={semester}
                  onChange={(e) => {
                    setSemester(e);
                  }}
                  size="lg"
                  label="Select Semester"
                >
                  <Option value="1-1">1-1</Option>
                  <Option value="1-2">1-2</Option>
                  <Option value="2-1">2-1</Option>
                  <Option value="2-2">2-2</Option>
                  <Option value="3-1">3-1</Option>
                  <Option value="3-2">3-2</Option>
                  <Option value="4-1">4-1</Option>
                  <Option value="4-2">4-2</Option>
                </Select>
              </div>
              <Button
                type="submit"
                form="class-data-info-form"
                className="mt-6"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Card>
        </div>
      )}
    </>
  );
}

export default CourseInfo;
