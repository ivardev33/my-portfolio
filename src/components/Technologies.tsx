'use client'

import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa'

import { SiNextdotjs, SiTailwindcss, SiFirebase, SiKotlin, SiJavascript, SiJetpackcompose,SiMysql } from 'react-icons/si'

const techs = [
    { icon: <FaReact size={40} color="#61DBFB" />, name: 'React' },
    { icon: <SiNextdotjs size={40} />, name: 'Next.js' },
    { icon: <SiTailwindcss size={40} color="#38bdf8" />, name: 'Tailwind' },
    { icon: <FaHtml5 size={40} color="#e34c26" />, name: 'HTML' },
    { icon: <FaCss3Alt size={40} color="#264de4" />, name: 'CSS' },
    { icon: <FaNodeJs size={40} color="#3C873A" />, name: 'Node.js' },
    { icon: <FaGitAlt size={40} color="#f1502f" />, name: 'Git' },
    { icon: <SiFirebase size={40} color="#FFCA28" />, name: 'Firebase' },
    { icon: <SiKotlin size={40} color="#7F52FF" />, name: 'Kotlin' },
    { icon: <SiJavascript size={40} color="#f7df1e" />, name: 'JavaScript' },
    { icon: <SiJetpackcompose size={40} color="#4285F4" />, name: 'Jetpack Compose' },
    { icon: <SiMysql size={40} color="#00758f" />, name: 'MySQL' }, // SQL
]

export default function Technologies() {
    return (

        /*<section id="technologies" className=" animate-on-scroll min-h-screen flex flex-col items-center justify-center p-8 bg-black-100">
            <h2 className="text-3xl font-bold mb-6">Tecnologías que uso</h2> 
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-md"
                    >
                        {tech.icon}
                        <span className="mt-2 text-sm text-gray-800">{tech.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>*/

         <section className=" animate-on-scroll min-h-screen flex flex-col items-center justify-center p-8 bg-black-100">
            <span className="text-3xl font-bold mb-6 text-center" >Tecnologías que uso</span>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        
                        className="hover:animate-pulse flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-md"
                    >
                        <span className= "hover:animate-spin">{tech.icon}</span>
                        <span className="mt-2 text-sm text-gray-800">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>


        

    )
}
