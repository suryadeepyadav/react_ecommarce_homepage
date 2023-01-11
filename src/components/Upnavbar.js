import React from 'react'
import './css/upnavbar.css';
import {BsCurrencyDollar} from 'react-icons/bs';
import {BsHeartFill} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import {FaFlagUsa} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Updropdown from './Updropdown';
import Updropdown2 from './Updropdown2';
import Updropdown3 from './Updropdown3';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Upnavbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  return (
    <div className='upnavbar'>
      <div className='leftside'>
        <p>Hotline : +123 456 78900</p>
        <p style={{borderLeft:'1px solid #999',marginLeft:'1em'}}>Welcome to Sport Store !</p>
      </div>
      <div className='rightside'>
        <p className='navitem' onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}> <BsCurrencyDollar style={{position:'relative' , top:'.1em', right:'-.1em'}}/>
        <Link to="/Layoute" style={{ textDecoration: 'none',listStyle:'none' ,color:'#545454' }}> <span>Us Dollar</span> </Link>
        {dropdown && <Updropdown />}
         </p>
        <p className='navitem' onMouseEnter={() => setDropdown2(true)} onMouseLeave={() => setDropdown2(false)}> <FaFlagUsa style={{position:'relative' , top:'.2em', right:'.2em'}}/>
        <Link to="/Layoute" style={{ textDecoration: 'none',listStyle:'none' ,color:'#545454' }}><span>Us English</span></Link>
        {dropdown2 && <Updropdown2 />}
         </p>        
        <p className='navitem' onMouseEnter={() => setDropdown3(true)} onMouseLeave={() => setDropdown3(false)}> <FaUserAlt style={{position:'relative' , top:'.1em', right:'.2em'}}/> 
        <Link to="/Layoute" style={{ textDecoration: 'none',listStyle:'none' ,color:'#545454' }}> <span>My Account</span></Link>
        {dropdown3 && <Updropdown3 />}
        </p>
        <p> <BsHeartFill style={{position:'relative' , top:'.2em', right:'.4em'}}/>My Wishlist(0)</p>
        

      </div>
    </div>
  )
}

export default Upnavbar
