import { BiDockBottom } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"
import { DiDjango, DiDocker, DiMysql } from "react-icons/di"
import { FaDocker } from "react-icons/fa"
import { GrDocker, GrMysql } from "react-icons/gr"
import { RiReactjsFill, RiReactjsLine } from "react-icons/ri"
import { SiCss3, SiDocker, SiFastapi, SiHtml5, SiMariadb, SiMoneygram, SiMongodb, SiMysql, SiSelenium } from "react-icons/si"
import { TbBrandAdonisJs, TbBrandMysql, TbBrandNextjs, TbBrandPython } from "react-icons/tb"
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {
        y: -15
    },
    animate: {
        y: [15, -15],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2 
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                initial={{
                    opacity: 0,
                    y: -100
                }}
                transition={{
                    duration: 1.5
                }}
                className="my-20 text-center text-4xl"
                >Tecnologías
            </motion.h2>
            <motion.div
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                initial={{
                    opacity: 0,
                    x: -100,
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-wrap items-center justify-center gap-4"
                >
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    >
                    <TbBrandPython className="text-7xl text-blue-400"></TbBrandPython>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-3">
                    <BsGithub className="text-7xl"></BsGithub>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-3">
                    <SiFastapi className="text-7xl text-[#05998b]"></SiFastapi>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className="p-3">
                    <DiDjango className="text-7xl text-[#27ab78]"></DiDjango>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className="p-3"> 
                    <SiMariadb className="text-7xl text-[#c59b6c]"></SiMariadb>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-3"> 
                    <GrMysql className="text-7xl text-[#4598d6]"></GrMysql>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-3"> 
                    <SiSelenium className="text-7xl text-[#00b400]"></SiSelenium>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-3"> 
                    <GrDocker className="text-7xl text-[#099cec]"></GrDocker>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className="p-3"> 
                    <RiReactjsFill className="text-7xl text-cyan-500"></RiReactjsFill>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className="p-3"> 
                    <SiHtml5 className="text-7xl text-[#f26529]"></SiHtml5>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-3"> 
                    <SiCss3 className="text-7xl text-[#1874ba]"></SiCss3>
                </motion.div>

            </motion.div>
        </div>
    )
}

export default Technologies