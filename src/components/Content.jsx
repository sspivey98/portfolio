import { React, useState } from "react";
import "./Content.scss";
import { AiOutlineHome,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import {BsPersonWorkspace} from "react-icons/bs"

const Content = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
      <div className="nav">        
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <AiOutlineFundProjectionScreen />
        </a>
        <a
          href="#education"
          onClick={() => setActiveNav("#education")}
          className={activeNav === "#education" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BsPersonWorkspace />
        </a>
        <a
          href="#intrest"
          onClick={() => setActiveNav("#intrest")}
          className={activeNav === "#intrest" ? "active" : ""}
        >
          <MdMessage />
        </a>
      </div>
    );
  };

export default Content