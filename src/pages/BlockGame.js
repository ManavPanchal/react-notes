import React, { useRef } from 'react'
import { useState } from 'react';

function BlockGame() {

    const [blockStyle,setBlockStyle] = useState([
        { backgroundColor:"black", color:"whitesmoke", width:"500px", height:"500px", textAlign:"center"},
        { backgroundColor:"beige", color:"black", width:"500px", height:"500px", textAlign:"center"}
    ]);
    const leftRef = useRef();
    const rightRef = useRef();

    const changeBlock = ()=>{
        leftRef.current.style.backgroundColor = blockStyle[1].backgroundColor;
        rightRef.current.style.backgroundColor = blockStyle[0].backgroundColor;
        setBlockStyle([blockStyle[1],blockStyle[0]]);
    }
  return (
    <div className='flex justify-evenly content-center'>
      <div className="leftBlock" 
        style={{ backgroundColor:"black", color:"whitesmoke", width:"500px", height:"500px", textAlign:"center"}} 
        onMouseEnter={changeBlock} 
        ref={leftRef}>
            left </div>
      <div className="rightBlock" 
        style={{ backgroundColor:"beige", color:"black", width:"500px", height:"500px", textAlign:"center"}}
        onMouseEnter={changeBlock} 
        ref={rightRef}>
            right</div>
    </div>
  )
}

export default BlockGame
