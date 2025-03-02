import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.5 }}

      className='relative w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_0_20px_rgba(0_255,255,0.9)] flex items-center justify-center text-white text-xl font-bold cursor-pointer group transition-all duration-300 '>

      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{ borderColor: skill.color }}
        className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center relative  border-4`}>
        <div
          className="absolute top-1/4 text-4xl md:text-5xl"
          style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <span
          className='absolute bottom-4 text-2xl md:3xl m-3 font-bold'
        >{skill.level}</span>
        <div className="absolute bottom-0 left-0 right-0 text-center text-sm md:text-lg font-semibold opacity-0 group-hover:opacity-100">
          <motion.h3
            className='absolute bottom-0 left-0 right-0 text-center text-sm md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300'
          >
            {skill.name}
          </motion.h3>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      level: "Normal",
      icon: <FaHtml5 />,
      color: "#E34F26",
    },
    {
      name: "CSS",
      level: "Normal",
      icon: <FaCss3Alt />,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      level: "Normal",
      icon: <FaJs />,
      color: "#F7DF1E",
    },
    {
      name: "Tailwind CSS",
      level: "Normal",
      icon: <SiTailwindcss />,
      color: "#38B2AC",
    },
    {
      name: "React",
      level: "Normal",
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      name: "GitHub",
      level: "Normal",
      icon: <FaGithub />,
      color: "#181717",
    },
  ];



  return (
    <section id='skills' className='bg-[#2E2B2B] text-white px-6 w-full py-20 md:px-20'>
      <motion.h2
        className='text-4xl md:text-5xl font-extrabold text-[#D97706] text-center mb-12 '
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}

      >
        My Skills
      </motion.h2>

      <div className='flex flex-wrap justify-center gap-8'>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>

    </section>

  )
}

export default Skills