import React, { useState } from "react";
import './css/navbar.css'
import logo from './images/logo.png';
import {FaSearch, FaShoppingCart} from 'react-icons/fa';
import Dropdown from './Dropdown';
import Dropdown2 from "./Dropdown1";
import Dropdown4 from "./Dropdown4";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);
    const [dropdown5, setDropdown5] = useState(false);
    // const [dropdown6, setDropdown6] = useState(false);

    const mystyle1 = {
        onmouseenter: "scaley(1.2)",
        onmouseleave: "dropdown"
    };

  return (
    <div className='mainnavbar'>
        <div>
            <img src={logo} alt="img not found" className='logo' />
        </div>
        <div>
            <ul className='navlist'>
                <li className='navitem'  >
                <Link to="/" style={{mystyle1, textDecoration: 'none',listStyle:'none' ,color:'red'}}>HOME</Link>
                  {/* {dropdown && <Dropdown />}                     */}
                  <hr style={{borderColor:'#e8541e' , backgroundColor:'#e8541e' , position:'relative' , top:'.71em' , left:'.5em', width:'65%', height:'-.2em'}} />
                </li >
                <li className='navitem' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)} >
                    <Link to="/Layoute" style={{ textDecoration: 'none',listStyle:'none' ,color:'#545454' }}> <span>LAYOUTS <hr className="line" /> </span> </Link>
                  {dropdown && <Dropdown />} 
                    </li>
                <li className='navitem'  onMouseEnter={() => setDropdown2(true)} onMouseLeave={() => setDropdown2(false)}>
                    <Link to="/Features" style={{ textDecoration: 'none',listStyle:'none' ,color:'#545454' }}> <span>FEATURES <hr className="line" /> </span> </Link>
                  {dropdown2 && <Dropdown2 />} 
                    </li>
                <li  className='navitem'  onMouseEnter={() => setDropdown4(true)} onMouseLeave={() => setDropdown4(false)}>
                     <Link to="/Shop" style={{ textDecoration: 'none',listStyle:'none' ,color:'#545454' }} > <span>SHOP <hr className="line" /></span> </Link>
                  {dropdown4 && <Dropdown4 />} 
                    </li>
                <li className='navitem' onMouseEnter={() => setDropdown5(true)} onMouseLeave={() => setDropdown5(false)}>
                     <Link to="/Pages" style={{ textDecoration: 'none',listStyle:'none' ,color:'#545454' }} > <span>PAGES <hr className="line" /></span> </Link>
                  {dropdown5 && <Dropdown />} 
                    </li>
                <li className='navitem' >
                     <Link to="/Blogp" style={{ textDecoration: 'none',listStyle:'none',color:'#545454' }}> <span>BLOG <hr className="line" /></span> </Link>
                  {/* {dropdown6 && <Dropdown4 />} ==  className='navitem' onMouseEnter={() => setDropdown6(true)} onMouseLeave={() => setDropdown6(false)} */}
                    </li>
            </ul>
        </div>
        <div className='mainsearch'>
            <FaSearch/>          
            <FaShoppingCart/>
        </div>
      
    </div>
  )
}

export default Navbar
