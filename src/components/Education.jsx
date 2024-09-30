import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations, courseList } from "../constants";
import { useState } from "react";
import "./Education.scss";

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='Box2 p-5 rounded-3xl xs:w-[320px] w-full'
  >
      <div className='mt-7 flex flex-col justify-between items-center gap-1'>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          width="80" height="80"
          className='rounded-full object-cover'
        />
        <div className='mt-3 flex-1 flex flex-col'>
          <p className='text-center text-white font-medium text-[16px]'>
            <span className='text-center blue-text-gradient'>{name}</span> 
          </p>
          <p className='text-center mt-1 text-white text-[12px]'>
            {year}
          </p>
        </div>

      </div>

    <p className='text-white font-black text-[48px]'></p> <br />

    <div className='mt-1'>
      <p className='text-center text-white tracking-wider text-[18px]'>{degree}</p>
      <p className='mt-3 text-center pink-text-gradient'>{branch}</p>
      <p className='mt-3 text-center green-text-gradient'>{marks}</p>

    </div>
  </motion.div>
);

const ListCourses = ({number, name}) => (
  <p>
    <span className='text-green-400'>{number}: </span>
    <span>{name}</span>
  </p>
)

const Education = () => {
  const [toggleHide, setToggleHide] = useState(false);
  const [buttonText, setButtonText] = useState("See courses...")
  function handleClick() {
    if (!toggleHide) {
      setButtonText("Show less")
    } else {
      setButtonText("See courses...")
    }
    setToggleHide(!toggleHide);
  };

  return (
    <div className={`mt-12 bg-secondary rounded-[20px]`}>
      <div
        className={`bg-black-100 rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Education</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
      <div className={`justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          <button className='HideOrShowButton ' onClick={() => handleClick()}>{buttonText}</button>
      </div>
      {toggleHide && <div className={`justify-center pb-14 ${styles.paddingX} flex flex-col items-center gap-7`}> 
        {courseList.map((course) => (
          <ListCourses key={course.number} {...course} />
        ))}
      </div>}
    </div>
  );
};

export default SectionWrapper(Education, "education");