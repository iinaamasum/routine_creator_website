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
  const [series, setSeries] = useState('');
  const [section, setSection] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (series === '') {
      toast.error('Please select a series.');
      return;
    }
    if (section === '') {
      toast.error('Please select section.');
      return;
    }
    if (
      e.target.theory.value === '' ||
      e.target.sessional_full.value === '' ||
      e.target.sessional_half.value === ''
    ) {
      toast.error('Please enter all inputs.');
      return;
    }
    const data = {
      series,
      section,
      theory: e.target.theory.value,
      sessional_full: e.target.sessional_full.value,
      sessional_half: e.target.sessional_half.value,
      assigned_theory: 0,
      assigned_sessional_full: 0,
      assigned_sessional_half: 0,
    };
    // console.log(data);
    navigate('/create-routine');
  };
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
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
            <Select
              value={series}
              onChange={(e) => {
                setSeries(e);
              }}
              size="lg"
              label="Select Series"
            >
              <Option value="'17 Series">'17 Series</Option>
              <Option value="'18 Series">'18 Series</Option>
              <Option value="'19 Series">'19 Series</Option>
              <Option value="'20 Series">'20 Series</Option>
              <Option value="'21 Series">'21 Series</Option>
            </Select>
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
            <Input
              size="lg"
              label="No. of theory courses."
              type="number"
              name="theory"
              min="0"
            />
            <Input
              size="lg"
              label="No. of sessional courses(1.5 Credits)"
              type="number"
              name="sessional_full"
              min="0"
            />
            <Input
              size="lg"
              label="No. of sessional courses(0.75 Credits)"
              type="number"
              name="sessional_half"
              min="0"
            />
            {/* <Input
              type="number"
              size="lg"
              label="No. of sessional courses without classes."
            /> */}
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
