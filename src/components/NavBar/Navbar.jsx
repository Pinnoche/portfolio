import React, { useState } from "react";
import nav from "./navbar.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdTagFaces } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  // Mobile Drawer
  const [active, setActive] = useState(false);

  // change nav color on scroll
const [color, setColor] = useState(false)
/* an arrow function to setColor on scroll*/
 const changeColor = () =>{
 window.scrollY >=27 ? setColor(true) : setColor(false)


}
window.addEventListener('scroll', changeColor)


  const handleClick1 = () => {
    window.location.href = "mailto:malikolalekana4@gmail.com";
  };
  const handleClick2 = () => {
    window.open("https://www.linkedin.com/in/ajani-malik-olalekan/", "_blank");
  };
  const handleClick3 = () => {
    window.open("https://github.com/ajani-m1704425", "_blank");
  };

  return (
    <nav  className={color ? nav.navbarbg : nav.navbar}>
      <div className={nav.left}>
        <span className={nav.logo}>
          <MdTagFaces color=" #ffc800" />
          <span />
          Malik
        </span>

        <ul className={nav.c2}>
          <Link to='#' smooth>Home</Link>
          {/* Add an onClick event handler that calls the scrollToSection function */}
          <Link to='#projects' smooth>Projects</Link>
          <Link to='#' smooth>About</Link>
          
        </ul>
      </div>

      <div className={nav.right}>
        <div className={nav.c3}>
          <div className={nav.r_icons}>
            <span onClick={handleClick1}>
              <AiFillMail size={25} />
            </span>
            <span onClick={handleClick2}>
              <BsLinkedin />
            </span>
            <span onClick={handleClick3}>
              <BsGithub />
            </span>
          </div>
        </div>
      </div>
      {/*hamburber*/}
      <div onClick={() => setActive(!active)} className={nav.wrapper}>
        <div className={active ? nav.activeHamburger : nav.hamburger} />
      </div>
    </nav>
  );
}

export default Navbar;
