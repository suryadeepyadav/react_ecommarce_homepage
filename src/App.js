import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// all pages for navigation
import Layoute from './components/pages/Layoute';
import Pages from './components/pages/Pages';
import Features from './components/pages/Features';
import Blogp from './components/pages/Blogp';
import Shop from './components/pages/Shop';
import Home from './components/pages/Home';
// here the end of pages
import Slider1 from './components/Slider1';
import Banner from './components/Banner';
import { Banner2 } from './components/Banner';
import Product from './components/product/Product';
import bimage from './components/images/banner4.jpg';
import fbimg from './components/images/fblogo2.png';
// import {AiFillFacebook} from 'react-icons/ai'
import twimg from './components/images/twlogo.png';
import youimg from './components/images/youlogo.png';
import Pbikes from './components/product/Pbikes';
import { Banner3 } from './components/Banner';
import Pgolf from './components/product/Pgolf';
import { Banner7 } from './components/Banner';
import Blog from './components/Blog';
import Flogo1 from './components/Flogo1';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Upnavbar from './components/Upnavbar';
// import Gototop from './components/Gototop';
import GoToTop from './components/GoToTop';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Upnavbar />
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/contactus" element={<Layoute />}></Route>
          <Route path="/products" element={<Features />}></Route>
          <Route path="/services" element={<Shop />}></Route>
          <Route path="/signup" element={<Pages />}></Route>
          <Route path="/marketing" element={<Blogp />}></Route>
          {/* <Route path="/development" element={<Development/>}></Route>
          <Route path="/design" element={<Design/>}></Route>
          <Route path="/consulting" element={<Consulting/>}></Route> */}
        </Routes>
      </BrowserRouter>
      <Slider1 />
      <Banner />
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2.5em' }}>NEW ARRIVALS</h2>
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '.8em', color: 'gray', fontSize:'.8em' }}>CURATED AND HANDPICKED FOR YOU</p>
      <div style={{ marginLeft: '5em', marginRight: '5em' }}>
        <Product />
      </div>
      <Banner2 bimage={bimage} />
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2.5em' }}>BIKES</h2>
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '.8em', color: 'gray',fontSize:'.8em' }}>CURATED AND HANDPICKED FOR YOU</p>
      <div style={{ marginLeft: '5em', marginRight: '5em' }}>
        <Pbikes />
        <Banner3 />
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2.5em' }}>GOLF</h2>
        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '.8em', marginBottom: '2.5em', color: 'gray',fontSize:'.8em' }}>CURATED AND HANDPICKED FOR YOU</p>
        <Pgolf />
        <Banner7 />
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2.5em' }}>LATEST BLOGS!</h2>
        <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '.8em', marginBottom: '1.9em', color: 'gray',fontSize:'.8em' }}>NEWEST FROM BLOG</p>
        <Blog />
        <Flogo1 />
      </div>
      <Signup />
      <Footer />
      <hr style={{ borderColor: 'rgb(40, 39, 39)' }} />
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'gray', backgroundColor: 'rgb(40, 39, 39)', paddingTop: '1.5em', paddingBottom: '1.5em', fontSize: '.8em', cursor: 'pointer' }}>Sport © 2022 Demo Store. All Rights Reserved. Designed by <span style={{ color: '#e8541e' }}>OpenCartWorks.Com</span></p>
      <div style={{ position: 'fixed', right: '0', top: '16em',display:'flex', flexDirection:'column' }}>

        <img src={fbimg} alt="" height="32em" width="32em" style={{marginLeft:'.1em',}} />
        {/* <AiFillFacebook size="2em" style={{marginLeft:'.1em', borderRadius:'-5.5em', color:'blue'}}/> */}

        <img src={twimg} alt="" height="28em" width="36em"style={{marginTop:'0',}} />

        <img src={youimg} alt="" height="32em" width="32em" style={{marginTop:'0', marginLeft:'.2em',}}/>

      </div>
      
      <GoToTop />
    </div>
  );
}

export default App;
