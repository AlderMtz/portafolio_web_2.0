import { FaAddressBook, FaCcVisa, FaGithub, FaInstagram, FaLinkedinIn, FaUserTag } from "react-icons/fa"
import logo from "../assets/freedomLogo.png"
import cv_pdf from "../assets/CV_Alder.pdf"
import { FaAddressCard, FaLinkedin } from "react-icons/fa6"

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img src={logo} className="mx-6" width={70} height={70}
            alt="Logo"/>
          </a>
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href={cv_pdf} target="_blank">
              <FaAddressBook />
          </a>

          <a href="https://www.linkedin.com/in/alder-mart%C3%ADnez-6146ba1b0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
              <FaLinkedinIn/>
          </a>

          <a href="https://github.com/AlderMtz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >
              <FaGithub/>
          </a>

          <a href="https://www.instagram.com/aldermtz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            >
              <FaInstagram/>
          </a>

        </div>
      </nav>
    )
  }
  
export default Navbar