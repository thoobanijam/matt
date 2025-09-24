"use client";

import { MdOutlineMessage } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import React, { useState } from "react";
import { MdOutlineSend } from "react-icons/md";

export default function Message() {
  const [message, setMessage] = useState(false);
  const [robo, setRobo] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        top: "390px",
        right: "15px",
        zIndex: 1000,
      }}
    >
      {/* Main toggle button */}
      <MdOutlineMessage
        onClick={() => setMessage(!message)}
        style={{
          color: "white",
          fontSize: "60px",
          backgroundColor: "#1976d2",
          borderRadius: "50%",
          padding: "15px",
        marginTop:"170px",
          cursor: "pointer",
        }}
      />

      {message && (
        <div
          style={{
            position: "absolute",
            bottom: "33%",
            right: "10px",
            zIndex: 1000,
          }}
        >
          {/* Show chatbot image if robo is false */}
          {!robo && (
            <img
              onClick={() => setRobo(true)}
              src="/img/chatbot.png"
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#1976d2",
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
                marginBottom: "20px", // space before WhatsApp icon
marginLeft:"250px"              
}}
            />
          )}

          {/* Show chatbox if robo is true */}
          {robo && (
            <div
              style={{      position: "fixed", // make it fixed
      bottom: "80px",    // position above bottom (WhatsApp icon is at 20px)
      right: "5px",
      width: "320px",
      height: "430px",
      borderRadius: "10px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      backgroundColor: "#f5f5f5",
      zIndex: 1001,      // higher than WhatsApp (1000)
     

              }}
            >
              <HiX
                onClick={() => setRobo(false)}
                style={{
                  fontSize: "35px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "5px",
                  position: "absolute",
                  top: "-15px",
                  right: "-15px",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              />

              <h1
                style={{
                  border: "1px solid #1975d1",
                  padding: "10px",
                  fontWeight: "bold",
                  backgroundColor: "#1976d2",
                  color: "white",
                  borderRadius: "3px",
                }}
              >
                <span
                  style={{
                    color: "#1976d2",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "5px",
                    fontSize: "15px",
                    marginRight: "15px",
                  }}
                >
                  S
                </span>
                Support Chat
              </h1>

              <div
                style={{
                  borderRadius: "10px",
                  width: "200px",
                  color: "gray",
                  backgroundColor: "white",
                  padding: "10px",
                  margin: "10px",
                  fontSize: "13px",
                }}
              >
                Hello! My Name is Sun. How can I help you?
              </div>
<div
  style={{marginTop:"230px",
    display: "flex",
    alignItems: "center",
    padding: "20px",
    gap: "10px", // space between input and button
  }}
>
  <form
    action=""
    method="POST"
    style={{
      display: "flex",
      alignItems: "center",
      width: "100%", // makes input take full width if needed
      gap: "10px",
    }}
  >
    <input
      type="text"
      placeholder="Type your message"
      style={{
        flex: 1, // input grows to fill available space
        border: "1px solid #a2a2a2",
        borderRadius: "25px",
        padding: "10px 20px",
        backgroundColor: "white",
        fontSize: "14px",
      }}
    />
    <button
      type="submit"
      style={{
        border: "none",
        background: "none",
        cursor: "pointer",
      }}
    >
      <MdOutlineSend
        style={{
          color: "#ffffff",
          backgroundColor: "#1976d2",
          borderRadius: "50%",
          padding: "8px",
          fontSize: "30px",
        }}
      />
    </button>
  </form>
</div>

            </div>
          )}

<div style={{width:"50px",
marginLeft:"250px"
}}>         
          <a
            href="https://web.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                            marginTop: "10px",
            }}
          >
            <ImWhatsapp
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                fontSize: "45px",
                borderRadius: "50%",
                padding: "10px",
                cursor: "pointer",
              }}
            />
          </a></div>
        </div>
      )}
    </div>
  );
}


