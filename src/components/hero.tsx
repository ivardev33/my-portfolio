import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
export default function Hero(){
    return(



    <section id="hero" className=" flex flex-col items-center justify-center text-center pb-30 pt-20  bg-gray-900">
        <motion.div

          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{duration: 0.6}}
          >
        <img src="/perfil.jpg" alt="Foto de perfil" className="w-70 h-70 rounded-full mx-auto mb-6 shadow-md object-cover" /> 
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 text-white">
          <Typewriter
            words={["¡Hola! Soy Iván", "Tu Dev de confianza"]}
            loop={1}
            cursor
            cursorStyle=">"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1500}
          />



        </h1>
        <p className="text-lg text-gray-700">Desarrollador Full Stack especializado en React, Kotlin y más.</p>
      </section>
    )
}