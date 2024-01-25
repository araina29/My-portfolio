import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Software Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
        A Computing Science major from the University of Alberta, 
         my academic journey is marked by a deep dive into the realms of software engineering, machine learning, 
        and artificial intelligence, with a graduation anticipated in June 2025. I am enriching my technical prowess with 
        a blend of innovative and entrepreneurial insights, courtesy of the Certificate in Innovation and Entrepreneurship (CIE) I am pursuing alongside my degree.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
      <img
    src={me}  
    alt="my profile"
    className="rounded-2xl mx-auto w-1/2 md:w-2/3" // Adjusted sizes here
  />
      </div>
    </div>
  </div>
  );
};
export default Home;
