import React from 'react';
import code from '../assets/code2.png';
import code1 from '../assets/code3.png';
import code2 from '../assets/Spotify.png';
import code3 from '../assets/QR.png';
import code4 from '../assets/P.png'

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Social Distribution
              </span>
              <p className='text-center'> Web application built with Vue and SQL</p>
              <div className='pt-8 text-center'>
              
                <a href='https://youtu.be/p-l-jmiMfUM'
                target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Prevents security vulnerabilities
              >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/araina29/404f23project-21-average.git'
                target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Prevents security vulnerabilities
              >
                  
                  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                  
                </a>
              </div>
            </div>
          </div>
          <div



            style={{ backgroundImage: `url(${code1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Pygame project
              </span>
              <p className='text-center'>A simple alien shooting game built on python</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/araina29/Pygame---Alien-Game.git'
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Prevents security vulnerabilities
                >
                  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div


            style={{ backgroundImage: `url(${code2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                MusicWiz
              </span>
              <p className='text-center'>A Music recommendation system for spotify using sql and python</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/BRBhacked/MUSICwiz.git'
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Prevents security vulnerabilities
                >
                  
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div


            style={{ backgroundImage: `url(${code3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Binary Bandits 
              </span>
              <p className='text-center'>A mobile application developed on Android studio </p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/CMPUT301W23T06/BinaryBandits/blob/main/README.md'
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Prevents security vulnerabilities
                >

                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/CMPUT301W23T06/BinaryBandits.git'
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Prevents security vulnerabilities
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                My portfolio
              </span>
              <p className='text-center'>Implemented on react/java</p>
              <div className='pt-8 text-center'>
                <a href='/'>

                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/araina29/My-portfolio.git'
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Prevents security vulnerabilities
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                CBT Application
              </span>
              <p className='text-center'>A CBT web application built with React and Mongodb</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Works;