import React, { useState } from "react";
import styled from "styled-components";
import RightNav from './RightNav';


const StyledIcon = styled.div`
width: 2rem;
height: 2rem;
position:fixed;
top:35px;
right:35px;
z-index:10;
 


div {
    width:2rem;
    height:0.25rem;
    background:#111;
    border-radius:10px;
    margin-bottom:5px;
    transform-origin:3px;
    transition:all cubic-bezier(1, 0.09, 0.47, 0.69) 0.8s;


&:nth-child(1){
    transform:${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
}
&:nth-child(2){
    transform:${({ open}) => open ? 'translateX(-80px)':'translateX(0)'};
    opacity:${({ open }) => open ? '0': '1'};
}
&:nth-child(3){
    transform:${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
}



}

`;

const Icon = () => {

     const [open, setOpen] = useState(false)

    return (
       <>
         <StyledIcon open={open} onClick={() => setOpen(!open)}>
             <div />
             <div />
             <div />
         </StyledIcon>
         <RightNav open={open} />
        </>

    )
}

export default Icon



 










