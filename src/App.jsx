import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";
function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // on viewport animations
    gsap.to("#lineProject", {
      scrollTrigger: "#lineProject",
      width: "200px",
      duration: 2,
    });
    gsap.utils.toArray(".project2-win").forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
        },
        marginTop: "100px",
        opacity: "1",
        duration: 0.3,
      });
    });
    gsap.to(".contactCard", {
      scrollTrigger: ".contact",
      top: "0%",
      opacity: 1,
      duration: 0.5,
    });
  }, []);
  useEffect(() => {
    // about delay after 2 sec
    const timeline = gsap.timeline();

    let a = document.querySelectorAll('#sections > div');
    let b = document.querySelectorAll("#about > h1");
    let c = document.querySelectorAll("#about > p");
    let d = document.querySelectorAll("#about > a");
    let e = document.getElementById("linkedinfixed");
    let CombinedList = [...a,...b,...c,...d,e];
    setTimeout(() => {
      document.body.style.overflow = "auto"; // Restores default scrolling behavior

      const setVhUnit = () => {
        document.documentElement.style.setProperty(
          "--vw",
          `${document.documentElement.clientWidth}px`
        );
      };
  
      setVhUnit();
      window.addEventListener("resize", setVhUnit);
      gsap.utils.toArray(CombinedList).forEach((element, index) => {
        timeline.to(
          element,
          {
            top: element.id == "linkedinfixed" ? "" : "0px",
            opacity: (element.id == "hi-text" || element.id == "about-para")   ? 0.8 : 1,
            duration: 0.5,
          },
          index * 0.2 // stagger time
        );
      });
    }, 2000);
  }, []);
  useEffect(() => {
    const setVhUnit = () => {
      document.documentElement.style.setProperty(
        "--vw",
        `${document.documentElement.clientWidth}px`
      );
    };

    setVhUnit();
    window.addEventListener("resize", setVhUnit);
    const header = document.getElementById("Header");

    let maxScrollY = 0;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const threshold = 100;
      if (scrollY > 50) {
        if (maxScrollY < scrollY) {
          header.classList.add("hidden");
        } else {
          header.classList.remove("hidden");
        }
        maxScrollY = scrollY;
      }
      if (scrollY >= 627) {
        document.getElementById("gitfixed").style.opacity = 1;
      }
      if (scrollY + window.innerHeight >= document.documentElement.scrollHeight-200) {
        document.getElementById("mailfixed").style.opacity = 1;
      }
    });
  }, []);
  setTimeout(() => {

    document.getElementById("logoPage").style.transition = "all 0.4s";
    document.getElementById("logoPage").style.scale = 0;
    document.getElementById("logoPage").style.opacity = 0;
    document.getElementById("Header").style.opacity = 1;

    /*document.getElementById("bt-resume").style.opacity = 1;
    document.getElementById("linkedinfixed").style.opacity = 1;
      for (let i = 0; i < 3; i++) {
      document.querySelectorAll("#sections > div")[
        i
      ].style.transition = `all 0.4s 0.${i}s`;
      document.querySelectorAll("#sections > div")[i].style.top = "0px";
      document.querySelectorAll("#about > h1")[
        i
      ].style.transition = `all 0.4s 0.${i}s`;
      document.querySelectorAll("#about > h1 ")[i].style.opacity = 1;
    } */
  }, 2000);

  //make a seprate loop for about > h1 elements

  setTimeout(() => {
    document.getElementById("line").style.height = "20%";
    document.getElementById("arrow").style.opacity = 1;
  }, 2500);
  return (
    <>
      <div id="line"></div>
      <div id="linkedinfixed">
        <a href="https://www.linkedin.com/in/rehman-sha-17a284164/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin"
          >
            <title>LinkedIn</title>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
      <div id="gitfixed">
        <a href="https://github.com/rehmansha1" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
      <div id="mailfixed">
        <a href="mailto:rehmansha825@gmail.com" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
          </svg>
        </a>
      </div>
      <div id="logoPage">
        <svg
          className="square"
          xmlns="http://www.w3.org/2000/svg"
          height="240px"
          viewBox="0 -960 960 960"
          width="240px"
          fill="transparent"
        >
          <path
            className="path"
            stroke="white"
            strokeWidth="15"
            stroke-linejoin="round"
            d="M287-146 94-480l193-334h386l193 334-193 334H287Z"
          />
        </svg>
        <div id="innerSquare">R</div>
      </div>
      <div id="Header">
        <div id="logo-outer" onClick={() => window.location.reload()}>
          <svg
            id="logo"
            class="square"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="transparent"
          >
            <path
              class="path"
              stroke="white"
              stroke-width="15"
              stroke-linejoin="round"
              d="M287-146 94-480l193-334h386l193 334-193 334H287Z"
            ></path>
          </svg>
          <div id="logo-symbol">R</div>
        </div>
        <div id="sections">
          <div>
            <a href="#about-outer">01. About</a>
          </div>
          <div>
            <a href="#projects" id="project-go">
              02. Projects
            </a>
          </div>
          <div>
            <a href="#contactSection">03. Contact</a>
          </div>
        </div>
      </div>
      <div>
        <div id="about-outer">
          <div id="about">
            <h1 id="hi-text">Hi, I'm</h1>
            <h1 id="about-name">Rehman.</h1>
            <h1 id="buildthings">I build things for the web.</h1>
            <p id="about-para">
              I’m a web developer with expertise in MERN. I specialize in
              creating dynamic, user-friendly web applications with seamless
              functionality. I’m always eager to learn new technologies and
              enhance my skills to build innovative solutions.
            </p>
            <a id="bt-resume" href="https://drive.google.com/file/d/1Rcv6LpYROol6xwswl9xv4uVmsqraSf_z/view?usp=drive_link" target="_blank">Resume</a>
          </div>
        </div>
        <svg
          id="arrow"
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
        </svg>
      </div>
      <div id="projects">
        <div>
          <div className="projectHeader" id="projectSection">
            <div>02.</div>
            <div>Some things I've Built</div>
            <div id="lineProject"></div>
          </div>

          <div className="project2-win">
            <div className="type-Project">Most Recent</div>
            <h1 className="name-project">File Compression Tool</h1>
            <p className="para-project">
              {" "}
              A file Compression tool made with huffman coding algorith. A
              lightweight, efficient, and easy-to-use file compression utility
              leveraging the Huffman Coding algorithm to reduce file sizes.
            </p>
            <div className="stack-project">
              <div>Javascript</div>
              <div>React</div>
            </div>
            <div className="git-project">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              </a>
              <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              </a>
            </div>
          </div>
          <div className="project2-win">
            <div className="type-Project">Featured Project</div>
            <h1 className="name-project">My Movie List</h1>
            <p className="para-project">
              Bulit a movie/series viewing webiste, allows users to make their
              own watchlist and look up their favorite tv shows/movies, much
              like letterbox.
            </p>
            <div className="stack-project">
              <div>Javascript</div>
              <div>React</div>
              <div>Redux</div>
              <div>Express</div>
              <div>Node</div>
              <div>Mongodb</div>
            </div>
            <div className="git-project">
            <a href="https://github.com/rehmansha1/MyMovieList" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              </a>
              <a href="https://mymovielist-mkra.onrender.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              </a>
            </div>
          </div>
          <div className="project2-win">
            <div className="type-Project">Featured Project</div>
            <h1 className="name-project">File Sharing Application</h1>
            <p className="para-project">
              Built a modern file sharing platform for seamless, secure
              collaboration. Share files effortlessly, ensuring privacy and
              efficiency
            </p>
            <div className="stack-project">
              <div>Javascript</div>
              <div>React</div>
              <div>Express</div>
              <div>Node</div>
              <div>Mongodb</div>
            </div>
            <div className="git-project">
              
              <a href="https://github.com/rehmansha1/File-Sharing-site" target="_blank"><svg 

                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              </a>
              <a href="https://file-sharing-site-8t90.onrender.com/" target="_blabk"><svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              </a>
            </div>
          </div>
          <div className="project2-win">
            <div className="type-Project">Featured Project</div>
            <h1 className="name-project">PriceChecker</h1>
            <p className="para-project">
              Built a pricechecking website that scrapes product prices from
              various online stores. Allowing users to make well-informed
              purchasing decisions. It also keeps up with up-to-date pricing
              information.
            </p>
            <div className="stack-project">
              <div>Javascript</div>
              <div>React</div>
              <div>Puppeteer</div>
              <div>Express</div>
              <div>Node</div>
            </div>
            <div className="git-project">
              <a href="https://github.com/rehmansha1/PriceChecker" target="_blank"><svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              </a>
   
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contactSection">
        <div className="contactCard">
          <div className="title-contact">
            <div>03.</div> <div>Whats next?</div>
          </div>
          <h1 className="get-in-touch">Get In Touch</h1>
          <p className="p-contact">
            Get in touch! I'm excited to explore new opportunities and
            collaborations. Whether you have a potential project, question, or
            just want to connect, I'd love to hear from you. Let's start a
            conversation!
          </p>
          <a id="bt-hello" href="mailto:rehmansha825@gmail.com">
            Say Hello
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
