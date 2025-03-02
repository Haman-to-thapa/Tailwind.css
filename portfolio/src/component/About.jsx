import React from 'react'
import { motion } from 'framer-motion'
import boy from '../assets/boy.png'

const About = () => {
  return (
    <section id='about'
      className='w-full py-20 bg-[#2E2B2B] text-white px-6 md:px-16'
    >
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0'>
        <div className='flex-1 flex flex-col justify-center items-start space-y-6 md:space-y-8'>
          <motion.h2 className='text-4xl md:text-5xl font-extrabold text-[#d97706]'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            About me
          </motion.h2>

          <motion.p className='text-lg md:text-xl text-gray-300'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            I'm a Frontend Developer with a passion for creating visually stunning, modern, and interactive websites. With experience in front-end technologies such as React.js, Tailwind CSS, GitHub, JavaScript, CSS, and HTML, I aim to create seamless user experiences that engage and inspire.
          </motion.p>

          <motion.a href='' className='inline-block mt-6 px-8 py-3 bg-[#d97706] text-lg font-semibold'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Download My Resume
          </motion.a>

        </div>

        {/* left side  */}
        <div className='flex-1 opacity-55'>
          <motion.img src={boy}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
          </motion.img>
        </div>

      </div>

    </section>
  )
}

export default About
