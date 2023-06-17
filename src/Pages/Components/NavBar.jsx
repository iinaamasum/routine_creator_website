import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/logo.png';
import LoadingComponent from './LoadingComponent';

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const [user, userLoading] = useAuthState(auth);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  if (userLoading) {
    return <LoadingComponent />;
  }

  console.log(user);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[16px]"
      >
        <Link to="/creator" className="flex items-center">
          Create Routine
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[16px]"
      >
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-[16px]"
      >
        <Link to="/contact" className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center">
            <img src={Logo} alt="logo-ct" className="h-12 w-auto" />
            <Link
              to="/"
              className="mr-4 cursor-pointer py-1.5 font-medium md:text-[20px] text-bold"
            >
              Routine Creator
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user ? (
              <>
                <span className="text-sm text-green-500 text-bold">
                  {user.email}
                </span>
                <Button
                  onClick={() => signOut(auth)}
                  variant="filled"
                  color="blue"
                  size="sm"
                  className="hidden lg:inline-block "
                >
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <Button
                onClick={() => navigate('/login')}
                variant="filled"
                color="blue"
                size="sm"
                className="hidden lg:inline-block "
              >
                <span>LogIn</span>
              </Button>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {user ? (
            <Button
              onClick={() => signOut(auth)}
              variant="filled"
              color="blue"
              size="md"
              className="hidden lg:inline-block "
            >
              <span>Logout</span>
            </Button>
          ) : (
            <Button
              onClick={() => navigate('/login')}
              variant="filled"
              color="blue"
              size="md"
              className="hidden lg:inline-block "
            >
              <span>LogIn</span>
            </Button>
          )}
        </MobileNav>
      </Navbar>
    </>
  );
}
