import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { IoIosDocument } from 'react-icons/io';
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
    <div className="lg:h-[95vh] container px-3 md:px-6 lg:px-8 flex justify-center items-center max-w-[1300px] mx-auto pb-10 mt-[20%] md:mt-[8%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="">
          <h1 className="text-4xl md:text-4xl font-bold text-sky-600">
            Hello,
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-3">
            I am <span className="text-purple-600">Md. Masum Mia</span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-red-500 mb-5">
            <Typewriter
              options={{
                strings: [
                  'Junior Web Developer.',
                  'Front-End Developer.',
                  'Back-End Developer.',
                  'Competitive Programmer',
                ],
                autoStart: true,
                pauseFor: 2000,
                delay: 200,
                deleteSpeed: 100,
                loop: true,
              }}
            />
          </h1>

          <p className="text-gray-600 py-3">
            Passionate front-end web developer with extensive JavaScript, HTML,
            and CSS project experience. Proven understanding of responsive
            design in cross-browser compatibility. Seeking a position as a
            Front-End Developer to sharp my web development skill with team
            work.
          </p>

          <div className="flex md:flex-none lg:flex items-center">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1N-wdH0WSxzJ27JE8TzgLusAVQZdI3y7b/view?usp=sharing"
              className="btn btn-dark capitalize text-xl font-bold px-10 mr-4 inline-flex items-center text-gray-100"
              rel="noreferrer"
            >
              <IoIosDocument />
              Resume
            </a>
            <div className="flex items-center">
              <a
                href="https://github.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-600"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-600"
                />
              </a>
              <a
                href="https://www.facebook.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <BsFacebook
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-600"
                />
              </a>
              <a
                href="https://twitter.com/iinaamasum"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block md:hidden lg:block"
              >
                <GrTwitter
                  size={40}
                  className="mr-3 cursor-pointer hover:text-slate-600"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center md:text-lg justify-start mt-3">
            <h2 className="font-semibold text-red-500 mr-2">
              Problem Solving:
            </h2>
            <a
              href="https://leetcode.com/iinaamasum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mr-2 hover:text-blue-800"
            >
              LeetCode
            </a>
            <a
              href="https://codeforces.com/profile/iinaamasum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mr-2 hover:text-blue-800"
            >
              Codeforces
            </a>

            <a
              href="https://vjudge.net/user/iinaamasum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mr-2 hover:text-blue-800"
            >
              VJudge
            </a>
          </div>
          <div className="">
            <p className="capitalize font-semibold text-red-500 text-lg">
              Actual Portfolio:{' '}
              <a
                href="https://iinaamasum-3ec05.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mr-2 hover:text-blue-800 font-normal ml-1"
              >
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
