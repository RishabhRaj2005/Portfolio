import React from 'react'
import Book_Notes from '../assets/Book_Notes.png'
import NewzFeed from '../assets/NewzFeed.png'
import Blog_Site from '../assets/Blog_Site.png'

const Project = () => {
    const project = [
        {
            id: 1,
            src: NewzFeed,
            href: "https://github.com/RishabhRaj2005/NewzFeed"
        },
        {
            id: 2,
            src: Book_Notes,
            href: "https://github.com/RishabhRaj2005/Book_Notes"
        },
        {
            id: 3,
            src: Blog_Site,
            href: "https://spectacular-kataifi-120139.netlify.app"
        }
    ];

    const handleLinkClick = (url) => {
        if (url) {
          window.open(url, "_blank");
        }
    };

  return (
    
    <div name="projects" className='bg-gradient-to-b from-gray-800 to-black w-full text-white min-h-screen flex items-center'>
        
        <div className="max-w-screen-lg p-4 mx-auto">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Projects
                </p>
                <p className="py-6">Check out my works here</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {project.map(({ id, src, href }) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img
                            src={src}
                            alt=""
                            className="rounded-md duration-200 hover:scale-105 w-full h-auto"
                        />
                        <div className="flex items-center justify-center">
                            <button
                            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                            onClick={() => handleLinkClick(href)}
                            >
                                Link
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Project