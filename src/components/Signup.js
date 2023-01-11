import React from 'react'
import './css/singup.css';
import {RiTruckLine} from 'react-icons/ri';
import {SlEarphonesAlt} from 'react-icons/sl';
import {FaSalesforce} from 'react-icons/fa';
// import {MdOutlineEmail} from 'react-icons/md'

const Signup = () => {
  return (
    <div className='mainsignup'>
      <div className='sign'>
        <h2 style={{marginTop:'3em'}}>SIGN UP FOR NEWSLETTER</h2>
        <p>Subscrible to our newsletter and be the first to know about special offers</p>
        <div class="input-group">
          <input type="email" className="input" id="Email" name="Email" placeholder=" Your email address"/>
            <input className="button--submit" value="Subscribe" type="submit"/>
            </div>
        </div>
        <div className='services'>
          <div className='sitems'>
            <RiTruckLine className='icon'/>
            <div className='sitem'>
            <h3>FREE SHIPPING</h3>
            <p>For All Orders Over $220</p>
            </div>
          </div>
          <div className='sitems'>
          <RiTruckLine className='icon'/>
            <div className='sitem'>
            <h3>30 DAYS RETURN</h3>
            <p>Money Back Guarantee</p>
            </div>
          </div>
          <div className='sitems'>
          <SlEarphonesAlt className='icon'/>
            <div className='sitem'>
            <h3>ONLIE SUPPORT</h3>
            <p>Free support 24/7 Per Week</p>
            </div>
          </div>
          <div className='sitems'>
          <FaSalesforce className='icon'/>
            <div className='sitem'>
            <h3>PROMOTIONS</h3>
            <p>10% Member Discount</p>
            </div>
          </div>
        </div>
      </div>
      )
}

      export default Signup
