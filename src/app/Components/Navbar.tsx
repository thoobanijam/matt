'use client'
import React,{useState} from 'react'
import Image from "next/image";

import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FaTrophy } from "react-icons/fa6";
import { IoIosCode } from "react-icons/io";
import { useRouter } from "next/navigation";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const router = useRouter()
  return (
    <div style={{ width: '100%', 
display: 'flex', 
flexDirection: 'column',
 }}>
      
      {/*  Keyframes for marquee */}
      <style>{`
        @keyframes slideBar {
          0% { transform: translateX(0); }
          100% { transform: translateX(-5%); }
        }
      `}</style>

      {/* Top blue bar with Live Projects row */}
      <div style={{
        width: "100%",
        height: "50px",
        backgroundColor: '#2092ef',
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 20px"
      }}>

        <div style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          position: "absolute",
          animation: "slideBar 20s linear infinite"
        }}>

          {/* First content */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "50px" }}>
          <img src="/img/logo.png" style={{width:'20px',height:'20px'}}/> 
            <h1 style={{ color: 'white', fontWeight: "bold",fontSize:'10px' }}>MATT ACADEMY</h1>
            <div style={{ width: '10px', height: '10px', borderRadius: "50%", backgroundColor: 'white' }}></div>
<h1 style={{ color:'#e4d5d5ff' }}>Live Classess with Industry Mentors</h1>
            <button style={{
              width: '200px',
              border: '1px solid yellow',
              borderRadius: "20px",
              color: '#2092ef',
              padding: '3px 10px',
              backgroundColor: "yellow",
              fontWeight: "bold",
cursor:"pointer",
            }}>
              Next Batch: Sep 5th
            </button>
            <div style={{ width: '10px', height: '10px', borderRadius: "50%", backgroundColor: 'white' }}></div>
            <h1 style={{ color:'#e4d5d5ff' }}>Live Classess with Industry Mentors</h1>
          </div>

          {/* second content */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "50px" }}>
            <h1 style={{ color: 'white', fontWeight: "bold" }}>Live Projects</h1>
            <PiSuitcaseSimpleDuotone style={{ fontSize: '18px', color: 'orange', fontWeight: 'bold' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: "50%", backgroundColor: 'white' }}></div>
            <h1 style={{ color:'#e4d5d5ff' }}>Work On Real Industry Projects</h1>
            <button style={{
              width: '200px',
              border: '1px solid yellow',
              borderRadius: "20px",
              color: '#2092ef',
              padding: '3px 10px',
              backgroundColor: "yellow",
              fontWeight: "bold",
cursor:"pointer",
            }}>
              Hands-on Experience
            </button>
            <div style={{ width: '10px', height: '10px', borderRadius: "50%", backgroundColor: 'white' }}></div>
            <h1 style={{color:'#e4d5d5ff'}}>Portfolio Ready</h1>
          </div>

          {/* 3rd content */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginRight: "50px" }}>
            <FaTrophy style={{ fontSize: '18px', color: 'orange', fontWeight: 'bold' }} />

            <h1 style={{ color: 'white', fontWeight: "bold" }}>Certificates</h1>
            <div style={{ width: '10px', height: '10px', borderRadius: "50%", backgroundColor: 'white' }}></div>
            <h1 style={{ color:'#e4d5d5ff' }}>Industry Recognized Certification</h1>
            <button style={{
              width: '200px',
              border: '1px solid yellow',
              borderRadius: "20px",
              color: '#2092ef',
              padding: '3px 10px',
              backgroundColor: "yellow",
              fontWeight: "bold",
cursor:"pointer",
            }}>
          Career Boost
            </button>
            </div>
        </div>
      </div>

      {/* Navbar with Matt Academy on left and menu on right */}
            <div style={{
        width: '100%',
        height: '80px',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        
        boxShadow: "0 4px 12px gray",
        padding: "0 20px",
        position: "fixed",
        top: "50px",
        left: 0,
        right: 0,
        backgroundColor: "white",
        zIndex: 1000
      }}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
         <img src="/img/logo.png" style={{width:'30px',height:'30px'}}/> 
        <h1 style={{ fontSize: "25px", color: "oklCh(0.21 0.034 264.665)", fontWeight: "bold" ,paddingLeft:'20px',
                fontFamily: "Rowdies, sans-serif",cursor:'pointer'
        }}>MATT ACADEMY  </h1></div>

        <div style={{marginRight:"70px"}}
className="flex items-center gap-8 font-bold text-[16px]">
          <h1 
className="cursor-pointer text-black hover:text-blue-400 
  hover:underline hover:decoration-blue-400"


onClick = { () => router.push("/")}>
            Home
          </h1>

          {/* Dropdown */}
          <div style={{ position: 'relative' }}>
            <h1
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-black hover:text-blue-400 px-3 py-2 
rounded flex items-center gap-1 hover:underline hover:decoration-blue-400 "
            >
              Course <IoIosArrowDown />
            </h1>

            {isOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: "320px",
                paddingBottom:"40px",
                backgroundColor: "white",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                padding: "12px",
                marginTop: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                zIndex: 10
              }}>
                <div style={{ display: "flex", alignItems: "center", 
gap: "20px", marginBottom: "12px",marginTop:"20px" }}>
                  <div style={{
                    backgroundColor: "#255ce0",
                    color: "white",
                    borderRadius: "5px",
                    padding: "4px 8px",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}>
                    <IoIosCode />
                  </div>
                  <p style={{ color: "#101828", fontWeight: "bold", fontSize: "16px" }}>
                    Our Courses
                  </p>
                </div>

                {/* Python */}
                <div style={{ display: "flex", alignItems: "center", 
gap: "25px", marginBottom: "10px", cursor: "pointer",marginTop:"10px" }}
className="bg-transparent px-3 py-2 rounded hover:bg-blue-100">
                  <img src="/img/python.png" alt="Python" 
style={{ width: "35px", height: "35px", }} />
                  <h1 onClick = { () => router.push("/courses/python-fullstack-development")}
style={{ color: "#101828", fontSize: "15px" }}>Python Fullstack</h1>
                </div>

                {/* Mernstack */}
                <div style={{ display: "flex", alignItems: "center", gap: "25px", 
cursor: "pointer",marginTop:"10px" }}
className="bg-transparent px-3 py-2 rounded hover:bg-blue-100">
                  <img src="/img/mern.png" alt="MernStack" 
style={{ width: "35px", height: "35px" }} />
                  <h1 onClick = { () => router.push("/mern-stack")}

style={{ color: "#101828", fontSize: "15px" }}>Mernstack</h1>
                </div>
              </div>
            )}
          </div>

          <h1 onClick = { () => router.push("/aboutUs")}
className="cursor-pointer text-black hover:text-blue-400 
  hover:underline hover:decoration-blue-400"
>
            About Us
          </h1>

          <h1 onClick = { () => router.push("/contacts")}
className="cursor-pointer text-black hover:text-blue-400 
  hover:underline hover:decoration-blue-400"
>
            Contact
          </h1>
        </div>
      </div>
       </div>
  )
}

export default Navbar