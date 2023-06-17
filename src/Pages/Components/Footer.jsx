import { Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-black">
      <footer
        style={{
          background: `radial-gradient(
      55vw 55vw at 0 0,
      #2b94718c 0,
      #2b947100 100%
     )`,
        }}
        className="bg-center bg-cover bg-no-repeat w-full px-8 py-4"
      >
        {/* <hr className="my-3" /> */}
        <div className="flex flex-row flex-wrap text-white items-center justify-center gap-y-4 gap-x-12 text-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-y-1 gap-x-8 text-white">
            <li>
              <Link
                to="/creator"
                color="blue-gray"
                className="font-normal transition-colors hover:text-indigo-500 focus:text-indigo-500"
              >
                Create Routine
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                color="blue-gray"
                className="font-normal transition-colors hover:text-indigo-500 focus:text-indigo-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Typography className="text-center font-normal">
            &copy; 2023 iinaamasum
          </Typography>
        </div>
        {/* <hr className="my-3 border-blue-gray-50" /> */}
      </footer>
    </div>
  );
}
