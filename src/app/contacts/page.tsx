import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const adds = [
  {
    icon: <FaMapMarkerAlt />,
    content: "3rd floor, Pillars Gate, Vadasery, Kanyakumari Dist, Tamil Nadu 629001",
  },
  {
    icon: <FaPhone />,
    content: "+91 7305197833, +91 9486178103",
  },
  {
    icon: <MdEmail />,
    content: "matt@mattengg.com",
  },
];
export default function Contacts() {

return (
    <>
<div style={{ marginTop: "130px", width: "100%", height: "450px", position: "relative" }}>
        <img src="/img/breadcrumb_bg.jpg" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "300px", backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1 }} />
        <div style={{ position: "absolute", top: "50px", left: "20px", zIndex: 2 }}>
          <h1 style={{ color: "#171717", fontSize: "40px", fontWeight: "bold", padding: "10px" }}>About Us</h1>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <h1 style={{ color: "#171717", paddingLeft: "20px" }}>Matt</h1>
            <IoIosArrowForward style={{ color: "#b6cff5" }} />
            <h1 style={{ color: "#b6cff5" }}> About Us</h1>
          </div>
        </div>
      </div>  

{/* keep in touch  */}
<div style={{display:"flex",
justifyContent:"space-between",
alignItems:"center",
width:"100%",
height:"100vh",
padding:"120px",}}>
{/* left */}

<div style={{
width:"50%",}}>
<h1 style={{color:"#0a2540",
fontSize:"40px",
fontWeight:"bold",
padding:"10px",
letterSpacing:"-1px"}}>Keep In Touch With Us</h1>
<p style={{width:"450px",
marginTop:"10px"}}>Reach out to us for course details, support, or any collaboration opportunities.

</p>
    <div style={{ display: "flex", 
width: "100%",flexDirection:"column" }}>
      {adds.map((add, index) => (
        <div
          key={index}
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            
            padding: "15px",
            borderRadius: "10px",
gap:"40px"
          }}
        >
          {/* Icon */}
          <div
            style={{
              fontSize: "20px",
              color: "white",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#1976d2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "40px",
              minHeight: "40px",
            }}
          >
            {add.icon}
          </div>

          {/* Content */}
          <p style={{ color: "#0a2540", margin: 0 }}>{add.content}</p>
        </div>
      ))}
    </div>

{/* map div closed from above */}
</div>

{/* right  */}
<form style={{ width: '40%', padding: '20px',

backgroundColor:"#f8f9fa", }}>

<h1 style={{color:"#0a2540",
fontSize:"40px",
fontWeight:"bold",
padding:"10px",
letterSpacing:"-1px"}}>Get in Touch</h1>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px',
marginTop:"20px" }}>
    
    <div style={{ display: 'flex', 
justifyContent: 'space-between', 

gap: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        style={{ width: '45%', border: '1px solid #c4c4c4', borderRadius:"5px",
padding: '20px', color: 'gray', height: '60px',backgroundColor:"white" }}
      />
      <input
        type="text"
        placeholder="Email**"
        style={{ width: '45%', border: '1px solid #c4c4c4', borderRadius:"5px", padding: '20px', 
color: 'gray', height: '60px',backgroundColor:"white" }}
      />
    </div>

    
    <div style={{ display: 'flex', justifyContent: 'space-between',
 gap: '20px' }}>
      <input
        type="text"
        placeholder="Phone"
        style={{ width: '45%', border: '1px solid #c4c4c4', borderRadius:"5px", padding: '20px',
 color: 'gray', height: '60px',backgroundColor:"white" }}
      />
      <input
        type="email"
        placeholder="Subject"
        style={{ width: '45%', border: '1px solid #c4c4c4', borderRadius:"5px", padding: '20px', 
color: 'gray', height: '60px',backgroundColor:"white" }}
      />
    </div>
<div style={{ display: "flex", flexDirection: "column" }}>
                                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  style={{
                    width: "100%",
                   border: '1px solid #c4c4c4',
 borderRadius:"5px",                    padding: "15px",
                    borderRadius: "10px",
                    resize: "none",
backgroundColor:"white"
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  backgroundColor: "#1976d2",
                  color: "white",
                  border: "none",
                  padding: "15px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  cursor: "pointer",
                  width: "200px",
                  alignSelf: "flex-start",
                }}
              >
                Send Message
              </button>
            </div>
          </form> 

{/*form finshed */}

</div>
{/*location  */}
<div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70px", 
}}>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
flexDirection:"column",
     
      boxShadow: "0px 4px 8px #d1d1d1",
      width: "95%",
      height: "70px",
      padding: "20px",
margin:"20px"
    }}
  >
 <h1 style={{color:"#272727",
fontSize:"20px",padding:"10px"}}>MATT ENGINEERING SOLUTIONS</h1>  
<p style={{color:"#7f679f",padding:"10px"}}>3rd Floor, Pillars gate, Opposite to Anna stadium, Vadasery, Nagercoil, Tamil Nadu 629001, India

</p>  
</div>
</div>
{/*map address */}
<div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh", 
marginTop:"70px"
}}>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
flexDirection:"column",
height: "70vh", 
     
   
      width: "95%",
      
      
margin:"20px"
    }}
  ><img src="/img/map.png"
style={{width:"100%",
height:"100%",
border:"none"}}/>
 </div>
</div></>
);
}
