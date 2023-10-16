import React, { useState } from 'react'
import '../components/bgchanger.css'
const Bgchanger = () => {

     const [color, setColor]= useState("");
     const [txtcolor, settxtColor]= useState("");
     const [txt, setTxt]= useState("");

  return (
    <div className='mainbox' style={{backgroundColor:color}}>
              <h1 style={{color:txtcolor}}>welcome to marketplace <span
              style={{color:color, backgroundColor:txtcolor}}>{txt}</span></h1>
         <div className="btn-box">
              <button className='btnblue' onClick={()=>{
                 setColor("blue")
                 settxtColor("white")
                 setTxt("Blue btn")
              }}>blue</button>
              <button className='btngreen' onClick={()=>{
                 setColor("green")
                 settxtColor("lightgray")
                 setTxt("green btn")
              }}>green</button>
              <button className='btnorange' onClick={()=>{
                 setColor("orange")
                 settxtColor("white")
                 setTxt("orange btn")
              }}>orange</button>
         </div>
    </div>
  )
}

export default Bgchanger;
