"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

function NavLink({ label, href }: { label: string; href: string }) {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  return (
    <p
      style={{
        color: "#b2bdcd",
        fontWeight: "bold",
        fontSize: "15px",
        cursor: "pointer",
        marginTop: "20px",
        transition: "all 0.3s ease",
        transform: hover ? "translateX(10px)" : "translateX(0px)",
      }}
      onClick={() => router.push(href)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? `-${label}` : label}
    </p>
  );
}

const LastSection = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#061e43",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      {/* Top content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingBottom: "40px",
        }}
      >
        {/* Company info */}
        <div style={{ width: "350px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "10px 0" }}>
            <img
              src="/img/logo.png"
              alt="Logo"
              style={{
                border: "1px solid lightblue",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            <h1
              style={{
                color: "#b2bdcd",
                fontSize: "20px",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
            >
              MATT ACADEMY
            </h1>
          </div>
          <p style={{ color: "#b2bdcd", marginTop: "10px" }}>
            3rd, floor, Pillars Gate, Vadasery, Kanyakumari Dist, Tamil Nadu 629001
          </p>
          <p style={{ color: "#b2bdcd", marginTop: "10px" }}>+91 7305197833</p>
          <p style={{ color: "#b2bdcd", marginTop: "10px" }}>+91 9486178103</p>
          <p style={{ color: "#b2bdcd", marginTop: "10px" }}>matt@mattengg.com</p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "15px",
              fontSize: "20px",
              color: "#b2bdcd",
            }}
          >
            <FaFacebookF />
            <FaWhatsapp />
            <FaInstagram />
            <FaLinkedinIn />
            <BsYoutube />
          </div>
        </div>

        {/* Resource */}
        <div style={{ width: "200px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
          <h1 style={{ color: "#b2bdcd", fontWeight: "bold", fontSize: "20px" }}>Resource</h1>
          <NavLink label="Home" href="/" />
          <NavLink label="About Us" href="/aboutUs" />
          <NavLink label="Contact Us" href="/contacts" />
        </div>

        {/* Courses */}
        <div style={{ width: "200px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
          <h1 style={{ color: "#b2bdcd", fontWeight: "bold", fontSize: "20px" }}>Courses</h1>
          <NavLink label="Python" href="/courses/python-fullstack-development" />
          <NavLink label="MernStack" href="/mern-stack" />
        </div>

        {/* Working hours */}
        <div style={{ width: "200px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
          <h1 style={{ color: "#b2bdcd", fontWeight: "bold", fontSize: "20px", marginBottom: "20px" }}>
            Working Hours
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #b2bdcd",
              paddingBottom: "10px",
              marginBottom: "10px",
            }}
          >
            <p style={{ color: "#b2bdcd" }}>Mon - Fri</p>
            <p style={{ color: "#b2bdcd" }}>9.00AM - 5.00PM</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #b2bdcd",
              paddingBottom: "10px",
              marginBottom: "10px",
            }}
          >
            <p style={{ color: "#b2bdcd" }}>Saturday</p>
            <p style={{ color: "#b2bdcd" }}>10.00AM - 4.00PM</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "#b2bdcd" }}>Sunday</p>
            <p style={{ color: "#b2bdcd" }}>Holiday</p>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 0",
          borderTop: "1px solid #b2bdcd",
          marginTop: "20px",
          color: "#b2bdcd",
          fontWeight: "bold",
          fontSize: "15px",
        }}
      >
        <p>Copyright 2025 MATT. All Rights Reserved.</p>
        <p>Privacy Policy Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default LastSection;
