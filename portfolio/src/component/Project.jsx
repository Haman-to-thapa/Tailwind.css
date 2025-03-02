import React from 'react'
import { motion } from 'framer-motion'


const Project = () => {

  const projects = [
    {
      tite: "Project One",
      description: "A Description of Project 1",
      image: "img1.png",
      link: "https://github.com/Haman-to-thapa/git-haman/"
    },
    {
      tite: "Project One",
      description: "A Description of Project 1",
      image: "img1.png",
      link: "https://github.com/Haman-to-thapa/git-haman/"
    },
    {
      tite: "Project One",
      description: "A Description of Project 1",
      image: "img1.png",
      link: "https://github.com/Haman-to-thapa/git-haman/"
    }
  ]

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}

      className='relative w-full md:w-[320px] lg:w-[350px] h-[400px] text-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 group'>


      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundImage: `url(${project.image})` }}
        className='w-full h-full absolute top-0  left-0 bg-cover bg-center'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t via-transparent to-transparent opacity-30 group-hover:opacity-100 transition-all duration-300 p-6 flex-col justify-between '>

          <motion.h3 className='text-2xl md:text-3xl mb-4 font-bold'>
            {project.tite}
          </motion.h3>

          <motion.p className='text-sm md:text-lg bg-amber-200 mb-6 text-black'>
            {project.description}
          </motion.p>

          <motion.a href={project.link} className='inline-block text-lg text-[#D97706] underline font-bold'
            whileHover={{ scale: 1.1 }}
          >
            View Project
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id='project' className='w-full py-20 bg-[#2E2B2B]  text-white'>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 50 }}
        transition={{ duration: 0.8 }}
        className='text-4xl md:text-5xl font-extrabold text-[#D97706] text-center mb-12 ' >

        My Project
      </motion.h2>
      <motion.div className='flex flex-wrap justify-center gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>

    </section>
  )
}

export default Project