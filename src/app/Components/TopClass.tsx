'use client'
import React, { useState } from "react";
import { GoPeople } from "react-icons/go";

const cards = [
  {
    image: "/img/md.webp",
    title: "Managing Director",
    content: "Mohammed Shaheer",
  },
  {
    image: "/img/adm.webp",
    title: "Administrator",
    content: "Praveen Mathias",
  },
  {
    image: "/img/pm.webp",
    title: "Project Manager",
    content: "Mohamed Azharuddin",
  },
  {
    image: "/img/sh.webp",
    title: "Software Head",
    content: "Aneesh P Kunjappy",
  },
  {
    image: "/img/hh.webp",
    title: "Hardware Head",
    content: "Ragunathan",
  },
];

const TopClass = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        marginTop: "-40px",
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Button div */}
      <div
        style={{
          margin: "20px",
          padding: "10px 20px",
          color: "#155dfc",
          borderRadius: "25px",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          width: "300px",
          backgroundColor: "#e3f2fd",
        }}
      >
        <GoPeople style={{ fontSize: "20px" }} />
        <h1 style={{ marginLeft: "20px" }}>Our Qualified People Matter</h1>
      </div>

      {/* Heading */}
      <div style={{ margin: "20px" }}>
        <h1 style={{ color: "#1e2939", 
fontSize: "30px", 
fontWeight: "bold" }}>
          Top{" "}
          <span
            style={{
              color: "#155dfc",
              position: "relative",
              display: "inline-block",
            }}
          >
            Class
            <img
              src="/img/title_shape.svg"
              alt="shape"
              style={{
                display: "block",
                margin: "0 auto",
                marginTop: "-5px",
                width: "100px",
                filter:
                  "invert(52%) sepia(84%) saturate(973%) hue-rotate(5deg) brightness(100%) contrast(101%)",
              }}
            />
          </span>{" "}
          Instructors
        </h1>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          width: "100%",
          padding: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              width: "220px",
              height: "300px",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease",
              transform:
                hoverIndex === index ? "translateY(-10px)" : "translateY(0px)",
              boxShadow:
                hoverIndex === index
                  ? "0 6px 12px rgba(0,0,0,0.2)"
                  : "0 3px 6px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                marginTop: "20px",
                marginBottom: "15px",
                backgroundColor:
                  card.content === "Praveen Mathias" ? "#ffe2e2" : "#e2faff",
              }}
            />

            {/* Title + Content */}
            <p style={{ color: "#6a7e9e", fontSize: "14px" }}>{card.title}</p>
            <h1
              style={{
                color: "#082a5e",
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {card.content}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopClass;
