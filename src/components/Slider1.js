import React from 'react';
import './css/slider1.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from './images/slider1.jpg';
import bg2 from './images/slider2.jpg';
import bg3 from './images/slider3.jpg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "gray", padding: '0 1em', color: 'white', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "gray", padding: '0 1em', borderRadius: '50%', color: 'red' , marginLeft: '12em' ,zIndex: '1000'}}
      onClick={onClick}
    />
  );
}

const Slider1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <div className='mainslider1'>
      <Slider {...settings}>
                    <div>
                        <img src={bg1} alt="img not found" className='bgimage' />
                    </div>
                    <div>
                        <img src={bg2} alt="img not found" className='bgimage' />
                    </div>
                    <div>
                        <img src={bg3} alt="img not found" className='bgimage' />
                    </div>                    
                </Slider>
    </div>
  )
}

export default Slider1
