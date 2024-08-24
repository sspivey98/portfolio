import { styles } from "../styles";
import {init} from 'ityped';
import React , { useEffect , useRef} from "react";
import {AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {ImLinkedin} from "react-icons/im";
import { myself, cloud, car, printing, architecture, presentation, paper, selfhost, android, cobra, } from "../assets";
import { Slide } from 'react-slideshow-image';
import "./Hero.scss";
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  cloud,
  presentation,
  car,
  architecture,
  cobra,
  paper,
  selfhost,
  android, 
  printing,
]

const Hero = () => {

  const textRef=useRef();
  useEffect(()=>
  {
    init(textRef.current, { showCursor: false, strings: [' Distibuted Systems ', " Software Architecture ", " Network Infrastructure ", " Load Balancing ",' Scaling ',] })
  },[]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <div
          className={`head1 absolute  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#00ff99]' />
            <div className='w-1 sm:h-80 h-40 green-pink-gradient' />
          </div>


          <div className="head2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hello, I'm <p className='name text-[#00ff99]'>Simon Spivey</p>
            </h1>

            <h3>
              <span className={`${styles.heroSubText} mt-2 text-white`}>&gt;</span>
              <span ref={textRef} className={`${styles.heroSubText} mt-2 green-text-gradient`}></span>
            </h3>
          
          <div className="absolute link1">        
            <a
              href="https://github.com/sspivey98" target="_blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sspivey98/" target="_blank">
              <ImLinkedin />
            </a>
            <a
              href="mailto:sspivey@cmu.edu">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
      <div className="imgcontainer1 absolute green-pink-gradient">
        <img src={myself} alt="" className="object-contain"/>
      </div>
    </div>

    <div className="slide-container">
          <Slide arrows={false}>
              {slideImages.map((each, index) => (
                <div key={index} className="slide__card">
                  <img className="slideshow__main" src={each}/>
                </div>
              ))} 
          </Slide>
    </div>
  </section>
  );
};

export default Hero;