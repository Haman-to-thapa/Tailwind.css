import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {

  const [formData, setFromData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState('')

  const handleInputChange = (e) => {
    const [name, value] = e.target;
    setFromData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefult()

    setStatus("")

    if (!formData || !formData.email || !formData.message) {
      setStatus("please fill in the fields")
      return;
    }

    const from = new formData();
    from.append('name', formData.name)
    from.append('email', formData.email)
    from.append('message', formData.message)

    try {
      const response = await fetch('https://formsubmit.co/hamanthapa00000@gamil.com', {
        method: 'POST',
        body: form,
      })

      if (response.ok) {
        setStatus('Message sent successfully.')
        setFromData({ name: "", email: "", message: "" })
      } else {
        setStatus("Message failed to send.")
      }
    } catch (error) {
      setStatus("Something went wrong")
    }
  }




  return (
    <section id='contact' className='w-full h-full  bg-[#2E2B2B] px-6 md:px-16'>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
        <div className="flex-1 text-center md:text-left ">
          <h2 className='text-white text-3xl md:text-5xl font-extrabold'>Get In Touch</h2>
          <motion.p
            className='mt-4 text-lg md:text-xl font-semibold text-gray-300'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            I'd love to hear frm you. Whether you have a quesion or just want to chat, feel free to send me a message.
          </motion.p>

          <motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.4 }}


              className='flex flex-col md:flex-row space-x-7 space-y-5 text-white'>
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


          </motion.div>
        </div>

        <div className="flex-1 text-white mt-6 md:mt-0">
          <form className="bg-[#1E1C1C] p-8 shadow-lg"
            onSubmit={handleSubmit}
            action={"https://formsubmit.co/hamanthapa00000@gamil.com"}
            method='POST'
          >
            <input type="text" className='w-full p-4 mb-4 bg-[#333] text-white'
              value={formData.name}
              onChange={handleInputChange}
              name='name'
              placeholder='Enter Your Name'
            />
            <input type="text" className='w-full p-4 mb-4 bg-[#333] text-white'
              value={formData.email}
              onChange={handleInputChange}
              name='email'
              placeholder='Enter Your Email'
            />
            <textarea className="w-full p-4 mb-4 bg-[#333]" id=""
              value={formData.email}
              onChange={handleInputChange}
              name='message'
              rows={5}
              placeholder='Feedback Please About me'
            ></textarea>
            <button
              type='submits'
              className='w-full py-3 bg-[#D97706] rounded-full'>Send Message</button>
            {status && (<p className='text-lg mt-4 text-green-700 text-center'>{status}</p>)}
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact