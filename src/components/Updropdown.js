import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {UpDropdown1} from './Navitems'
import './css/updropdown.css';

const Updropdown = () => {
    const [dropdown, setDropdown] = useState(false);
  return (
       <>
      <ul
        className={dropdown ? "services-upsubmenu clicked" : "services-upsubmenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {UpDropdown1.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default Updropdown
