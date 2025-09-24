'use client';
import React from "react";
import Image from "next/image";
import { products } from "./products";
import { useRouter } from "next/navigation";

export default function AllProductList() {
  const router = useRouter();

  return (
<div style={{width:"100%",display:"flex",padding:"10px",
height:"70vh",
flexDirection:"row",
justifyContent:"space-between",}}>
<div style={{padding:"20px",width:"30%",
height:"410px",
display:"flex",
justifyContent:"center",
alignItems:"center",
borderRadius:"15px",
backgroundColor:"#212121",
flexDirection:"column",
gap:"20px"
}}>

<h1 style={{color:"#8e8e8e",
fontSize:"15px",
fontWeight:"bold"}}>HTML,CSS & Javascript</h1>

<h1 style={{color:"#f3f3f3",
fontSize:"25px",
fontWeight:"bold",
marginTop:"20px"}}>Web Development Intro</h1>

<p style={{color:"#8e8e8e",
fontSize:"15px",
}}>Ready to Start your web development journey?</p>
<button style={{color:"#434e53",
backgroundColor:"#ffffff",
borderRadius:"10px",
padding:"5px 10px",
width:"150px"}}> ENROLL NOW</button>
</div>
    <div style={{
  display: "flex",
  flexWrap: "wrap",       width: "60%",
 
  gap: "10px",          
  margin: "0 auto",
borderRadius:"15px"    
}}>
  {Object.entries(products).map(([key, product]) => (
    <div
      key={key}
      style={{
        width: "48%",      // two items per row with small gap
        cursor: "pointer",
       
        position: "relative",
        height: "200px",

borderRadius:"15px"
      }}
      onClick={() => router.push(`/shop/${key}`)}
>
<div style={{ position: "relative", width: "100%", 
height: "200px",borderRadius:"15px" }}>

      <Image
        src={product.image}
        alt={product.name}
        fill
        style={{ objectFit: "cover",
borderRadius:"15px"}}
      />
  {/* Dark overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)", // darker = higher last value
      zIndex: 1,
borderRadius:"15px"
    }}
  />

<div style={{display:"flex",
flexDirection:"column",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2, // ensure text is above overlay
      padding: "10px",
}}>



<h1 style={{ position: "absolute",
 top: "10px", 
left: "10px", 
color: "white",
fontSize:"25px"
 }}>
        {product.icon}
      </h1>


<h1 style={{ position: "absolute",
 bottom: "35px", 
left: "10px", 
color: "white",

fontWeight:"bold",
fontSize:"20px",
 }}>{product.description}
</h1>

<h1 style={{ position: "absolute",
  bottom: "10px", 
left: "10px", 
color: "gray",

fontWeight:"bold",
fontSize:"17px",
 }}>{product.content}
</h1></div>
</div>

    </div>
  ))}
</div>
</div>
  );
}
