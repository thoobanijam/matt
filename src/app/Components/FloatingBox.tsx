"use client";
import { HiX } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


const classess =[
{title:"100% Live Classess",
 content:"Real-time interaction"
},

{title:"Expert Instructors",
 content:"Industry Proffessionals"
},

{title:"Flexibile Learning",
 content:"Online & Offline options"
},

];

export default function FloatingBox() {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setShowDiv(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (!showDiv) return null;

  return (
<div
  style={{
    position: "fixed",
    top: "150px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    width: "450px",
    height: "auto",
    borderRadius: "20px",
    border: "2px solid #a14782",
    
    background: "radial-gradient(circle at bottom right, rgba(170, 100, 20, 0.99) 0%, #531d8a 80%)",
  }}
>




      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px",
        }}
      >
        <div
          style={{
            width: "250px",
            height: "auto",
            borderRadius: "20px",
            padding: "10px 10px",
            color: "white",
            fontWeight: "bold",
            backgroundColor: "#6b50a0",
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <LuCalendarDays />
          NEW BATCH: October 2025 5th
        </div>

        <HiX
          onClick={() => setShowDiv(false)}
          style={{
            fontSize: "35px",
            color: "black",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "5px",
            position: "absolute",
            top: "-15px",
            right: "-15px",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        />

        <IoBookOutline
          className="float-icon"
          style={{
            fontWeight: "bold",
            color: "#8b5eae",
            fontSize: "25px",
            display: "inline-block",
          }}
        />
      </div>
<div style={{padding:"10px",
paddingLeft:"30px",
display:"flex",
flexDirection:"column"}}>

<h1 style={{color:"white",
fontWeight:"bold",
fontSize:"25px"}}>Live Learning</h1>

<h1 style={{color:"#e9d4ff",
fontSize:"20px"}}>Excellence</h1>

<h1 style={{color:"#c4c8eb",
fontSize:"16px"}}>Transform Your Future with Expert-Led Classess</h1>

{classess.map((cls,index) => (
<div key={index}
style={{display:"flex",
flexDirection:"column",
marginTop:"15px",
marginLeft:"30px"}}>
<h1 style={{color:"#e9d4ff",fontSize:"15px",fontWeight:"bold"}}>{cls.title}</h1>
<h1 style={{color:"#c4c8eb",fontSize:"13px"}}>{cls.content}</h1>

</div>
))}
<button
  style={{
    color: "white",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    padding: "15px 20px",
    width: "90%",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
            background: "linear-gradient(to right, rgba(190,255,0,0.7) 0%, rgba(253,199,0,0.5) 100%)"


  }}
>
  Enroll Now <FaArrowRight style={{ marginLeft: "10px" }} />
</button>

</div>

    </div>
  );
}
