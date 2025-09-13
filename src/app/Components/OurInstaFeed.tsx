'use client'
import React, { useState, useEffect } from "react";

const cards = [
  { image: "/img/webpost.png", button: "Software", backgroundColor: "#1976d2", content: "Web Development" },
  { image: "/img/aipost.png", button: "Technology", backgroundColor: "#e561cd", content: "AI Innovation" },
  { image: "/img/2.jpg", button: "Programming", backgroundColor: "#ff664e", content: "Python Programming" },
  { image: "/img/insta5.jpg", button: "Java Full Stack", backgroundColor: "#ff664d", content: "Achievement" },
  { image: "/img/insta5.jpg", button: "Development", backgroundColor: "#9c71ff", content: "React Development" },
  { image: "/img/insta2.jpg", button: "Science", backgroundColor: "#00c0fa", content: "Data Analytics" },
];

const OurInstaFeed = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevIndex = (current - 1 + cards.length) % cards.length;
  const nextIndex = (current + 1) % cards.length;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        height: "80vh",
        
      }}
    >
      {/* Header */}
      <div
        style={{
          
          width: "440px",
          height: "100px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
          <h1 style={{ color: "#dc6600", fontSize: "40px", fontWeight: "bold" }}>
            Our Instagram{" "}
            <span style={{ color: "#574ffb" }}>F</span>
            <span style={{ color: "#5d4dfb" }}>e</span>
            <span style={{ color: "#7d39fa" }}>e</span>
            <span style={{ color: "#7d39fa" }}>d</span>
          </h1>
          <img src="/img/insta.png" alt="Instagram" style={{ width: "30px", height: "30px" }} />
        </div>
        <p style={{ color: "#4e5969", fontSize: "16px", fontWeight: "bold" }}>
          Experience Our Content in stunning 3D perspective
        </p>
      </div>

      {/* Left image (blurred, slightly rotated) */}
<div
  style={{
    position: "absolute",
    top: "120px",
    left: "10%",
    width: "320px",
    height: "350px",
    borderRadius: "20px",
    overflow: "hidden",
    filter: "blur(5px)",
    transform: "perspective(800px) rotateY(25deg) translateX(40px)", // slight 3D turn
    transition: "transform 0.5s ease",
  }}
>
  <img
    src={cards[prevIndex].image}
    alt={cards[prevIndex].content}
    style={{ width: "100%", height: "100%", borderRadius: "20px" }}
  />
</div>

{/* Right image (blurred, slightly rotated) */}
<div
  style={{
    position: "absolute",
    top: "120px",
    right: "10%",
    width: "320px",
    height: "350px",
    borderRadius: "20px",
    overflow: "hidden",
    filter: "blur(5px)",
    transform: "perspective(800px) rotateY(-25deg) translateX(-40px)", // slight 3D turn
    transition: "transform 0.5s ease",
  }}
>
  <img
    src={cards[nextIndex].image}
    alt={cards[nextIndex].content}
    style={{ width: "100%", height: "100%", borderRadius: "20px" }}
  />
</div>
      {/* Bottom image (clear) */}
      <div
        style={{
          position: "absolute",
          top: "300px",
          right: "38%",
          width: "320px",
          height: "350px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
                boxShadow: "0 4px 12px #d1d1d1", 

        }}
      >
        <img
          src={cards[current].image}
          alt={cards[current].content}
          style={{ width: "100%", height: "100%", borderRadius: "20px" }}
        />
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)", // semi-transparent dark overlay
      borderRadius: "20px",
    }}
  />

        <button
          style={{
            borderRadius: "20px",
            width: "150px",
            padding: "5px 10px",
            position: "absolute",
            top: "250px",
            left: "20px",
            zIndex: 1,
            backgroundColor: cards[current].backgroundColor,
            color: "#fff",
            border: "none",
            fontWeight: "bold",
          }}
        >
          {cards[current].button}
        </button>
        <div
          style={{
            position: "absolute",
            top: "320px",
            left: "25px",
            zIndex: 2,
            fontWeight: "bold",
            color: "white",
            fontSize:"20px",
          }}
        >
          {cards[current].content}
        </div>
      </div>

      {/* Dots */}
<div
  style={{
    position: "absolute",
    top: "760px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "10px",
marginBottom:"20px",
  }}
>
  {cards.map((card, i) => (
    <div
      key={i}
      style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: i === current ? card.backgroundColor : "#ccc",
        transition: "background-color 0.3s ease",
      }}
    />
  ))}
</div>

    </div>
  );
};

export default OurInstaFeed;
