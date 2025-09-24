'use client'
import React, { useState } from "react";
import { RiSettings4Fill } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { LuPencilRuler } from "react-icons/lu";



const settings = [
  {
    icon: <RiSettings4Fill />,
    content: "FUTURE DESIGN",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.",
    backgroundColor: "#3d9b35",
  },
  {
    icon: <FaRegLightbulb />,
    content: "CREATIVE",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.",
    backgroundColor: "#30b136",
  },
  {
    icon: <LuPencilRuler />,
    content: "DEVELOPMENT",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut.",
    backgroundColor: "#5dc152",
  },
];


export default function FirstSection() {
 return (
<>
<div style={{ position: "relative",
 width: "50%", 
height: "100vh",

display:"flex",
flexDirection:"column",

}}>
<div style={{display:"flex",
justifyContent:"space-between",
alignItems:"flex-start"
}}>
 <div style={{display:"flex",
position:"relative",
top:"-110px",
left:"-50px"
}}> 
 
  {/* Circle 2 div independent */}
  <div style={{
    position: "absolute",
    top: "120px",    // adjust vertical position
    left: "120px",   // adjust horizontal position
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    
zIndex:"2"
  }}>
<img src="/img/mernfull.jpg" style={{width:"100%",
height:"100%",
borderRadius:"50%"}}/>
</div>

<div style={{
    position: "absolute",
    top: "180px",    // adjust vertical position
    left: "200px",   // adjust horizontal position
    borderRadius: "50%",
    width: "200px",
    height: "200px",
   
zIndex:"1"
  }}>
<img src="/img/f2.jpg" style={{width:"100%",
height:"100%",
borderRadius:"50%"}}/>

</div>

{/* Circle 2 div independent */}
  <div style={{
    position: "absolute",
    top: "230px",    // adjust vertical position
    left: "60px",   // adjust horizontal position
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    
  }}><img src="/img/f1.jpg" style={{width:"100%",
height:"100%",
borderRadius:"50%"}}/>
</div></div>

 {/* Top row: image + text */}
  <div style={{
    display: "flex",
    
    alignItems: "center",
    gap: "20px",
    marginTop: "50px"
  }}>
    <img
  src="/img/mern.png"
  style={{ width: "55px", height: "55px" }}
  className="spin"
/>

<style jsx>{`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spin {
    animation: spin 3s linear infinite; /* speed = 3s */
  }
`}</style>
    <h1 style={{ color: "#061e43", fontWeight: "bold", 
fontSize: "25px" }}>Mern Stack</h1>

  </div></div>

<div 
style={{
width:"100%",
height:"250px",marginTop:"250px",
display:"flex",
flexDirection:"row"}}>

{settings.map((setting, index) => (
  <div 
    key={index} 
    style={{
     
      width: "100%",
      height: "260px",
      marginTop: "30px",
      backgroundColor: setting.backgroundColor,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      width: "100%",
cursor:"pointer"
    }}>
      <div
  style={{
    fontSize: "30px",
    color: "white",
    animation: "pulseIcon 2s infinite ease-in-out",
  }}
>
  {setting.icon}
</div>

<style>
  {`
    @keyframes pulseIcon {
      0%   { transform: scale(1); }
      50%  { transform: scale(1.5); } /* large */
      100% { transform: scale(1); }   /* back to normal */
    }
  `}
</style>
      <h2 style={{ color: "#061e43", fontWeight: "bold" }}>{setting.content}</h2>
      <p style={{ color: "white", fontSize: "14px", textAlign: "center" }}>{setting.title}</p>
    </div>
  </div>
))}

</div>

</div>




 </>
);
}