import React from 'react'
import styled from 'styled-components';


const Box = styled.div`
width:100%;
height:100%;
position:absolute;
background:linear-gradient(30deg,#fff,lightblue);
display:flex;
justify-content:center;
align-items:center;
top:0;


`;


const Contact = () => {
    return (
        <Box>
            <h1>Contact</h1>
        </Box>
    )
}

export default Contact
