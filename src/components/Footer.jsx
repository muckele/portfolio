import React from "react"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <span>Copyright &copy;2024; Designed by Mathew Uckele</span>
        <a href="https://github.com/muckele"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/mathew-uckele/"><FontAwesomeIcon icon={faLinkedin} /></a>
      </footer>
    </>
  )
}

export default Footer