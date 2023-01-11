import React from "react";
import Slider from "react-slick";
import logoimg1 from './images/logo1.jpg';
import './css/flogo.css';

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
        style={{ ...style, display: "flex", background: "gray", padding: '0 1em', borderRadius: '50%', color: 'white' }}
        onClick={onClick}
      />
    );
  }
  

const Flogo1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <div className="mainflogo">
      <Slider {...settings}>
      <div className="flogo">
        <img src={logoimg1} alt="" />
      </div>
      <div className="flogo">
        <img src={logoimg1} alt="" />
      </div>
      <div className="flogo">
        <img src={logoimg1} alt="" />
      </div>
      <div className="flogo">
        <img src={logoimg1} alt="" />
      </div>
      <div className="flogo">
        <img src={logoimg1} alt="" />
      </div>
      <div className="flogo">
        <img src={logoimg1} alt="" />
      </div>
    </Slider>
    </div>
  )
}

export default Flogo1
