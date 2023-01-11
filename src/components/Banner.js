import React from 'react'
import './css/banner.css'
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';
import banner5 from './images/banner5.jpg';
import banner6 from './images/banner6.jpg';
import banner7 from './images/banner7.jpg';

const Banner = (props) => {
  return (
    <div className='mainbanner'>
        <div className='bannerhav1'>
            <img src={banner1} alt="img not found" className='bimage' />
        </div>
        <div className='bannerhav1'>
        <img src={banner2} alt="img not found" className='bimage' />
        </div>
        <div className='bannerhav1'>
        <img src={banner3} alt="img not found" className='bimage' />
        </div>
      

    </div>
  )
}

export default Banner


export const Banner2 = (props) => {
  return (
    <div className='banner2'>
        <div className='bannerhav'>
          {/* <div className='animate'></div> */}
            <img src={props.bimage} alt="img not found" className='bimage2' />
            {/* <div className='animate'></div> */}
        </div>
      
      

    </div>
  )
}

export const Banner3 = (props) => {
  return (
    <div className='banner3'>
        <div className='bannerhav3'>
            <img src={banner5} alt="img not found" className='bimage3' id='b3img1' />
        </div>
        <div className='bannerhav3'>
            <img src={banner6} alt="img not found" className='bimage3' id='b3img2' />
        </div>
           

    </div>
  )
}

export const Banner7 = () => {
  return (
    <div className='banner7'>
        <div className='bannerhav'>
            <img src={banner7} alt="img not found" className='bimage7' />
        </div>
      
      

    </div>
  )
}
