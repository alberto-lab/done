import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Service from '../pages/services';
import Products from '../pages/products';
import Contact from '../pages/contact';
import Sign_up from '../pages/sign_up';

import logo from '../img/logoAcqua.png';


const Ul = styled.div`
list-style:none;
display:block;
flex-flow:row nowrap;
z-index:3;
position: absolute;  
background:#fff;
top:0px;
width:200px;
height:100%;
left:0;
transition:all cubic-bezier(1, 0.09, 0.47, 0.69) 1s;
transform:${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};
 


li{
padding:10px 10px;
font-weight:bold;
text-align:center;
font-size:1.1rem; 
 
}
`;
const Wrapprer = styled.div`
padding-top:100%;
 
`;

const RightNav = ({ open }) => {
    return (
        <>
          <Router>

              <Link to="/">
              <img src={logo} alt={"logo"} style={{width:'100px',height:'auto',top:'20px',left:'50px',position:'fixed',zIndex:'100'}} />
              </Link>

                <Ul open={open}>
                  <Wrapprer>
                  <li><Link to="/about">about</Link></li>
                  <li><Link to="/products">products</Link></li>
                  <li><Link to="/service">service</Link></li>
                  <li><Link to="/contact">contact</Link></li>
                  <li><Link to="/sign_up">sign Up</Link></li>
                  </Wrapprer>
                </Ul>

                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='products' element={<Products />} />
                  <Route path='service' element={<Service />} />
                  <Route path='contact' element={<Contact />} />
                  <Route path='sign_up' element={<Sign_up />} />
                </Routes>

          </Router>
        
        </>
      
    )
}

export default RightNav
