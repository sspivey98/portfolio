import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {list} from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { SchoolProject, WorkProject, PersonalProject } from "../constants";
import ProjectList from "./ProjectList";
import "./Project.scss";

function sourceclick(link) {
  if (link != "") {
    window.open(link, "_blank")
  }
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_link,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full'
    >
      <div 
        className='Box1 relative w-full h-[180px]' 
        onClick={() => sourceclick(source_link)}
      >
        <img
          src={image}
          alt='project_image'
          className='image w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-center card-img_hover' style={{alignItems: "center",}}>
          <h3 className='text-black font-bold text-[16px]'>{name}</h3>
        </div>        
      </div>

      <div className='content mt-5'>
        <p className='mt-2 text-white text-[14px]' style={{textAlign:'justify'}}>{description}</p>
      </div>

      <div className='content mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            &gt;{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};
const Project = () => {

  const [selected, setSelected] = useState("school");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "school":
        setData(SchoolProject);
        break;
      case "work":
        setData(WorkProject);
        break;
      case "personal":
        setData(PersonalProject);
        break;

      default:
        setData(SchoolProject);
    }
  }, [selected]);

  return (
    <>
      <h2 className={`${styles.sectionHeadText}`}>Projects</h2>

      <div className='project w-full flex'>
        <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
        </ul>

      <div className='box mt-20 flex flex-wrap justify-center'>
        {data.map((project, index) => (
          <div>
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </div>
        ))}
      </div>
      </div>

    </>
  );
};

export default SectionWrapper(Project, "project");