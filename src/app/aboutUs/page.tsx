'use client'
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { LuClipboard } from "react-icons/lu";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoMdArrowForward } from "react-icons/io";
import { LuShare2 } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { FaStar } from "react-icons/fa6";


const mentors = [
  { icon:<LuShare2 />,
image: "/img/md.webp",
 title: "Managing Director", 
content: "Mohammed Shaheer",
    stats: ( 
      <span style={{ display: "flex", alignItems: "center",color:"#5e557e",marginTop:"5px" }}>
        <GoPeople style={{marginRight:"20px"}} /> <h1 style={{marginRight:"70px"}}>1K+ Student</h1> <FaStar style={{ color: "#FFD700",marginLeft:"30px" }} /> (5.0)
      </span>
    ),
 },
  { icon:<LuShare2 />,
image: "/img/adm.webp", 
title: "Administrator", 
content: "Praveen Mathias",
stats: ( 
      <span style={{ display: "flex", alignItems: "center",color:"#5e557e",marginTop:"5px" }}>
        <GoPeople style={{marginRight:"20px"}} /> <h1 style={{marginRight:"70px"}}>1K+ Student</h1> <FaStar style={{ color: "#FFD700",marginLeft:"30px" }} /> (5.0)
      </span>
    ),
},

{ icon:<LuShare2 />,
image: "/img/pm.webp", 
title: "Project Manager", 
content: "Mohamed Azharuddin",
stats: ( 
      <span style={{ display: "flex", alignItems: "center",color:"#5e557e",marginTop:"5px" }}>
        <GoPeople style={{marginRight:"20px"}} /> <h1 style={{marginRight:"70px"}}>1K+ Student</h1> <FaStar style={{ color: "#FFD700",marginLeft:"30px" }} /> (5.0)
      </span>
    ),
},

{ icon:<LuShare2 />,
image: "/img/sh.webp", 
title: "Software Head", 
content: "Aneesh P Kunjappy",
stats: ( 
      <span style={{ display: "flex", alignItems: "center",color:"#5e557e",marginTop:"5px" }}>
        <GoPeople style={{marginRight:"20px"}} /> <h1 style={{marginRight:"70px"}}>1K+ Student</h1> <FaStar style={{ color: "#FFD700",marginLeft:"30px" }} /> (5.0)
      </span>
    ),
},
  
];

const cards = [
  { icon: <PiStudentFill />, start: 980, end: 1000, title: "Student Enrolled" },
  { icon: <LuClipboard />, start: 30, end: 40, title: "Top Class Courses" },
  { icon: <BsGlobeCentralSouthAsia />, start: 0, end: 2, title: "Our Branches" },
  { icon: <AiOutlineTrophy />, start: 85, end: 95, title: "Awards We Received" },
];

// CounterCard component
function CounterCard({ icon, start, end, animate, title }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!animate) return;

    let current = start;
    const step = Math.ceil((end - start) / 50);
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setCount(current);
    }, 50);

    return () => clearInterval(interval);
  }, [animate, start, end]);

  return (
    <div style={{ marginTop: "110px", display: "flex", width: "300px", height: "300px", 
backgroundColor: "white", borderRadius: "10px", gap: "20px", flexDirection: "column", 
justifyContent: "center", alignItems: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <h1 style={{ color: "#155dfc", fontSize: "50px" }}>{icon}</h1>
      <h1 style={{ color: "#082a5e", fontWeight: "bold", fontSize: "20px" }}>{count}</h1>
      <p style={{ color: "#39557e" }}>{title}</p>
    </div>
  );
}

export default function AboutUs() {
  const [animate, setAnimate] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("counter-section");
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) setAnimate(true);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Section */}
      <div style={{  width: "100%", height: "300px", position: "relative" ,}}>
        <img src="/img/aboutMatt.jpeg" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "300px", backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 }} />
        <div style={{ position: "absolute", top: "50px", left: "20px", zIndex: 2 }}>
          <h1 style={{ color: "#171717", fontSize: "40px", fontWeight: "bold", padding: "10px" }}>About Us</h1>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <h1 style={{ color: "#171717", paddingLeft: "20px" }}>Matt</h1>
            <IoIosArrowForward style={{ color: "#b6cff5" }} />
            <h1 style={{ color: "#b6cff5" }}> About Us</h1>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div style={{ 
width: "100%", padding: "20px", height: "85vh", 
display: "flex", flexDirection: "row", 
justifyContent: "space-between",
marginBottom:"50px", }}>
        
