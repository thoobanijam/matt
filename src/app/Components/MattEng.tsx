'use client'
import React, { useState } from "react";
import { SlSocialYoutube } from "react-icons/sl";
import { MdOutlinePlayArrow } from "react-icons/md";
import { RiThumbUpLine } from "react-icons/ri";
import { PiEyeLight } from "react-icons/pi";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const MattEng = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [youtube, setYoutube] = useState<number | null>(null);

  const cards = [
    { image: "/img/cel.jpg", content: "Our achievement" },
    { image: "/img/button2.jpg", content: "youtube play button" },
    { image: "/img/matt1.png", content: "MATT ENGINEERING SOLUTIONS" },
  ];

const youtubecards = [
  {
    image: "/img/tamb6.jpg",
    time: "12:34",
    url: "https://www.youtube.com/watch?v=kT5cN7alK60",
    content: "How to learn coding in Tamil How to learn programming",
    title: "Learn advanced engineering techniques from Matt Engineering Channel.",
    icon: (
      <>
        <PiEyeLight /> 45.2k views &nbsp;
        <RiThumbUpLine /> 892 &nbsp;
        <MdOutlineCalendarToday /> Jan 15, 2024
      </>
    ),
  },
  {
    image: "/img/tamb1.jpg",
    time: "18:42",
    url: "https://www.youtube.com/watch?v=9RqsB18cNcw",
    content: "Learn Machine Learning: Types, Resources & Certification",
    title: "Deep dive into machine learning concepts, resources, and certification paths",
    icon: (
      <>
        <PiEyeLight /> 45.2k views &nbsp;
        <RiThumbUpLine /> 892 &nbsp;
        <MdOutlineCalendarToday /> Jan 15, 2024
      </>
    ),
  },
  {
    image: "/img/tamb3.jpg",
    time: "15:28",
    url: "https://www.youtube.com/watch?v=F0SCKrj6x9Q",
    content: "Cybersecurity Tutorial: Basics to Advanced",
    title: "transforms to create stunning visual effects in your web applications",
    icon: (
      <>
        <PiEyeLight /> 45.2k views &nbsp;
        <RiThumbUpLine /> 892 &nbsp;
        <MdOutlineCalendarToday /> Jan 15, 2024
      </>
    ),
  },
  {
    image: "/img/tamb5.jpg",
    time: "22:15",
    url: "https://www.youtube.com/watch?v=wCdk6kESEqE",
    content: "AI PROJECT IDEAS IN TAMIL | ML PROJECT IDEAS IN TAMIL",
    title: "Comprehensive guide to database optimization techniques for high",
    icon: (
      <>
        <PiEyeLight /> 45.2k views &nbsp;
        <RiThumbUpLine /> 892 &nbsp;
        <MdOutlineCalendarToday /> Jan 15, 2024
      </>
    ),
  },
];


  return (
    <>
      {/* Header */}
      <div style={{ 
width: "100%", height: "150vh", display: "flex", marginTop: "600px", flexDirection: "column" }}>
        <div style={{ width: "400px", height: "auto", display: "flex", alignItems: "center", padding: "10px", gap: "15px" }}>
          <div style={{ width: "60px", height: "auto", borderRadius: "10px", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <SlSocialYoutube style={{ fontSize: "30px", color: "white" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}>Matt Engineering</h1>
            <p style={{ color: "#aaaf90", fontSize: "15px" }}>Latest engineering tutorials and insights</p>
          </div>
        </div>

        {/* Top Cards */}
        <div style={{ marginTop: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.6)" }}>
          <h1 style={{ fontWeight: "bold", margin: "20px" }}>YouTube</h1>
          <div style={{ width: "100%", height: "50vh", display: "flex", gap: "20px", padding: "20px" }}>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "20px",
                  width: "35%",
                  height: "250px",
                  position: "relative",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: hoveredIndex === index ? "translateY(-10px)" : "translateY(0px)",
                  boxShadow: hoveredIndex === index ? "0 6px 12px rgba(0,0,0,0.2)" : "0 3px 6px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={card.image} alt={card.content} style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "cover" }} />
                <p style={{ position: "absolute", bottom: "20px", left: "10px", color: "white", fontWeight: "bold" }}>
                  {card.content}
                </p>
                {index === Math.floor(cards.length / 2) && hoveredIndex === index && (
                  <MdOutlinePlayArrow
                    style={{
                      color: "white",
                      borderRadius: "50%",
                      padding: "10px",
                      border: "1px solid red",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "50px",
                      cursor: "pointer",
                      backgroundColor: "red",
                      boxShadow: "0 4px 10px red",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Link Cards */}
        <div style={{ 
width: "100%", height: "50vh", display: "flex", gap: "20px", padding: "20px" }}>
          {youtubecards.map((youtubecard, index) => (
            <div
              key={index}
              style={{
                borderRadius: "20px",
                width: "25%",
                height: "170px",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: youtube === index ? "translateY(-10px)" : "translateY(0px)",
                boxShadow: youtube === index ? "0 6px 12px rgba(0,0,0,0.2)" : "0 3px 6px rgba(0,0,0,0.1)",
              }}
              onMouseEnter={() => setYoutube(index)}
              onMouseLeave={() => setYoutube(null)}
            >
<img src={youtubecard.image} 
alt={youtubecard.content} 
style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "cover" }} />
              <div style={{ display: "flex", flexDirection: "column",position:"ralative", }}>
<div 
style={{ width: "50px", 
padding: "5px", 
borderRadius: "10px", 
backgroundColor: "#16191a", 
color: "white", 
position: "absolute", 
bottom: "30px", 
right: "20px", zIndex: 1, fontSize: "12px", textAlign: "center" }}>
                  {youtubecard.time}
                </div>
 <div style={{ 
width: "35px", 
height: "35px", 
borderRadius: "10px", 
backgroundColor: "red", 
display: "flex", 
justifyContent: "center", 
alignItems: "center", 
position: "absolute", 
top: "20px", 
left: "15px", 
zIndex: 1,
paddingLeft:"5px",
paddingRight:"5px"}}>
                  <SlSocialYoutube style={{ fontSize: "30px", color: "white" }} />
                </div>
                <p style={{ fontWeight: "bold", color: "#101828",marginTop:"10px",fontSize:"20px",lineHeight:"25px" }}>{youtubecard.content}</p>
                <p style={{ marginTop: "10px", color: "#4a5565",fontSize:"15px" }}>{youtubecard.title}</p>
<div
  style={{
    display: "flex",
    flexDirection: "row",
    gap: "5px", 
    marginTop: "10px",
    
    alignItems: "center",
  }}
>
  {youtubecard.icon }
</div>
              </div>
<a href={youtubecard.url} target="_blank" rel="noopener noreferrer">

              <button 
style={{ color: "white", backgroundColor: "red", width: "250px",
 padding: "10px 20px", borderRadius: "15px", 
margin: "20px", cursor: "pointer", border: "none",
display:"flex",
alignItems:"center",
justifyContent:"center",
gap:"10px",
marginTop:"20px"
 }}>
                <MdOutlinePlayArrow /> Watch Now <LuSquareArrowOutUpRight />
              </button></a>
              {youtube === index && (
                <MdOutlinePlayArrow
                  style={{
                    color: "white",
                    borderRadius: "50%",
                    padding: "10px",
                    border: "1px solid red",
                    zIndex: 2,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "50px",
                    cursor: "pointer",
                    backgroundColor: "red",
                    boxShadow: "0 4px 10px red",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MattEng;
