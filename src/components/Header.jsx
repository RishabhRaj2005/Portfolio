import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "skills",
        },
        {
          id: 4,
          link: "projects",
        },
        {
          id: 5,
          link: "contact",
        },
      ];
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
            <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
                <Link to={link} smooth duration={500}>
                {link}
                </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Header