import {CONTACT} from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
    return(
        <div className="border-t border-stone-900 pb-20">
        {/* <div className="pb-20"> */}
            <motion.h2 
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                initial={{
                    opacity: 1,
                    y: -100
                }}
                transition={{
                    duration: 1.5
                }}
                className="my-10 text-center text-4xl"
                >
                Contacto
            </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p 
                    whileInView={{
                    opacity: 1,
                    x: 0
                    }}
                    initial={{
                        opacity: 1,
                        x: -100
                    }}
                    transition={{
                        duration: 1
                    }}
                    className="my-4"
                    >
                    {CONTACT.address}
                </motion.p>
                <motion.p 
                    whileInView={{
                    opacity: 1,
                    x: 0
                    }}
                    initial={{
                        opacity: 1,
                        x: 100
                    }}
                    transition={{
                        duration: 1
                    }}
                    className="my-4"
                    >
                    {CONTACT.phoneNo}
                </motion.p>
                <a 
                    href="mailto:alder.mtz.ant@gmail.com" 
                    className="border-b"
                    >
                    <motion.p
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        initial={{
                            opacity: 1,
                            x: -100
                        }}
                        transition={{
                            duration: 1
                        }}
                        className="my-4"
                        >
                        {CONTACT.email}
       
                    </motion.p>
                </a>
            </div>
        </div>
    )
}

export default Contact