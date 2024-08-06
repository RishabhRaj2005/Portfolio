import React from 'react'

const Contact = () => {
    const links = [
        {
            id: 1,
            link: "Github",
            href: "https://github.com/RishabhRaj2005"
        },
        {
            id: 2,
            link: "LinkedIn",
            href: "https://www.linkedin.com/in/rishabh-raj-60060b25a/"
        },
        {
            id: 3,
            link: "Mail",
            href: "mailto:rishabhrajfeb22@gmail.com"
        }
    ];
    const handleLinkClick = (url) => {
        if (url) {
          window.open(url, "_blank");
        }
    };
  return (
    <div name="contact" className='flex w-full h-20 px-4 text-white bg-black '>
        <ul className="hidden md:flex">
    {links.map(({ id, link, href }) => (
        <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
            <button
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => handleLinkClick(href)}
            >
               {link}
            </button>
        </li>
    ))}
</ul>
    </div>
  )
}

export default Contact

/*{}*/