import React from "react";
import { GoPerson } from "react-icons/go";
import { IoBookOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { CiVideoOn } from "react-icons/ci";

const ForConcept = () => {
  const iconData = [
    { icon: <GoPerson />, title: "20000", content: "Expert Tutors", color: "#155dfc" },
    { icon: <IoBookOutline />, title: "1500", content: "Top Lessons", color: "#00a63e" },
    { icon: <RiGraduationCapLine />, title: "18000", content: "Over Students", color: "#9810fa" },
    { icon: <CiVideoOn />, title: "3200", content: "Resources", color: "#e7000b" },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "auto",
        marginTop: "60px",
        gap: "40px",     
}}
    >
      {/* Left Side Image */}
      <div
        style={{
          width: "50%",
          position:"relative",
          overflow: "hidden",

        }}
      >
        <img
          src="/img/aaa1.png"
          style={{ width: "500px", height: "500px", 
objectFit: "cover",marginLeft:"120px" ,borderRadius: "20px",}}
        />
      </div>

      {/* dark blue div */}
      <div
        style={{
          width: "140px",
          height: "150px",
          backgroundColor: "#155dfc", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          borderRadius: "20px",
          padding: "15px",
          zIndex: "1",
          position: "absolute",
          top: "1030px",
          left: "40px",
          
        }}
      >
        <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>10+</h1>
        <p style={{ fontSize: "15px",marginLeft:"20px" }}>Years of Experience</p>
      </div>

{/*image floating  */}
<div
        style={{
          width: "200px",
          height: "180px",
         
          display: "flex",
          borderRadius: "20px",
border:"3px white solid",
          
          zIndex: "1",
          position: "absolute",
          top: "1500px",
          left: "35px",
          
        }}
      >
<img src="/img/fenil1.png" style={{width:"100%",height:"100%",
borderRadius:"20px"}}/>
              </div>
{/*orange div circle  */}
<div 
style={{width:"260px",
height:"260px",
borderRadius:"50%",
backgroundColor:"#f3df92",
position:"absolute",
top:"1460px",
left:"40px",
zIndex:-1}}>
</div>
      {/* Right Side Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "20px",
        }}
      >
        {/* Blue Box */}
        <div
          style={{
            width: "fit-content",
            padding: "10px 20px",
            color: "#155dfc",
            backgroundColor: "#eff6ff",
            borderRadius: "20px",
            fontWeight: "bold",
          }}
        >
          Get To Know About Us
        </div>

        {/* Heading */}
        <h1
  style={{
    color: "#1e2939",
    fontSize: "32px",
    fontWeight: "bold",
    lineHeight: "1.3",
    maxWidth: "80%",
    marginTop: "10px",

  }}
>
  From Concept to Career{" "}
   <span
  style={{fontSize:"32px",
    color: "#155dfc",
    textDecoration: "underline",
    textDecorationColor: "yellow",
    textDecorationThickness: "4px",
    borderRadius: "1px",
    fontFamily: "monospace", // typing font look
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "5px solid yellow", // cursor
    width: "0ch", // start with 0
    animation: "typing 2s steps(6, end) infinite alternate, blink 0.7s step-end infinite",
  verticalAlign: "bottom",
}}
>
  Engineering
  <style>{`
    @keyframes typing {
      from { width: 0ch; }
      to { width: 13.5ch; } /* length of "Future" */
    }
    @keyframes blink {
      from, to { border-color: transparent; }
      50% { border-color: yellow; }
    }
  `}</style>
</span>

{" "}
  Education that Delivers
</h1>

        {/* Paragraph */}
        <p
          style={{
            color: "#656e65",
            fontSize: "16px",
            lineHeight: "1.9",
            maxWidth: "80%",
          }}
        >
          At Matt Engineering Solutions, we empower the next generation of
          engineers through industry-aligned, hands-on education. With decades
          of combined expertise in software development, hardware innovation,
          and digital transformation, our mission is simple: Bridge the gap
          between academic theory and real-world engineering practice.
        </p>

        {/* Icon Section */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {iconData.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                padding: "15px",
                textAlign: "center",
                flex: "1",
                minWidth: "250px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "30px",
                  color: item.color,
                  borderRadius: "50%",
                  padding: "15px",
                  backgroundColor: "#eff6ff",
                }}
              >
                {item.icon}
              </div>

              {/* Title + Content */}
              <div style={{ textAlign: "left" }}>
                <h2 style={{ margin: 0, fontSize: "18px", color: "#101828",fontWeight:"bold" }}>
                  {item.title}
                </h2>
                <p style={{ color: "#4a5577", fontSize: "14px", margin: 0 }}>
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForConcept;
