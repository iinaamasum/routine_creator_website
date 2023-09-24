import { Button, Card, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CourseInfo() {
  const [formComponents, setFormComponents] = useState([]);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate('/routine');
  };

  return (
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
                      handleInputChange(event, componentId, 'course_short_form')
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
  );
}

export default CourseInfo;
