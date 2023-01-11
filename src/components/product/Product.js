import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BsFillHeartFill } from 'react-icons/bs';
import {AiFillEye} from 'react-icons/ai';
import './product.css';
import pimage1 from '../images/shoo1.png';
import pimage2 from '../images/shoo2.png';
import pimage3 from '../images/shoo3.png';
import pimage4 from '../images/shoo4.png';
import pimage5 from '../images/golf4.png';
import pimage6 from '../images/jacketred2.png';
// import pimage7 from '../images/bag1.jpg';

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
      id="prev1"
      className={className}
      style={{ ...style, display: "flex", background: "gray", padding: '2em 1.5em', borderRadius: '50%', color: 'pink' }}
      onClick={onClick}
    />
  );
}

const Product = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  //useState
  const [products, setProducts] = useState(false);
  const [product1, setProduct1] = useState(false);
  const [product2, setProduct2] = useState(false);
  const [product3, setProduct3] = useState(false);
  const [product4, setProduct4] = useState(false);
  const [product5, setProduct5] = useState(false);

  // method setproducts
  const setProductsMethod = () => {
    setProducts(!products);
  }
  // method setproduct2
  const setProduct2Method = () => {
    setProduct2(!product2);
  }
  // method setproduct3
  const setProduct3Method = () => {
    setProduct3(!product3);
  }
  // method setproduct4
  const setProduct4Method = () => {
    setProduct4(!product4);
  }
  // method setproduct5
  const setProduct5Method = () => {
    setProduct5(!product5);
  }
  // method setproduct1
  const setProduct1Method = () => {
    setProduct1(!product1);
  }



  return (
    <div className="mainproduct">
      <Slider {...settings}>
        <div className="product" onMouseEnter={() => setProduct1Method()} onMouseLeave={() => setProduct1Method()}>
          { product1 ? <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em' ,animation:'fadeMe 2s linear'}}/></span> : null }
          {product1 ? <img src={pimage1} alt="" id="bagimg" /> :<img src={pimage3} alt="" />}
          <div className="products">
            <h4>Jalapeno dolore</h4>
            <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$102.00</p>
            <div style={{ display: 'flex', color:'gray' }} >
            {product1 ?  <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%',marginRight:'.5em', transition:'all 0.2s ease-in'}} className="pbtnfc"> <BsFillHeartFill style={{ border: '1px slid green',position:'relative', top:'.2em' }} /> </span>: " "}
              
              <button> <FaShoppingCart style={{ marginRight: '.4em', position: 'relative', top: '.1em' }} />ADD TO CART</button>
              {product1 ? <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%', marginLeft:'.5em'}} className="pbtnfc"> <AiOutlineBarChart style={{ border: '1px slid green' }} /> </span> : " "}
            </div>

          </div>
        </div>
        <div className="product" onMouseEnter={() => setProductsMethod()} onMouseLeave={() => setProductsMethod()}>
        { products ?  <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em',transition: 'opacity 1s linear'}}/></span> : null }
          {products ? <img src={pimage2} alt="" /> : <img src={pimage4} alt="" />}
          <div className="products">
            <h4>Hofficia chicken</h4>
            <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$100</p>
            <div style={{ display: 'flex', color:'gray' }}>
            {products ?  <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%',marginRight:'.5em'}} className="pbtnfc"> <BsFillHeartFill style={{ border: '1px slid green',position:'relative', top:'.2em' }} /> </span>: " "}
              
              <button> <FaShoppingCart style={{ marginRight: '.4em', position: 'relative', top: '.1em' }} />ADD TO CART</button>
              {products ? <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%', marginLeft:'.5em'}} className="pbtnfc"> <AiOutlineBarChart style={{ border: '1px slid green' }} /> </span> : " "}
            </div>
          </div>
        </div>
        <div className="product" onMouseEnter={() => setProduct2Method()}  onMouseLeave={() => setProduct2Method()}>
        { product2 ?  <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em'}}/></span> : null }
          {product2 ? <img src={pimage3} alt="" /> : <img src={pimage2} alt="" />}
          <div className="products">
            <h4>Inicididunt picanha</h4>
            <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$100</p>
            <div style={{ display: 'flex', color:'gray' }}>
            {product2 ?  <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%',marginRight:'.5em'}} className="pbtnfc"> <BsFillHeartFill style={{ border: '1px slid green',position:'relative', top:'.2em' }} /> </span>: " "}
              
              <button> <FaShoppingCart style={{ marginRight: '.4em', position: 'relative', top: '.1em' }} />ADD TO CART</button>
              {product2 ? <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%', marginLeft:'.5em'}} className="pbtnfc"> <AiOutlineBarChart style={{ border: '1px slid green' }} /> </span> : " "}
            </div>
          </div>
        </div>
        <div className="product" onMouseEnter={() => setProduct3Method()} onMouseLeave={() => setProduct3Method()}>
        { product3 ?  <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em'}}/></span> : null }
          {product3 ? <img src={pimage4} alt="" /> : <img src={pimage3} alt="" />}
          <div className="products">
            <h4>Lastrami deserunt</h4>
            <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$56.00</p>
            <div style={{ display: 'flex', color:'gray' }}>
            {product3 ?  <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%',marginRight:'.5em'}} className="pbtnfc"> <BsFillHeartFill style={{ border: '1px slid green',position:'relative', top:'.2em' }} /> </span>: " "}
              
              <button> <FaShoppingCart style={{ marginRight: '.4em', position: 'relative', top: '.1em' }} />ADD TO CART</button>
              {product3 ? <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%', marginLeft:'.5em'}} className="pbtnfc"> <AiOutlineBarChart style={{ border: '1px slid green' }} /> </span> : " "}
            </div>
          </div>
        </div>
        <div className="product" onMouseEnter={() => setProduct4Method()} onMouseLeave={() => setProduct4Method()}>
        { product4 ?  <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em'}}/></span> : null }
          {product4 ? <img src={pimage2} alt="" /> : <img src={pimage5} alt="" />}
          <div className="products">
            <h4>Drutick lanaeger</h4>
            <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$100</p>
            <div style={{ display: 'flex', color:'gray' }}>
            {product4 ?  <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%',marginRight:'.5em'}} className="pbtnfc"> <BsFillHeartFill style={{ border: '1px slid green',position:'relative', top:'.2em' }} /> </span>: " "}
              
              <button> <FaShoppingCart style={{ marginRight: '.4em', position: 'relative', top: '.1em' }} />ADD TO CART</button>
              {product4 ? <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%', marginLeft:'.5em'}} className="pbtnfc"> <AiOutlineBarChart style={{ border: '1px slid green' }} /> </span> : " "}
            </div>
          </div>
        </div>
        <div className="product" onMouseEnter={() => setProduct5Method()} onMouseLeave={() => setProduct5Method()}>
        { product5 ?  <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em'}}/></span> : null }
          {product5 ? <img src={pimage6} alt="" /> : <img src={pimage1} alt="" />}
          <div className="products">
            <h4>Incididunt picanha</h4>
            <p style={{marginTop:'-.51em',fontSize:'1.1em'}} >$100</p>
            <div style={{ display: 'flex', color:'gray' }}>
            {product5 ?  <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%',marginRight:'.5em'}} className="pbtnfc"> <BsFillHeartFill style={{ border: '1px slid green',position:'relative', top:'.2em' }} /> </span>: " "}
              
              <button> <FaShoppingCart style={{ marginRight: '.4em', position: 'relative', top: '.1em' }} />ADD TO CART</button>
              {product5 ? <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%', marginLeft:'.5em'}} className="pbtnfc"> <AiOutlineBarChart style={{ border: '1px slid green' }} /> </span> : " "}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Product
