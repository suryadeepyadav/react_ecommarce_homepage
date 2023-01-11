import React from 'react'
import './css/blog.css';
import {MdOutlineDateRange} from 'react-icons/md';
import {FaRegComments} from 'react-icons/fa';
import blogimg1 from './images/blogimg1.jpg';
import blogimg2 from './images/blogimg2.jpg';
import blogimg3 from './images/blogimg3.jpg';

const Blog = () => {
    return (
        <div className='mainblog'>
            <div className='blogs'>
                <div className='blogimage'>
                <img src={blogimg1} alt=""   />
                </div>
                <h4>ACCUMSAN MORBI TRISTIQUE AUCTOR</h4>
                <p> <span><MdOutlineDateRange style={{position:'relative',top:'.1em'}}/></span> <span>June 20, 2019</span> <span style={{position:'relative', left:'3em'}}> <FaRegComments style={{position:'relative',top:'.1em' ,right:'.3em'}}/>1 Comment</span> </p>
                <p id='cblog'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Read More</button>
            </div>
            <div className='blogs'>
            <div className='blogimage'>
                <img src={blogimg2} alt=""   />
                </div>
                <h4>ACCUMSAN MORBI TRISTIQUE AUCTOR</h4>
                <p> <span><MdOutlineDateRange style={{position:'relative',top:'.1em'}}/></span> <span>June 20, 2019</span> <span style={{position:'relative', left:'3em'}}> <FaRegComments style={{position:'relative',top:'.1em' ,right:'.3em'}}/>1 Comment</span> </p>
                <p id='cblog'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Read More</button>
            </div>
            <div className='blogs'>
            <div className='blogimage'>
                <img src={blogimg3} alt=""   />
                </div>
                <h4>ACCUMSAN MORBI TRISTIQUE AUCTOR</h4>
                <p> <span><MdOutlineDateRange style={{position:'relative',top:'.1em'}}/></span> <span>June 20, 2019</span> <span style={{position:'relative', left:'3em'}}> <FaRegComments style={{position:'relative',top:'.1em' ,right:'.3em'}}/>1 Comment</span> </p>
                <p id='cblog'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default Blog
