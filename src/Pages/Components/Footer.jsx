import { Typography } from '@material-tailwind/react';
import Logo from '../../images/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-white px-8 py-6">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="logo-ct" className="h-16 w-auto" />
          <Typography
            as="a"
            href="/"
            color="blue-gray"
            className="font-normal text-[16px] sm:text-[20px] transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Routine Creator
          </Typography>
        </div>
        <ul className="flex flex-wrap items-center gap-y-1 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Create Routine
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-3 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 iinaamasum
      </Typography>
    </footer>
  );
}
