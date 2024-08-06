import React from 'react'
import MyImg from '../assets/MyImg.jpg'
import { Link } from 'react-scroll'

const Home = () => {

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-slate-50'>
                    Hello Everyone!
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Welcome to my portfolio website where I showcase my skills in the world of technology.

                </p>

                <div>
                    <Link
                        to="projects"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >
                        Projects
                    </Link>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <img
                    src={MyImg}
                    alt="my profile"
                    className="rounded-2xl max-h-80"
                />
            </div>
            
        </div>

    </div>
  )
}

export default Home