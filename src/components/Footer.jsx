import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

    return (
        <div className="footer text-center">
        <p className="hover:underline"> 
          <a href="/" target="_blank">
            {" "}
            Website source code
          </a>
        </p>
        <p className="pink-text-gradient hover:underline"><a href="https://shinchancode.github.io/3d-react-portfolio/">forked from</a></p>

      </div>
    );
  };
  
  export default Footer;