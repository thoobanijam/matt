'use client'
import React, { useState } from "react";

export default function FourthSection() {
 return (
<>
<div style={{width:"50%",
backgroundColor:"#7b716f",
display:"flex",
flexDirection:"column",
gap:"20px",
padding:"30px",
borderRadius:"20px",
marginBottom:"10px"}}>

<h1 style={{color:"#2196f3",
fontWeight:"bold",
fontSize:"17px",
}}>ONLINE COURSE</h1>

<h1 style={{color:"#263238",
fontSize:"23px",
fontWeight:"bold"}}>Full-Stack Web Development</h1>

<p style={{color:"#aeaeae",
fontSize:"15px"}}>
Become a versatile developer by combining frontend and backend skills. Build complete web applications from start to finish.
<ul style={{ listStyleType: "disc", paddingLeft: "20px",
marginTop:"20px" }}>

<li>International course collection in 10 languages</li>

<li>Certified include</li>
</ul>
</p>
</div>
</>
);
}