import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export function CourseCount({ courseCounts }) {
  return (
    <Card
      variant="gradient"
      className="w-full md:w-96 p-8 bg-[#455a64] min-h-[50vh]"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          Course Statistics
        </Typography>
      </CardHeader>
      <CardBody className="p-0 text-white">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center justify-between px-8">
            <p>Course Name</p>
            <p>Class Count</p>
          </li>
          {Object.keys(courseCounts).map((courseShortForm) => (
            <li className="flex items-center gap-4" key={courseShortForm}>
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>

              <div className="flex items-center justify-between px-2 w-full">
                <p>{courseShortForm}</p>
                <p className="mr-10">{courseCounts[courseShortForm]}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
