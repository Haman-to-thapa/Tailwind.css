import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import laptop from '../assets/frontend-image.png'



const Home = () => {
  return (
    <section id='home'
      className='w-full h-screen flex flex-col md:flex-row items-center justify-center bg-[#2E2B2B] text-white px-6 md:px-16 md:pt-0 '>
      {/* leftSide */}
      <div className='flex-1 flex flex-col justify-center items-start space-y-6'>
        <motion.p
          className='text-lg md:text-xl font-semibold text-gray-300'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I,m HamaN
        </motion.p>

        <motion.h1
          className='text-5xl md:7xl font-extrabold text-[#D96606] '
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome To My PortFiolio
        </motion.h1>
        <motion.p
          className='text-lg font-semibold text-gray-300'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a Frontend Developer, creating modern, interactive websites,
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}


          className='flex flex-col md:flex-row space-x-7 space-y-5'>
          <a href="https://github.com/Haman-to-thapa">
            <FaGithub className='text-3xl hover:text-[#d97706]' />
          </a>
          <a href="https://www.linkedin.com/in/haman-thapa-44658034b/">
            <FaLinkedin className='text-3xl hover:text-[#d97706]' />
          </a>

          <a href="https://www.facebook.com/haman.thapa.1675">
            <FaFacebook className='text-3xl hover:text-[#d97706]' />
          </a>
          <a href="https://x.com/?lang=en">
            <FaXTwitter className='text-3xl hover:text-[#d97706]' />
          </a>
        </motion.div>
      </div>

      {/* rightSide  */}
      <div className='flex-1 flex items-center justify-center relative'>
        <div className='absolute  w-96 h-96 rounded-full blur-3xl z-0 opacity-50'></div>
        <motion.div
          className=' mix-blend-lighten z-10 flex items-center justify-center  relative w-full'
        >
          <motion.img
            src={laptop}
            alt="Merged Image"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}


          />
        </motion.div>
      </div>

    </section>
  )
}

export default Home
