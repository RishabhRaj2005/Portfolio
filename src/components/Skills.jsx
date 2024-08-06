import React from 'react'
import C from '../assets/C_Prog.png'
import Java from '../assets/java.png'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import JavaScript from '../assets/JavaScript.png'
import NodeJS from '../assets/NodeJS.png'
import ReactJS from '../assets/ReactJS.png'
import Mongo from '../assets/MongoDB.png'
import sql from '../assets/Sql.png'
import github from '../assets/github.png'


const Skills = () => {
    const techs = [
        {
            id: 1,
            src: Java,
            title: "Java",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: C,
            title: "C",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: HTML,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 4,
            src: CSS,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 5,
            src: JavaScript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 6,
            src: NodeJS,
            title: "NodeJS",
            style: "shadow-green-500"
        },
        {
            id: 7,
            src: ReactJS,
            title: "ReactJS",
            style: "shadow-blue-500"
        },
        {
            id: 8,
            src: Mongo,
            title: "MongoDB",
            style: "shadow-green-500"
        },
        {
            id: 9,
            src: sql,
            title: "SQL",
            style: "shadow-orange-500"
        },
        {
            id: 10,
            src: github,
            title: "Github",
            style: "shadow-gray-500"
        },
    ]
  return (
    <div name="skills" className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white '>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Skills
                </p>
                <p className="py-6">These are the technologies I have worked with</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12">
                {techs.map(({ id, src, title, style }) => (
                    <div
                        key={id}
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                        <img src={src} alt={title} className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills