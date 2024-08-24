import React from 'react';
import "./ProjectList.scss";

export default function ProjectList({title,active,setSelected,id}) {
  
    return (
      <li key={id} className={active ? "portfoliolist active" : "portfoliolist"} id="portfoliolist" onClick={() => setSelected(id)}>
        {title}
      </li>
    )
}