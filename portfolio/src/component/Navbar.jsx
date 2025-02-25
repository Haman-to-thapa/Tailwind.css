
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {

  const [isOpen, setOpen] = useState(false)


  return (
    <nav className='w-full py-4 bg-[#2E2B2B] drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]'>
      <div className='container mx-auto flex items-center justify-between px-6 '>
        <motion.a
          className='flex items-center font-bold text-gray-200 gap-3'
          whileHover={{ scale: 1.1, color: '#D97706' }}
        > HamaN
        </motion.a>

        <button
          className='text-gray-200 focus:outline-none md:hidden'
          onClick={() => setOpen(!isOpen)}
        > {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>


        <div className={`absolute md:relative  ${isOpen ? "block" : "hidden"} top-16 bg-[#2F2B2B] md:top-0 left-0 w-full md:w-auto md:bg-transparent md:items-center md:space-x-10 transition-all duration-300 easy-in-out md:block`}>


          <div className='flex flex-col md:flex-row  items-center space-y-4 md:space-y-0 md:space-x-10 py-4 md:py-0'>
            {
              ['Home', 'About', 'Project', 'Skills', 'Contact'].map((item, index) => (
                <motion.a key={index} className='text-lg font-bold text-gray-200'
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: '#D97706' }}
                >
                  {item}
                </motion.a>
              ))
            }

            <motion.button
              className='px-6 bg-[#d97706] text-white font-bold rounded-full shadow-lg'
              whileHover={{ scale: 1.1, backgroundColor: '#B45309' }}
            >
              Hire Me
            </motion.button>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
