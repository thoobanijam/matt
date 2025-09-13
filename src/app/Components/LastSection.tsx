'use client'
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const LastSection = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "70vh",
          backgroundColor: "#061e43",
          marginTop: "450px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* company info */}
        <div
          style={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "300px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <img
              src="/img/logo.png"
              alt="Logo"
              style={{
                border: "1px solid lightblue",
                width: "40px",
                height: "40px",
                objectFit: "contain",
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

          <div style={{ width: "250px", marginTop: "10px" }}>
            <p style={{ color: "#b2bdcd", marginTop: "10px" }}>
              3rd, floor, Pillars Gate,
              <br />
              Vadasery, Kanyakumari Dist,
              <br />
              Tamil Nadu 629001
            </p>
            <p style={{ color: "#b2bdcd", marginTop: "10px" }}>+91 7305197833</p>
            <p style={{ color: "#b2bdcd", marginTop: "10px" }}>+91 9486178103</p>
            <p style={{ color: "#b2bdcd", marginTop: "10px" }}>
              matt@mattengg.com
            </p>

            <div
              style={{
                color: "#b2bdcd",
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                fontSize: "20px",
              }}
            >
              <FaFacebookF />
              <FaWhatsapp />
              <FaInstagram />
              <FaLinkedinIn />
              <BsYoutube />
            </div>
          </div>
        </div>

        {/* resource */}
        <div
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
               marginBottom: "110px", 
          }}
        >
          <h1 style={{ color: "#b2bdcd", fontWeight: "bold", fontSize: "20px" }}>
            Resourse
          </h1>
          <p
            style={{
              color: "#b2bdcd",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              marginTop: "40px",
            }}
          >
            Home
          </p>
          <p
            style={{
              color: "#b2bdcd",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            About Us
          </p>
          <p
            style={{
              color: "#b2bdcd",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Contact Us
          </p>
        </div>

        {/* courses */}
        <div
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "155px",
          }}
        >
          <h1 style={{ color: "#b2bdcd", fontWeight: "bold", fontSize: "20px" }}>
            Courses
          </h1>
          <p
            style={{
              color: "#b2bdcd",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              marginTop: "40px",
            }}
          >
            Python
          </p>
          <p
            style={{
              color: "#b2bdcd",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            MernStack
          </p>
        </div>

        {/* working hours */}
        <div
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              color: "#b2bdcd",
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            Working Hours
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #b2bdcd",
            }}
          >
            <p style={{ color: "#b2bdcd", marginTop: "40px" }}>Mon - Fri </p>
            <p style={{ color: "#b2bdcd", marginTop: "40px" }}>
              9.00AM - 5.00PM
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #b2bdcd",
            }}
          >
            <p style={{ color: "#b2bdcd", marginTop: "40px" }}>Saturday </p>
            <p style={{ color: "#b2bdcd", marginTop: "40px" }}>
              10.00AM - 4.00PM
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #b2bdcd",
              marginTop: "20px",
            }}
          >
            <p style={{ color: "#b2bdcd", marginTop: "20px" }}>Sunday </p>
            <p style={{ color: "#b2bdcd", marginTop: "20px" }}>Holiday</p>
          </div>
        </div>
      </div>

      {/* Horizontal line across the full width */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#b2bdcd",
position:"absolute",
bottom:"-880%"
        }}

      />
<div style={{display:"flex",
justifyContent:"space-between",
paddingLeft:"40px",
paddingRight:"40px",
paddingBottom:"30px",
backgroundColor: "#061e43",}}>
<p style={{color:"#b2bdcd",fontWeight:"bold",fontSize:"15px"}}>
Copyright  2025 MATT. All Rights Reserved.</p>

<p style={{color:"#b2bdcd",fontWeight:"bold",fontSize:"15px"}}> 
Privacy Policy Tearms  & Conditions</p>

</div>
    </>
  );
};

export default LastSection;