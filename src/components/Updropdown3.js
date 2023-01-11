import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {UpDropdown3} from './Navitems'
import './css/updropdown.css';

const Updropdown3 = () => {
    const [dropdown, setDropdown] = useState(false);
  return (
    <>
    <ul
      className={dropdown ? "services-upsubmenu clicked" : "services-upsubmenu"}
      onClick={() => setDropdown(!dropdown)}
    >
      {UpDropdown3.map((item) => {
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

export default Updropdown3
