'use client'
import React, { useState } from "react";
import { PiNoteDuotone } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { IoMdStar } from "react-icons/io";

const OurFeatured = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const cards = [
    {
      image: "/img/javafull.jpg",
      button: "software Courses",
      content1: "14 Lesson",
      content2: "47 Students",
      title: "Java Fullstack Development",
      rating: 6,
      title1: "M Matt",
    },
    {
      image: "/img/pythonfull.jpg",
      button: "software Courses",
      content1: "14 Lesson",
      content2: "47 Students",
      title: "Python Fullstack Development",
      rating: 6,
      title1: "M Matt",
    },
    {
      image: "/img/phpfull.jpg",
      button: "software Courses",
      content1: "14 Lesson",
      content2: "47 Students",
      title: "PHP Fullstack Development",
      rating: 6,
      title1: "M Matt",
    },
    {
      image: "/img/meanfull.jpg",
      button: "software Courses",
      content1: "14 Lesson",
      content2: "47 Students",
      title: "MEAN Fullstack Development",
      rating: 6,
      title1: "M Matt",
    },
    {
      image: "/img/mernfull.jpg",
      button: "software Courses",
      content1: "14 Lesson",
      content2: "47 Students",
      title: "MERN Fullstack Development",
      rating: 6,
      title1: "M Matt",
    },
    {
      image: "/img/testing.jpg",
      button: "software Courses",
      content1: "14 Lesson",
      content2: "47 Students",
      title: "Testing Development",
      rating: 6,
      title1: "M Matt",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "80vh",
        marginTop: "150px",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#1e2939", fontSize: "30px", fontWeight: "bold" }}>
            Our{" "}
            <span
              style={{
                color: "#155dfc",
                position: "relative",
                display: "inline-block",
              }}
            >
              featured
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
            Courses
          </h1>
        </div>
        <button
          style={{
            padding: "10px 20px",
            color: "#155dfc",
            backgroundColor: "#dbeafe",
            cursor: "pointer",
          }}
        >
          Software Courses
        </button>
      </div>

      {/* Cards Wrapper */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {cards.map((item, index) => (
          <div
            key={index}
            style={{
              width: "30%",
              height: "400px",
              boxShadow: "0px 4px 8px #dcddde",
              borderRadius: "20px",
              backgroundColor: "white",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform:
                hoverIndex === index ? "translateY(-10px)" : "translateY(0px)",
              boxShadow:
                hoverIndex === index
                  ? "0 8px 16px rgba(0,0,0,0.2)"
                  : "0 4px 8px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Image */}
            <div style={{ position: "relative" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "20px 20px 0 0",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  transform:
                    hoverIndex === index ? "scale(1.05)" : "scale(1.0)",
                }}
              />

              {/* Button */}
              <div
                style={{
                  position: "absolute",
                  zIndex: 1,
                  left: "10px",
                  top: "10px",
                  borderRadius: "20px",
                  backgroundColor: "#dbfce7",
                  color: "#237830",
                  padding: "5px 10px",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                {item.button}
              </div>
            </div>

            {/* Info Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                padding: "0 10px",
              }}
            >
              {/* Lessons */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <PiNoteDuotone style={{ color: "#7c8391", fontSize: "20px" }} />
                <h1
                  style={{
                    color: "#7c8391",
                    fontSize: "15px",
                    marginLeft: "8px",
                  }}
                >
                  {item.content1}
                </h1>
              </div>

              {/* Students */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <GoPeople
                  style={{ color: "#7c8391", fontSize: "20px", marginRight: "8px" }}
                />
                <h1 style={{ color: "#7c8391", fontSize: "15px" }}>
                  {item.content2}
                </h1>
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                color: "#1e2939",
                fontSize: "20px",
                fontWeight: "bold",
                margin: "10px",
              }}
            >
              {item.title}
            </h1>

            {/* Rating */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                marginLeft: "10px",
              }}
            >
              {[...Array(5)].map((_, i) => (
                <IoMdStar key={i} style={{ color: "gold", fontSize: "18px" }} />
              ))}
              <span style={{ color: "black", fontSize: "14px" }}>
                ({item.rating})
              </span>
            </div>

            {/* Author */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px",
              }}
            >
              <button
                style={{
                  borderRadius: "25px",
                  padding: "5px 10px",
                  backgroundColor: "#dbeafe",
                  color: "#1576fc",
                  border: "none",
                }}
              >
                M
              </button>
              <h1 style={{ color: "#1576fc", fontSize: "15px" }}>Matt</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeatured;
