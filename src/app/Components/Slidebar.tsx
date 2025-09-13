'use client'
import React from "react";

const Slidebar = () => {
  const img = [
    { image: "/img/java.png" },
    { image: "/img/python.png" },
    { image: "/img/c.png" },
    { image: "/img/php.png" },
    { image: "/img/robo.png" },
    { image: "/img/dig.png" },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        position: "relative",
        top: "80px",
        zIndex: 1000,
        height: "120px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Sliding container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15%",           

         animation: "slide 10s linear infinite alternate",
        }}
      >
        {img.map((item, index) => (
          <img
            key={index}
            src={item.image}
            style={{
              width: "80px",
              height: "80px",
              filter: "grayscale(100%)",
              transition: "filter 0.3s",
            }}
            onMouseEnter={(e) =>(e.currentTarget.style.filter = "grayscale(0%)")}
            onMouseLeave={(e) =>(e.currentTarget.style.filter = "grayscale(100%)")}/>
        ))}
      </div>

      {/* CSS keyframes for sliding */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-20%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Slidebar;
