import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { intrests } from "../constants";
import "./Intrest.scss";

const Intrest = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`rounded-2xl ${styles.padding}`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>About:Me</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center p-6 ${styles.paddingX} gap-7`}>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {intrests.map((intrest) => (
            <li className='text-white-100 text-[15px] pl-1' key={intrest.title}>{intrest.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionWrapper(Intrest, "");