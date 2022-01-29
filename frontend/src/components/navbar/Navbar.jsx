import React from "react";
import styled from 'styled-components';
import Icon from './Icon';



const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
margin:0;
padding:0;
`

const Nav = styled.nav`
width:80%;
height:55px;
padding:0 2%;
display:flex;
justify-content:space-between;
transition:all ease-in-out 0.8s;
 
 `


import React from 'react'

const Navbar = () => {
    return (
         
            <Container>
                <Nav>


                    <Icon />


                </Nav>
            </Container>
      
    )
}

export default Navbar


















