import React from "react";
import h from "./home.module.scss";
import { FaReact, FaSass, FaGitAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsArrowRightShort } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiFillMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { Projects } from "./Data";
import profile from "./pic.png";

function Home() {
  const handleClick1 = () => {
    window.open("https://twitter.com/Chris_devxo", "_blank");
  };
  const handleClick2 = () => {
    window.location.href = "mailto:chrisidoko0017@gmail.com";
  };
  const handleClick3 = () => {
    window.open("https://www.linkedin.com/in/chris-idoko-56907b207/", "_blank");
  };
  const handleClick4 = () => {
    window.open("https://github.com/Chrisidoko", "_blank");
  };

  return (
    <>
      <div className={h.body}>
        <div className={h.hero}>
          <span className={h.hero_flex}>
            <div className={h.c1}>
              <span className={h.t1}>I'm</span>
              <span className={h.t2}>Chris Onoja</span>
              <span className={h.line} />
              <span className={h.t3}>
                A frontend developer with experience in building modern,
                responsive web applications using React. I am proficient in
                using React hooks, libraries and functional components to build
                scalable and maintainable user interfaces. Lets build
                high-quality, user-friendly products together.
              </span>
              <span className={h.t4}>
                Contact Me <BsArrowRightShort size={20} />
              </span>
              <div className={h.icons}>
                <span onClick={handleClick1} className={h.icon}>
                  <AiOutlineTwitter color="#ffc800" />
                </span>
                <span onClick={handleClick2} className={h.icon}>
                  <AiFillMail color="#ffc800" />
                </span>
                <span onClick={handleClick3} className={h.icon}>
                  <AiFillLinkedin color="#ffc800" />
                </span>
                <span onClick={handleClick4} className={h.icon}>
                  <AiFillGithub color="#ffc800" />
                </span>
              </div>
            </div>

            <div className={h.c2}>
              <div
                className={h.photo}
                style={{ backgroundImage: `url(${profile})` }}
              />
            </div>
          </span>
        </div>
        <div className={h.mflex}>
          <div className={h.mid}>
            <span className={h.child}>
              <div className={h.inner}>
                <FaReact color="#24b4fb" size={28} />
                <span />
                React
              </div>
            </span>
            <span className={h.child}>
              <div className={h.inner}>
                <SiJavascript color="#ffc800" size={26} />
                <span /> Javascript
              </div>
            </span>
            <span className={h.child}>
              <div className={h.inner}>
                <FaSass color="#f4615a" size={29} />
                <span />
                Sass/Scss
              </div>
            </span>
            <span className={h.child}>
              <div className={h.inner}>
                <FaGitAlt color="#f4615a" size={29} />
                <span /> Git
              </div>
            </span>
          </div>
        </div>
        <div id="projects" className={h.projects}>
          <span className={h.head}>My Projects</span>
          <div className={h.pflex}>
            {Projects.map((val, key) => {
              return (
                <div key={key} className={h.card}>
                  <div
                    className={h.nail}
                    style={{ backgroundImage: `url(${val.Image})` }}
                  ></div>
                  <div className={h.thumb}>
                    <span className={h.text}>{val.title}</span>
                    <span className={h.tag}>Tags</span>
                    <div className={h.tabflex}>
                      <div className={h.tagline}>
                        <span>{val.tag1}</span>
                      </div>
                      <div className={h.tagline}>
                        <span>{val.tag2}</span>
                      </div>
                      <div className={h.tagline}>
                        <span>{val.tag3}</span>
                      </div>
                      <div className={h.tagline}>
                        <span>{val.tag4}</span>
                      </div>
                    </div>
                  </div>
                  <span className={h.m_arrrow}>
                    {" "}
                    <BsArrowRightShort color="#ffc800" size={27} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
