import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineBarChart} from 'react-icons/ai';
import {BsFillHeartFill} from 'react-icons/bs';
import {AiFillEye} from 'react-icons/ai';
import './product.css';
import pimage1 from '../images/cycle1.jpg';
import pimage2 from '../images/cycle2.jpg';
import pimage3 from '../images/cycle3jpg.jpg';
import pimage4 from '../images/cycle4.jpg';
import pimage5 from '../images/cycle5.jpg';
import pimage6 from '../images/cycle4.jpg';

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
  

const Pbikes = () => {
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
      { product1 ?  <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em'}}/></span> : null }
      {product1 ? <img src={pimage4} alt="" id="bagimg" /> : <img src={pimage1} alt="" />}
        <div  className="products">
          <h4>Consectetur quischuck</h4>
          <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$61.00</p>
          <div style={{ display: 'flex', color:'gray' }}>
            {product1 ?  <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%',marginRight:'.5em'}} className="pbtnfc"> <BsFillHeartFill style={{ border: '1px slid green',position:'relative', top:'.2em' }} /> </span>: " "}
              
              <button> <FaShoppingCart style={{ marginRight: '.4em', position: 'relative', top: '.1em' }} />ADD TO CART</button>
              {product1 ? <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%', marginLeft:'.5em'}} className="pbtnfc"> <AiOutlineBarChart style={{ border: '1px slid green' }} /> </span> : " "}
            </div>

          
        </div>
      </div>
      <div className="product" onMouseEnter={() => setProductsMethod()} onMouseLeave={() => setProductsMethod()}>
      { products ?  <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em'}}/></span> : null }
      {products ? <img src={pimage3} alt="" /> : <img src={pimage2} alt="" />}
        <div  className="products">
          <h4>Doinpuis consuat</h4>
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
        <div  className="products">
          <h4>Chicken swinesha</h4>
          <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$156.00</p>
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
        <div  className="products">
          <h4>Cenison meatloa</h4>
          <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$56.00</p>
          <div style={{ display: 'flex', color:'gray' }}>
            {product3 ?  <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%',marginRight:'.5em'}} className="pbtnfc"> <BsFillHeartFill style={{ border: '1px slid green',position:'relative', top:'.2em' }} /> </span>: " "}
              
              <button> <FaShoppingCart style={{ marginRight: '.4em', position: 'relative', top: '.1em' }} />ADD TO CART</button>
              {product3 ? <span style={{border:'1px solid gray', padding:'.51em .69em' , borderRadius:'50%', marginLeft:'.5em'}} className="pbtnfc"> <AiOutlineBarChart style={{ border: '1px slid green' }} /> </span> : " "}
            </div>
        </div>
      </div>
      <div className="product"  onMouseEnter={() => setProduct4Method()} onMouseLeave={() => setProduct4Method()}>
      { product4 ?  <span className="eyeicon"><AiFillEye style={{position:'absolute', top:'.7em',left:'.7em'}}/></span> : null }
      {product4 ? <img src={pimage2} alt="" /> : <img src={pimage5} alt="" />}
        <div  className="products">
          <h4>Balltip nullaelit</h4>
          <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$65.00</p>
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
        <div  className="products">
          <h4>Benderloin officia</h4>
          <p style={{marginTop:'-.51em',fontSize:'1.1em'}}>$36.00</p>
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

export default Pbikes
