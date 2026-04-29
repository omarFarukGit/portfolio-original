import React from 'react'
import { assets, serviceData } from '../assets/assets'
import { motion } from "motion/react"
const Services = ({is}) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
        id='services' className='w-full  px-[12%] py-10 scroll-mt-20'>
            <motion.h4
             initial={{ opacity: 0,y:-20 }}
            whileInView={{ opacity: 1,y:0 }}
            transition={{ duration: 0.3,delay:0.5 }}
            className=' text-center mb-2 text-lg'>What I offer</motion.h4>
            <motion.h2
            
             initial={{ opacity: 0,y:-20 }}
            whileInView={{ opacity: 1,y:0 }}
            transition={{ duration: 0.5,delay:0.5 }}className='text-center text-5xl '>My Services</motion.h2>
            <motion.p
            initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
            className=' text-center max-w-2xl mx-auto mt-5 mb-12 '>I am a full stack developer from Bangladesh. My services MERN Stack Custom Solution Building, UI/UX Design and Implementation ,Database Architecture and Management,API Development and Integration ,Migration and Integration Services ,Cloud Deployment and DevOps,Testing and Quality Assurance (QA),Ongoing Support and Maintenance</motion.p>
            <motion.div
            initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.6 }}
            className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-10 grid-'>
                {serviceData.map(({icon,title,description,link},index)=>(
                    <motion.div
                    whileHover={{scale:1.05}}
                    className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover: backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl hover:-translate-y-1 duration-500 ' key={index}>
                        <img className='w-10' src={icon} />
                        <h3 className=' text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
                        <a className='flex items-center gap-2 text-sm mt-5 dark:text-white' href={link}>Read more <img src={assets.right_arrow} className=' w-4' /></a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
