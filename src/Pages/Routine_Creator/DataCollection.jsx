import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function DataCollection() {
  // const [user]
  const [section, setSection] = useState('');
  const [semester, setSemester] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
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
      // email: user.email,
      series: e.target.series.value,
      section,
      semester,
    };
    navigate('/course-info');
  };
  return (
    <div className="flex items-center justify-center min-h-[80vh] mb-5 md:mb-10">
      <Card color="transparent" shadow={false} className="my-2 md:my-4">
        <Typography variant="h4" color="blue-gray">
          Classes Information
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-sm">
          Enter class details to reserve routine slot.
        </Typography>
        <form
          onSubmit={handleSubmit}
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
  );
}
