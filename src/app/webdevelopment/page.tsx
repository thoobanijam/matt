'use client';

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';



export default function WebDevelopment() {
const router = useRouter();

return (
<>
<div style={{  width: "100%", height: "300px", position: "relative" ,}}>
        <img src="/img/webdevlop.jpg" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "300px", backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 }} />
        <div style={{ position: "absolute", top: "50px", left: "20px", zIndex: 2 }}>
          <h1 style={{ color: "white", fontSize: "40px", fontWeight: "bold", padding: "10px" }}>Web Development</h1>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <h1 style={{ color: "white", paddingLeft: "20px" }}>Matt</h1>
            <IoIosArrowForward style={{ color: "#b6cff5" }} />
            <h1 style={{ color: "#b6cff5" }}> Web Development</h1>
          </div>
        </div>
      </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <button
onClick={() => router.push('/shop')}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontWeight: "bold",
            
            cursor: "pointer",
          }}
className="text-[#011b2f] text-[35px] hover:text-blue-600 hover:text-[50px]"
        >
          <FaHandPointRight style={{
            color: "yellow",
            animation: "moveRightLeft 1s infinite ease-in-out"
          }} />
          WEB DEVELOPMENT
          <FaHandPointLeft style={{
            color: "yellow",
            animation: "moveRightLeft 1s infinite ease-in-out reverse"
          }} />
        </button>
      </div>

      <span style={{cursor:"pointer"}}
className="text-[#011b2f] hover:text-blue-600">Click Here</span>

      {/* Add the keyframes globally */}
      <style>{`
        @keyframes moveRightLeft {
          0% { transform: translateX(0); }
          50% { transform: translateX(15px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>


{/* how we can help you */}
<div
  style={{
    width: "100%",
    height: "500px",
    backgroundImage: "url('/img/projectmanagement.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
marginTop:"20px",
marginBottom:"20px"

  }}
>
  {/* overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.9)",
    }}
  />

  {/* content */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      color: "#b2bdcd",
      textAlign: "center",
      paddingTop: "200px",
      fontSize: "32px",
      fontWeight: "bold",
    }}
  >
    <h1 style={{ color: "#dc6600", fontSize: "30px",
marginTop:"10px" }}>
WE OFFER {"  "} 
<span style={{ color: "#574ffb" }}>Y</span>
            <span style={{ color: "#5d4dfb" }}>O</span>
            <span style={{ color: "#7d39fa" }}>U</span>
</h1>

    <h1 style={{ color: "#b2bdcd", fontWeight: "bold", 
fontSize: "25px", fontFamily:"monospace",marginTop:"10px" }}>
  Great Benefits for{" "}
  <span
  style={{
    fontSize: "25px",
    color: "#e9a53f",
    textDecoration: "none",
    
    textDecorationThickness: "4px",
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "5px solid yellow",
    width: "0ch",
    fontFamily: ' monospace', // fixed-width font
    animation: "typing 2s steps(7, end) infinite, blink 0.7s step-end infinite",
    verticalAlign: "bottom",
marginRight: "10px",
  }}
>
  Working
</span>
With Us
</h1>
<p
  style={{marginTop:"20px",
    fontSize: "13px",
    width: "800px",       
    textAlign: "center",  
    margin: "0 auto", 
color:"#b2bdcd"    
  }}
>
  In the tech industry, Matt can help you stay up-to-date on the latest trends and technologies.
  He is also a great problem solver and can help you find creative solutions to complex problems.
</p>
<style>{`
  @keyframes typing {
    from { width: 0ch; }
    to { width: 8.5ch; }
  }
  @keyframes blink {
    from, to { border-color: transparent; }
    50% { border-color: yellow; }
  }
`}</style>
  </div>
</div>
</>


);
}