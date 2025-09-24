'use client'
import React, { useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const testimonials = [
  {
    img: "/img/testimonial01.jpeg",
    text: `The course offered strong Python foundations, front-end skills, 
    and backend expertise with Django. Real-world projects made learning
    practical. I now confidently build complete, scalable web 
    applications. Highly recommended!`,
    name: "Jones",
    role: "Python Developer",
  },
  {
    img: "/img/insta5.jpg",
    text: `The Full Stack Development course at MATT is a complete package
    for aspiring developers. It covers both front-end and back-end
    technologies, allowing students to build robust, scalable web 
    applications from scratch.`,
    name: "Aathira",
    role: "Fullstack Developer",
  },
];

const WhatOurStudents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const current = testimonials[currentIndex];

  return (
    <div
      style={{
        marginTop: "-50px",
        width: "100%",
        height: "80vh",
        backgroundColor: "#072655",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      {/* image */}
      <div>
        <img src={current.img} style={{ width: "400px", height: "500px" }} />
      </div>

      {/* content */}
      <div
        style={{
          marginLeft: "30px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center", width: "300px" }}>
          <h1 style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>
            What Our{" "}
            <span
              style={{
                color: "white",
                position: "relative",
                display: "inline-block",
              }}
            >
              Students
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
            Says About Us
          </h1>
        </div>

        {/* quote icon */}
        <img
          src="/img/66.webp"
          style={{
            width: "90px",
            height: "90px",
            color: "#0e65d6",
            marginLeft: "10px",
          }}
        />

        {/* testimonial text */}
        <div
          style={{
            color: "#99a1af",
            fontWeight: "bold",
            fontSize: "18px",
            width: "450px",
            marginTop: "10px",
            marginLeft: "5px",
          }}
        >
          {current.text}
        </div>

        {/* name */}
        <h1
          style={{
            color: "white",
            fontSize: "15px",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          {current.name}
        </h1>
        <p style={{ color: "#99a1af" }}>{current.role}</p>

        {/* pagination arrows */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <IoMdArrowBack
            onClick={handlePrev}
            style={{
              borderRadius: "5px",
              color: currentIndex === 0 ? "#666" : "white", // dim when disabled
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              marginLeft: "20px",
              padding: "10px 10px",
              fontSize: "50px",
            }}
            className="bg-[#24406b] hover:bg-sky-400"
          />

          <IoMdArrowForward
            onClick={handleNext}
            style={{
              borderRadius: "5px",
              color:
                currentIndex === testimonials.length - 1 ? "#666" : "white",
              cursor:
                currentIndex === testimonials.length - 1
                  ? "not-allowed"
                  : "pointer",
              marginLeft: "20px",
              padding: "10px 10px",
              fontSize: "50px",
            }}
            className="bg-[#24406b] hover:bg-sky-400"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatOurStudents;
