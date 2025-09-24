'use client'
import React from 'react'
import { useRouter } from "next/navigation";

import { RiPokerDiamondsLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { AiFillFire } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { RiLayoutLine } from "react-icons/ri";
import { IoTriangleOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";

const MainContent = () => {
  const router = useRouter();

  const btn = [
    { label: "Web Development", onClick: () => router.push("/webdevelopment") },
    { label: "Python",          onClick: () => router.push("/courses/python-fullstack-development") },
    { label: "React", onClick: () => router.push("/mern-stack") },
    { label: "JavaScript", onClick: () => router.push("/webdevelopment") },
    { label: "Django", onClick: () => router.push("/webdevelopment") },
    { label: "HTML", onClick: () => router.push("/webdevelopment") },
    { label: "CSS", onClick: () => router.push("/webdevelopment") },
  ];

  return (
    <div style={{ width: '100%', minHeight: "100vh", backgroundColor: '#f2f8fd',
      display: "flex", justifyContent: "space-between" }}>

      <div style={{ width: "50%", color: '#0a2647', }}>
        {/* circle div pink */}
        <div style={{
          width: "90px", height: "90px", borderRadius: "50%", backgroundColor: "#dfc9d4",
          marginTop: "50px", marginLeft: '130px'
        }}></div>

        {/* floating */}
        <div style={{
          border: '1px solid #bfdaf5', borderRadius: "20px", backgroundColor: '#ecf6fe',
          padding: "15px 25px", width: "250px", zIndex: '1', marginLeft: '50px',
          display: "flex", alignItems: "center", position: 'absolute', top: '180px',
          boxShadow: "0 4px 12px #bfdaf5"
        }}>
          <RiPokerDiamondsLine style={{ color: "yellow", fontSize: "20px", fontWeight: 'bold', }} />
          <div style={{ display: 'flex', flexDirection: "column", }}>
            <RiPokerDiamondsLine style={{ color: "pink", fontSize: "10px", fontWeight: 'bold', }} />
            <RiPokerDiamondsLine style={{ color: "blue", fontSize: "10px", fontWeight: 'bold', }} />
          </div>
          <h1 style={{ color: '#1c274c', marginLeft: '10px', }}>Learn Build. Excel.</h1>
        </div>

        <h1 style={{
          color: "#0a2647", fontSize: "2.5rem", fontWeight: "bold",
          marginLeft: '40px', marginBottom: "0", lineHeight: "1",
        }}>
          Engineering the{" "}
          <span
            style={{
              fontSize: "35px", color: "#1976d2",
              textDecoration: "underline", textDecorationColor: "#1976d2",
              textDecorationThickness: "4px", borderRadius: "1px",
              fontFamily: "monospace", display: "inline-block", whiteSpace: "nowrap",
              overflow: "hidden", borderRight: "5px solid #1976d2", width: "0ch",
              animation: "typing 2s steps(6, end) infinite alternate, blink 0.7s step-end infinite",
            }}
          >
            Future
            <style>{`
              @keyframes typing {
                from { width: 0ch; }
                to { width: 3ch; }
              }
              @keyframes blink {
                from, to { border-color: transparent; }
                50% { border-color: #1976d2; }
              }
            `}</style>
          </span>
        </h1>

        <h1 style={{
          color: "#0a2647", fontSize: "2.5rem", fontWeight: "bold",
          marginLeft: '40px', marginTop: "0",
        }}>
          One Skill at a Time
        </h1>

        <p style={{
          color: "#596e7a", marginTop: "20px", marginLeft: "40px", marginBottom: "0",
          lineHeight: "1", fontSize: "18px",
        }}>
          Master Tomorrow's Technologies Today - With Expert-
        </p>
        <p style={{
          color: "#596e7a", marginLeft: "40px", marginTop: "0", fontSize: "18px",
        }}>
          Led Courses in Software, Hardware, and Emerging Tech.
        </p>

        {/* circle div */}
        <div style={{
          backgroundColor: '#c2fbd5', width: "450px", height: "450px",
          borderRadius: "50%", position: 'absolute', left: '-90px', marginTop: '50px',
        }}></div>

        {/* input div */}
        <div style={{ position: "absolute", width: "35%", zIndex: 1, top: "500px", left: "10px" }}>
          <CiSearch
            style={{
              position: "absolute", left: "50px", top: "50%",
              transform: "translateY(-50%)", color: "gray", fontSize: "20px", cursor: "pointer",
            }}
          />
          <input
            type="text"
            placeholder="Search Courses..."
            style={{
              padding: "20px 20px 20px 50px", color: "gray", width: "100%",
              backgroundColor: "white", border: "1px solid #ccc", borderRadius: "25px",
              marginLeft: "30px",
            }}
          />
        </div>

        {/* fire */}
        <div style={{
          marginLeft: "40px", display: "flex", flexDirection: "column", zIndex: 1,
          position: "absolute", top: "650px"
        }}>
          <div style={{ display: "flex", alignItems: "center", width: "200px" }}>
            <AiFillFire style={{ color: "yellow", fontSize: "25px", animation: "spin 5s linear infinite" }} />
            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
            <p style={{ color: "gray", fontWeight: "bold", marginLeft: "10px" }}>Popular Searches:</p>
          </div>

          {/* BUTTON MAP */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", width: "65%" }}>
            <style>{`
              @keyframes swim {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
                100% { transform: translateY(0px); }
              }
              @keyframes bgMove {
                0% { background-position: 0% 0%; }
                100% { background-position: 100% 0%; }
              }
            `}</style>

            {btn.map((item, index) => {
              const delay = index % 3 === 0 ? "0s" : "1.5s";
              return (
                <button
                  key={index}
                  onClick={item.onClick}
                  style={{
                    borderRadius: "25px",
                    border: "1px solid #eeabbc",
                    color: "#6a7586",
                    padding: "10px 20px",
                    marginTop: "10px",
                    background: "linear-gradient(90deg, #f3f3f3 0%, #d3d1b7 50%, #f3f3f3 100%)",
                    backgroundSize: "200% 100%",
                    animation: `swim 3s ease-in-out infinite, bgWave 5s ease-in-out infinite`,
                    animationDelay: delay,
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* right side div */}
      <div style={{
        width: "50%", position: "relative",
        display: "flex", justifyContent: "center", alignItems: "center",
      }}>
        <img
          src="/img/girl.png"
          alt="Girl"
          style={{ width: "80%", height: "auto", borderRadius: "10px", zIndex: 2 }}
        />
        <TbGridDots style={{ position: "absolute", top: "50px", left: "50px", color: "#ff6b6b", fontSize: "40px" }} />
        <RiLayoutLine style={{ color: "#9810fa", position: "absolute", top: "50px", right: "260px", fontSize: "40px", zIndex: 1 }} />
        <IoTriangleOutline style={{ color: "#1976d2", position: "absolute", top: "150px", right: "80px", fontSize: "40px" }} />

        {/* student box */}
        <div style={{
          width: "130px", height: "180px", border: "1px solid white", borderRadius: "20px",
          backgroundColor: "white", position: "absolute", top: "200px", left: "80px",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 1
        }}>
          <div style={{
            borderRadius: "50%", padding: "20px 20px", backgroundColor: "#d6edd7",
            boxShadow: "0px 4px 10px #d6edd7"
          }}>
            <GoPeople style={{ color: "#4caf50", fontSize: "35px", animation: "spin 9s linear infinite" }} />
          </div>
          <h1 style={{ color: "#77909b", marginTop: "10px", fontWeight: "bold", fontSize: "15px" }}>Total Students</h1>
          <h1 style={{ color: "#0a2647", fontSize: "20px", animation: "pulse 2s ease-in-out infinite" }}>15k+</h1>
        </div>

        {/* graduation box */}
        <div style={{
          width: "130px", height: "180px", border: "1px solid white", borderRadius: "20px",
          backgroundColor: "white", position: "absolute", top: "300px", right: "40px",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 3
        }}>
          <div style={{
            borderRadius: "50%", padding: "20px 20px", backgroundColor: "#b2b7cd",
            boxShadow: "0px 4px 10px #b2b7cd"
          }}>
            <LuGraduationCap style={{ color: "#4caf50", fontSize: "35px", animation: "spin 9s linear infinite" }} />
          </div>
          <h1 style={{ color: "#77909b", fontWeight: "bold", fontSize: "15px", textAlign: "center", lineHeight: "18px" }}>
            Complete Graduation
          </h1>
          <h1 style={{ color: "#0a2647", fontSize: "25px", animation: "pulse 2s ease-in-out infinite" }}>34k+</h1>
        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default MainContent
