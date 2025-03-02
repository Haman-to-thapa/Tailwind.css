import React from 'react'
import { motion } from 'framer-motion'
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa'

const Marque = () => {


  const iCons = [
    <FaHtml5 className='text-orange-500' />,
    <FaCss3 className='text-blue-500' />,
    <FaJs className='text-cyan-500' />,
    <FaGithub className='text-red-500' />,
    <FaReact className='text-cyan-500' />,
  ]


  return (
    <div className='w-full bg-[#2E2B2B] relative py-4 overflow-hidden shadow-lg'>
      <div></div>
      <div></div>

      <div className='flex overflow-hidden w-full'>
        <motion.div className='flex space-x-10 items-center px-10 min-w-max'
          animate={{ x: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {
            [...iCons, ...iCons, ...iCons, ...iCons].map((icon, index) => (
              <motion.div key={index} className='text-5xl'>
                {icon}
              </motion.div>
            ))
          }
        </motion.div>

        <motion.div className='flex space-x-10 items-center px-10 min-w-max'
          animate={{ x: ["-0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {
            [...iCons, ...iCons, ...iCons, ...iCons].map((icon, index) => (
              <motion.div key={index} className='text-5xl'>
                {icon}
              </motion.div>
            ))
          }
        </motion.div>

      </div>
    </div>
  )
}

export default Marque