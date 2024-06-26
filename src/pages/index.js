import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import project1 from "../public/project1.png";
import web1 from "../public/web1.png";
import project2 from "../public/project2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {useRef, useEffect} from 'react';
import { useInView } from "react-intersection-observer";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true); 
  const isBrowser = () => typeof window !== "undefined"

useEffect(()=>{window.addEventListener('scroll', reveal);}, []);
  


  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i< reveals.length; i++){
      var windowheight =window.innerHeight;
      var reveal = reveals[i].getBoundingClientRect().top;
      var revealpoint = 50;
      if(reveal < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }

  function scroll(){
    const yOffset = 150;
    var element = document.getElementById("#scroll");
    const y = element.getBoundingClientRect().top + window.pageYOffset+yOffset;
    window.scrollTo({top:y, behavior:'smooth'})
    // element.scrollIntoView({behavior:"smooth"});
  };
  


  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Hruthik Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedby</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  target="_blank" href="https://drive.google.com/file/d/11zjS4LKWCnU5m7V3JWfSE8D7R53l1ybl/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <section className="hruthik">
              <section>
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Hruthik
            </h2>
            </section>
            </section>
            <section>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            </section>
            <section>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            </section>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/hruthik_shetty" target="_blank"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/hruthik-shetty-3983b41aa/" target="_blank"><AiFillLinkedin /></a>
              <a href="https://www.instagram.com/hruthikshetty/" target="_blank"><AiFillInstagram /></a>
            </div>
            <section class="arrow">
            <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full relative overflow-hidden mx-auto mt-20">
              <button  id="#scroll"><svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" onClick={scroll}>
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></button>  
            </div>
            </section>
            <section class="reveal">
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
            </section>
          </div>
        </section>
        <section>
          <div>
            <section class="reveal">
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            </section>
            <section class="reveal">
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            </section>
            <section class="reveal">
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
            </section>
          </div>
          <div class="reveal">
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-black flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white ">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white ">
                Code your dream project
              </h3>
              <p className="py-2 dark:text-white ">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-black flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white ">Consulting</h3>
              <p className="py-2 dark:text-white ">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Indesign</p>
            </div>
          </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <section class="reveal"><h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3></section>
            <div class="reveal">
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            </div>
            <section class="reveal">
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
            </section>
          </div>
          <section class="reveal">
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div>
          <section class="reveal"><h3 className="text-3xl py-1 dark:text-white ">Projects</h3></section>
          </div>
            <a href="https://websitep1.netlify.app/" target="_blank">
              <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project1}
              />
            </div>
            </a>
            
            <a href="https://novels-decentralised.vercel.app/" target="_blank">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={project2}
              />
            </div>
            </a>

            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
          </section>
        </section>
      </main>
    </div>
  );
}
