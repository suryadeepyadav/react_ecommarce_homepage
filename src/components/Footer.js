import React from 'react'
import './css/footer.css';
import {BsFacebook, BsTwitter} from 'react-icons/bs';
import {MdWifiTethering} from 'react-icons/md';
import {IoLogoGoogleplus} from 'react-icons/io';
import {FaPinterest} from 'react-icons/fa';
import {IoIosCall} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {MdLocationOn} from 'react-icons/md';
const Footer = () => {
  return (
    <div className='mainfooter'>
        <div className='fitems'>
        <h3>ABOUT OUR STORE</h3>
        <p style={{display:'flex'}}>
          <IoIosCall style={{position:'relative', top:'.11em',right:'.7em'}}/>
        <span style={{display:'flex',flexDirection:'column',fontSize:'1.3em'}}>
        <p>(098) - 686 - 666888 </p>
        <p style={{marginTop:'.8em'}}>(098) - 686 - 666999</p> 
        </span>

        </p>
        <p> <MdEmail style={{position:'relative', top:'.11em',right:'.7em'}}/> support@sporttheme.com</p>
        <p><MdLocationOn style={{position:'relative', top:'.11em',right:'.8em'}}/> 68 Spring, USA, New York</p>
        <div className='media'>
        <BsFacebook className='ficon'/>
        <BsTwitter className='ficon'/>
        <MdWifiTethering className='ficon'/>
        <IoLogoGoogleplus className='ficon'/>
        <FaPinterest className='ficon'/>

        </div>
        </div>
        <div className='fitems'>
         <h3>MY ACCOUNT</h3>
            <p>Brands</p>
            <p>Gift Certificates</p>
            <p>Affilates</p>
            <p>Specials</p>
            <p>FAQs</p>
        </div>
        <div className='fitems'>
         <h3>INFORMATION</h3>
         <p>About us</p>
         <p>FAQ</p>
         <p>Warranty And Services</p>
         <p>Support 24/7 page</p>
         <p>Product Registration</p>
        </div>
        <div className='fitems'>
        <h3>SERVICES</h3>
        <p>Contact Us</p>
        <p>Returns</p>
        <p>Support</p>
        <p>Site Map</p>
        <p>Customer Service</p>
        </div>
        <div className='fitems'>
            <h3> YOUR LINKS</h3>
            <p>My Account</p>
            <p>Watch List</p>
            <p>Order Tracking</p>
            <p>Power Banks</p>
            <p>Customer Service</p>
        </div>
      
    </div>
  )
}

export default Footer
