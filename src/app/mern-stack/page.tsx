'use client'
import React, { useState } from "react";
import FirstSection from "./(section)/FirstSection/page";
import SecondSection from "./(section)/SecondSection/page";
import ThirdSection from "./(section)/ThirdSection/page";
import FourthSection from "./(section)/FourthSection/page";


export default function MernStack() {
 return (
<>


<div style={{display:"flex",
justifyContent:"space-between",
gap:"30px",padding:"20px"}}>
      <FirstSection />
      <SecondSection /></div>

<div style={{display:"flex",width:"100%",
height:"100vh"}}>
      <ThirdSection />
      <FourthSection /></div>


 </>
);
}