import React from "react";
import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </motion.div>
    <div className='my-skills'>
      {profiles.map((profile) => (
        <div className="skill" data-aos="fade-up" data-aos-delay="200" key={profile.name}>
        <div className="icon-container" key={profile.name}>
          <img src={profile.icon} alt={profile.name} />
        </div>
      </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Profile, "");