<div style={{  width: "35%", display: "flex", flexDirection: "column", margin: "15px", }}>
          <h1 style={{ fontWeight: "bold", color: "#2b7fff", backgroundColor: "#e7effc", padding: "10px 20px", borderRadius: "5px", width: "150px", margin: "10px" }}>Who We Are</h1>
          <h1 style={{ width: "400px", margin: "10px", fontSize: "2rem", color: "#082a5e", fontWeight: "bold" }}>
            Where Young Minds Meet {" "}
            <span style={{ color: "#155dfc", position: "relative", display: "inline-block" }}>
              Real-World
              <img src="/img/title_shape.svg" alt="shape" style={{ display: "block", margin: "0 auto", marginTop: "-5px", width: "150px", filter: "invert(52%) sepia(84%) saturate(973%) hue-rotate(5deg) brightness(100%) contrast(101%)" }} />
            </span>{" "}IT Excellence
          </h1>
          <h1 style={{ color: "#082a5e", width: "350px", margin: "10px", fontWeight: "bold" }}>At MATT Engineering Solutions, we believe in bridging the gap between education and industry.</h1>
          <p style={{ color: "#677d9c", width: "420px", margin: "10px" }}>Offering IT courses that deliver real-world skills. Guided by experienced professionals, our programs empower students, researchers, and career seekers to thrive in the ever-evolving IT landscape.</p>
          <button style={{ width: "200px", borderRadius: "5px", color: "white", padding: "10px 20px", margin: "10px", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", border: "none", cursor: "pointer" }} className="bg-[#155dfc] hover:bg-[#082a5e]">
            Explore Courses <IoArrowForward />
          </button>
        </div>

        <div style={{width: "65%", display: "flex", justifyContent: "space-between", 
gap: "30px" }}>
          <div style={{ width: "50%", position: "relative" }}>
            <div style={{ position: "absolute", top: "100px", right: "15px", zIndex: 1 }}>
              <img src="/img/Explore1.jpeg" style={{ width: "75%", borderRadius: "10px", height: "330px", marginLeft: "100px" }} />
            </div>
            <div style={{ position: "absolute", top: "420px", left: "30px" }}>
              <img src="/img/dotted2.png" style={{ width: "80%", borderRadius: "10px", height: "125px", marginTop: "-50px", marginLeft: "30px" }} />
            </div>
          </div>
          <div style={{width: "50%", display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "10px" }}>
            <img src="/img/Explore3.jpg" style={{ width: "80%", borderRadius: "10px", height: "250px" }} />
            <img src="/img/Explore2.jpeg" style={{ width: "80%", borderRadius: "10px", height: "250px" }} />
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div id="counter-section" style={{width: "100%", 
padding: "10px", minHeight: "30vh", display: "flex", flexDirection: "column", 
alignItems: "center", justifyContent: "center", 
backgroundImage: "url('/img/Factbg.jpg')", 
backgroundSize: "cover", backgroundPosition: "center", 
position: "relative", }}>

        <h1 style={{ color: "#2b7fff", padding: "5px 10px", backgroundColor: "#e7effc", fontWeight: "bold", marginTop: "80px" }}>Our Achievements</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "50px" }}>
          {cards.map((card, index) => (
            <CounterCard key={index} icon={card.icon} start={card.start} end={card.end} animate={animate} title={card.title} />
          ))}
        </div>
      </div>

      {/* Mentors Section */}
      <div style={{ width: "100%", minHeight: "50vh", backgroundColor: "#f1f2f8", display: "flex", flexDirection: "column", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <h1 style={{ color: "#2b7fff", width: "200px", backgroundColor: "#e7effc", padding: "5px 10px" }}> Our Qualified Matter</h1>
            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
              <h1 style={{ width: "500px", margin: "10px", fontSize: "2.3rem", color: "#082a5e", fontWeight: "bold", lineHeight: "1", letterSpacing: "-1px" }}>
                Top{" "}
                <span style={{ color: "#155dfc", position: "relative", display: "inline-block", marginLeft: "10px" }}>
                  Class
                  <img src="/img/title_shape.svg" alt="shape" style={{ display: "block", margin: "0 auto", marginTop: "-9px", width: "80px", filter: "invert(52%) sepia(84%) saturate(973%) hue-rotate(5deg) brightness(100%) contrast(101%)" }} />
                </span>{" "}
                Mentors
              </h1>
            </div>
          </div>
          <div style={{ border: "1px solid #155dfc", borderRadius: "5px", padding: "5px 10px", color: "#155dfc", width: "250px", height: "50px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", fontWeight: "bold", cursor: "pointer" }}>
            ALL INSTRUCTORS <IoMdArrowForward style={{ marginLeft: "10px" }} />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", 
width: "100%", padding: "20px" }}>
          {mentors.map((mentor, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                width: "285px",
                height: "380px",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease",
                transform: hoverIndex === index ? "translateY(-10px)" : "translateY(0px)",
                boxShadow: hoverIndex === index ? "0 6px 12px rgba(0,0,0,0.2)" : "0 3px 6px rgba(0,0,0,0.1)",
                cursor: "pointer",
                borderBottom:"1px solid #d7dce3"
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >

<div style={{color:"#52a2fe",
backgroundColor:"#e7effc",
borderRadius:"50%",
fontSize:"20px",
padding:"5px 5px",
marginLeft:"230px",
marginTop:"10px"}}>{mentor.icon}</div>
              <img
                src={mentor.image}
                alt={mentor.title}
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginTop: "20px",
                  marginBottom: "15px",

    backgroundColor:
  mentor.content === "Mohammed Shaheer"
    ? "#64df59"
    : mentor.content === "Praveen Mathias"
    ? "#59c7df"
    : mentor.content === "Mohamed Azharuddin"
    ? "#eadb52"
    : mentor.content === "Aneesh P Kunjappy"
    ? "#59dfaf"
    : "#e2faff", // final fallback color

       
  }}

              />
<div
    style={{
      width: "100%",
      textAlign: "center",
      borderBottom:"1px solid #d7dce3",
      paddingBottom: "10px",
      marginBottom: "10px",
    }}
  >

              <p style={{ color: "#6a7e9e", fontSize: "14px" }}>{mentor.title}</p>
              <h1 style={{ color: "#082a5e", fontSize: "16px", fontWeight: "bold",
 marginTop: "10px", }}>{mentor.content}</h1></div>

<div style={{width:"100%",padding:"3px"
}}>{mentor.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
