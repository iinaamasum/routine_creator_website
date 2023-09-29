import { Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

function FormComponentExample() {
  const [formComponents, setFormComponents] = useState([]);
  const [formData, setFormData] = useState({});

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

  const handleInputChange = (event, componentId) => {
    const course_short_form = event.target.course_short_form.value;
    const instructor1 = event.target.course_short_form.value;
    const instructor2 = event.target.course_short_form.value;

    if (course_short_form === '' || instructor1 === '') {
      toast.error('Please enter all inputs.');
      return;
    }
    const course_data = {
      course_short_form,
      instructor1,
      instructor2
    }
    setFormData({
      ...formData,
      [componentId]: course_data,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formComponents.map((componentId) => (
          <div key={componentId}>
            <div className="">
              <Input
                size="lg"
                label="Course Short Form"
                type="text"
                name="course_short_form"
              />
              <Input
                size="lg"
                label="Instructor - 1"
                type="text"
                name="instructor1"
              />
              <Input
                size="lg"
                label="Instructor - 2 (Optional)"
                type="text"
                name="instructor2"
              />
            </div>
            <input
              type="text"
              placeholder="Enter value"
              value={formData[componentId] || ''}
              onChange={(event) => handleInputChange(event, componentId)}
            />
            <button
              type="button"
              onClick={() => removeFormComponent(componentId)}
            >
              Remove Course
            </button>
          </div>
        ))}
        <button type="button" onClick={addFormComponent}>
          Add New Course
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponentExample;
