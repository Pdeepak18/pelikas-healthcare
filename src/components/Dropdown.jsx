import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

export default function Dropdown() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
 


  return (
    <div className="drop-class">
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu  clicked" : "dropdown-menu"}
        
      >
        {MenuItems.map((item, index) => {
          return (
            <Link to={item.path} >
              <li key={index} className="p-2 ">
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
