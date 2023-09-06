import React from 'react'
 import {motion} from 'framer-motion'
import LineGradient from '../components/LineGradient'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
const Projects = () => {
  const portfolios =[
    {
id:1,
src:arrayDestruct
},
    {
id:2,
src:installNode
},
    {
id:3,
src:navbar
},
    {
id:4,
src:reactParallax
},
    {
id:5,
src:reactSmooth
},
    {
id:6,
src:reactWeather
},
]
  return (
            <motion.div 
            className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            
            >
                <div className='pb-8' >
                    <p className=' font-bold text-white w-fit mt-10 '>My<span className='text-red text-4xl'>Projects</span></p>
                    <p className='text-2xl text-white'>Check out some of my work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
                {portfolios.map(({id,src})=>(

                    <div key={id} className=' shadow-md shadow-gray-500 rounded-lg '>
                            <img src={src} alt="" srcset="" className='rounded-md duration-200 hover:scale-105' />
                            <div className=' flex items-center justify-center gap-2'>
                                <button className=' py-3 border-r-2 pr-1 duration-200 hover:scale-105 text-xl font-bold'>Live</button>
                                <button className=' py-3 border-r-2 pr-1 duration-200 hover:scale-105 text-xl font-bold'>Code</button>
                                <button className=' py-3  duration-200 hover:scale-105 text-sm font-bold text-gray-500/[0.5] '>Presentation-Video</button>
                            </div>
                        </div>
                    ))}  
                    </div>
            </motion.div>
  )      
}

export default Projects