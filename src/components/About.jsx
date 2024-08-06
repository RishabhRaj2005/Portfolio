import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center'>
        <div className='max-w-screen-lg p-4 mx-auto'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-xl mt-6">
                    Hii, I am Rishabh Raj, a third year undergraduate student at Birla Institute of Technology, currently pursuing a B.Tech in computer science and engineering.
                </p>

                <p className="text-xl mt-6">
                    I was born and brought up in Patna, a not so small town in India. After completeing my school I came to this college to pursue my degree.
                    As a student I possess good knowledge of computer fundamentals. I love to explore the realms of data structure and algorithm, web development and other fundamental subject.
                    I enjoy solving problems. I have knowledge of programming languages like Java, C and JavaScript. I also have knowledge of NodeJs, ExpressJs, ReactJs, MongoDB, etc.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About