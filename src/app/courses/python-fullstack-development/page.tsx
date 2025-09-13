'use client'
import React, { useState } from "react";

import { FaTrophy } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";



export default function PythonFullstackDevelopment() {
  const [checked, setChecked] = useState(false);

  const CheckMark = () => {
    setChecked(!checked);
  };

   const [showMore, setShowMore] = useState(false);
  const [showMoreOne, setShowMoreOne] = useState(false);
   const [pythonpara , setPythonPara ] = useState(false);


const fields = ["Name", "Email", "Phone No.", "Your Subject","Message"];

const program = [
  {
    title: "Program Structure",
    points: [
      "Designed for freshers and early career professionals",
      "100+ Hours of Expert Video Content",
      "Dedicated Program Support",
      "Network with people of similar interests",
      "Comprehensive curriculum and hands-on learning",
    ],
  },
  {
    title: "Dedicated Career Support",
    points: [
      "1:1 mock interviews with industry experts",
      "Career mentorship with industry experts",
      "Access to 150+ job postings every month",
      "Personalised Resume & LinkedIn Review",
      "Break into in-demand Data Science roles with guaranteed job opportunities",
    ],
  },
];const pythons = [
  {
    id: 1,
    title: "Python & Advanced Python",
    icon: <IoIosArrowDown />,
    content:
      "PyCharm, Language Fundamentals, Input-Output, Operators, Conditional Statements, Looping, Control Statements, Functions, Modules, String Manipulation, Lists, Tuple, Set, Dictionaries, File Operations, OOPS Concepts, Regular Expressions, Functional Programming, Map, Reduce, Filter, Iter tools, list comprehension",
  },
  {
    id: 2,
    title: "SQL",
    icon: <IoIosArrowDown />,
    content:
      "Database fundamentals, SQL queries, joins, subqueries, stored procedures, and database optimization techniques.",
  },
  {
    id: 3,
    title: "EDA & Data Visualization",
    icon: <IoIosArrowDown />,
    content:
      "Exploratory Data Analysis, statistical analysis, data cleaning, matplotlib, seaborn, plotly for creating interactive visualizations.",
  },
  {
    id: 4,
    title: "Supervised Learning",
    icon: <IoIosArrowDown />,
    content:
      "Linear regression, logistic regression, decision trees, random forests, SVM, ensemble methods, and model evaluation.",
  },
  {
    id: 5,
    title: "Unsupervised Learning",
    icon: <IoIosArrowDown />,
    content:
      "K-means clustering, hierarchical clustering, PCA, t-SNE, association rules, and anomaly detection.",
  },
  {
    id: 6,
    title: "Natural Language Processing & Model Deployment",
    icon: <IoIosArrowDown />,
    content:
      "Text preprocessing, tokenization, sentiment analysis, NER, model deployment using Flask, Docker, and cloud platforms.",
  },
  {
    id: 7,
    title: "Deep Learning & AI",
    icon: <IoIosArrowDown />,
    content:
      "Neural networks, CNN, RNN, LSTM, transfer learning, and building AI applications with TensorFlow and PyTorch.",
  },
  {
    id: 8,
    title: "Gen AI",
    icon: <IoIosArrowDown />,
    content:
      "Generative AI, GPT models, prompt engineering, fine-tuning, and building AI-powered applications.",
  },
];


  return (
<>
    <div
      style={{
        width: "100%",
        height: "110vh",
        backgroundColor: "#b269f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <h1
        style={{
          color: "#6f05ab",
          fontSize: "40px",
          fontWeight:"bold"
        }}
      >
        PYTHON FULL STACK
      </h1>

      <p
        style={{
          width: "65%",
          
          color: "white",
          marginTop: "20px",
          fontSize:"25px"
        }}
      >
        Luminar Technolab provides best DATA SCIENCE - ML - AI - &amp; TABLEAU
        Training with 100% Job Placement assistance. Get trained from industry
        experts &amp; start your IT career.
      </p>
{/* trophy */}
<div style={{display:"flex",
width:"35%",
flexDirection:"row",
gap:"20px",
marginTop:"40px",
alignItems:"center",
justifyContent:"center",
}}>
<h1 style={{fontWeight:"bold",
color:"white",
fontSize:"25px"}}>7 months
</h1>
<FaTrophy style={{color:"gold",
fontSize:"25px"}}/>
<h1 style={{fontWeight:"bold",
color:"white",
fontSize:"25px"}}>100% anzil worth
</h1>
<FaTrophy style={{color:"gold",
fontSize:"25px"}}/></div>


{/* button div */}

  <div
    style={{
      borderRadius: "35px",
      backgroundColor: "#6f11b3",
      padding: "15px 30px",
      marginTop: "30px",
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      cursor: "pointer",
      justifyContent: "center",
      alignItems: "center",
    }}
    className="w-[40%] hover:w-[45%] transition-all duration-300"

  >
    <IoIosStar style={{ color: "white", fontSize: "25px" }} />
    <h1 style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}>
      $1000 Admission Fees just 
    </h1>
    <IoIosStar style={{ color: "white", fontSize: "25px" }} />
  </div>
</div>   {/*  fixed: closes the top purple section properly */}


{/*what you'll learn  */}
{/*navbar div  */}
<div style={{
width:"100%",
height:"90px",
}}>

<div
  style={{
    width: "50%",
    height: "60px",
    borderRadius: "30px",
    marginTop: "20px",
    marginLeft:"45%",
    zIndex: 10000,       
    boxShadow: "0 4px 12px #dadbdc",
    position:"sticky",
    top:"150px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"15px",
    gap:"35px",
    cursor:"pointer",

  }}
>
  {/* content here */}

<h1
  style={{borderRadius: "20px",padding: "10px 20px"}}
  className="bg-[#f5f5f5] hover:bg-[#8001bc] 
transition-colors duration-300 text-[#364153] hover:text-white"
>
  Overview
</h1>

<h1 style={{borderRadius: "20px",padding: "10px 20px"}}
  className="bg-[#f5f5f5] hover:bg-[#8001bc] 
transition-colors duration-300 text-[#364153] hover:text-white"
>
Modules</h1>

<h1 style={{borderRadius: "20px",padding: "10px 20px"}}
  className="bg-[#f5f5f5] hover:bg-[#8001bc] 
transition-colors duration-300 text-[#364153] hover:text-white"
>
Features</h1>

<h1 style={{borderRadius: "20px",padding: "10px 20px"}}
  className="bg-[#f5f5f5] hover:bg-[#8001bc] 
transition-colors duration-300 text-[#364153] hover:text-white"
>
Trainers</h1>

<h1 style={{borderRadius: "20px",padding: "10px 20px"}}
  className="bg-[#f5f5f5] hover:bg-[#8001bc] 
transition-colors duration-300 text-[#364153] hover:text-white"
>
Review</h1>
</div></div>

{/*apply now  */}
<div style ={{display:"flex",
justifyContent:"space-between",
padding:"20px",
width:"100%",
height:"420vh",
backgroundColor:"#f9fafb",
marginBotom:"120vh",



}}>
{/* left side  */}
<div
  style={{
    width: "25%",
    minHeight: "75vh",   
    maxHeight: showMore ? "100vh" : "75vh",     
    border: "4px solid #c7a0e9",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px #dadbdc",
    overflow: "hidden", 
position: "sticky",  
    top: "20px",
  }}
>

<button
  style={{width:"250px",
height:"50px",
    color: "white",
    backgroundColor: "#8600e1",
    padding: "10px 20px",
    borderRadius:"15px",
    marginTop:"10px",
    boxShadow: "0 4px 12px #8600e1",
  }}
>
  APPLY NOW
</button>

{/* trophy */}
<div style={{display:"flex",flexDirection:"row",
alignItems: "center",marginTop: "20px",gap: "10px"}}>
<FaTrophy style={{color:"gold",fontSize:"15px"}}/>
<h1 style={{color:"#4a5565",fontSize:"15px"}}>100% Placement assistance</h1>
<FaTrophy style={{color:"gold",fontSize:"15px"}}/>
</div>

{/*duration*/}
<div style={{width:"100%",display:"flex",
justifyContent:"space-between",padding:"20px"}}>
<h1 style={{color:"#747d89",fontSize:"15px"}}>Duration</h1>
<p style={{color:"#101828",fontSize:"15px",fontWeight:"bold"}}>7 Months</p>
</div>

{/* session */}
<div style={{width:"100%",display:"flex",
justifyContent:"space-between",padding:"20px"}}>
<h1 style={{color:"#747d89",fontSize:"15px"}}>Session Duration</h1>
<p style={{color:"#101828",fontSize:"15px",fontWeight:"bold"}}>2 Hours/day</p>
</div>

{/*class schedule */}
<div style={{width:"100%",display:"flex",
justifyContent:"space-between",padding:"20px"}}>
<h1 style={{color:"#747d89",fontSize:"15px"}}>Class Schedule</h1>
<p style={{color:"#101828",fontSize:"15px",fontWeight:"bold"}}>Monday to Friday</p>
</div>

{/* mode */}
<div style={{width:"100%",display:"flex",
justifyContent:"space-between",padding:"20px"}}>
<h1 style={{color:"#747d89",fontSize:"15px"}}>Mode</h1>
<p style={{color:"#101828",fontSize:"15px",fontWeight:"bold"}}>Offline/Online</p>
</div>

{/* enroll */}
<div style={{width:"100%",display:"flex",
justifyContent:"space-between",padding:"20px"}}>
<h1 style={{color:"#747d89",fontSize:"15px"}}>Enrolled</h1>
<p style={{color:"#101828",fontSize:"15px",fontWeight:"bold"}}>1800+</p>
</div>

{/* show more */}
<div onClick={() => setShowMore(!showMore)}
  style={{color: "#b24dfb",display: "flex",
justifyContent: "center",alignItems: "center",
cursor: "pointer",flexDirection: "column"}}
>
  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    {showMore ? "Show Less" : "Show More"} 
    <IoIosArrowDown />
  </div>

  {showMore && (
    <div style={{ width: "100%", marginTop: "10px", display: "flex",
 flexDirection: "column" }}>
      {/* Certification */}
      <div style={{ display: "flex", justifyContent: "center",
 alignItems: "center", padding: "20px",gap:"50px" }}>
        <h1 style={{ color: "#747d89", fontSize: "15px" }}>Certification</h1>
        <p style={{ color: "#101828", fontSize: "15px", fontWeight: "bold" }}>Industry Recognized</p>
      </div>

      {/* Project Work */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", 
padding: "20px",gap:"80px",}}>
        <h1 style={{ color: "#747d89", fontSize: "15px" }}>Project Work</h1>
        <p style={{ color: "#101828", fontSize: "15px", fontWeight: "bold" }}>5+ Live Projects</p>
      </div>

      {/* Mentorship */}
      <div style={{ display: "flex", justifyContent: "center", 

alignItems: "center", 
padding: "20px",gap:"120px" }}>
        <h1 style={{ color: "#747d89", fontSize: "15px" }}>Mentorship</h1>
        <p style={{ color: "#101828", fontSize: "15px",fontWeight: "bold" }}>

1:1 Support</p>
      </div>
    </div>
  )}
</div>
</div> {/*  closes left card */}


{/*right side  */}
<div style={{
        width: "70%",
        minHeight: "60vh",maxHeight: showMoreOne ? "120vh" : "60vh",
        border: "1px solid black",
        borderRadius: "25px",
        padding:"30px",
        display:"flex",flexDirection:"column",
        backgroundColor:"#ffffff",
boxShadow: "0 4px 12px #dadbdc", 
      }}
>
<div style={{width:"100%"}}>
  <h1 style={{color: "#101828",fontSize: "30px",fontWeight: "bold"}}>
    What you'll learn
  </h1>

  <h1
        style={{
          width: "95%",
          color: "#364153",
          marginTop: "30px",
        }}
      >
        Machine learning is a data analysis method that is used to automate
        analytical model building. It is a subset of Artificial Intelligence
        (AI) and focuses on analyzing structures and patterns in data to allow
        reasoning, learning, and decision-making without human interactions. In
        simple terms, Machine learning will let the user feed large volumes of
        data to a computer algorithm and make the device process the data to
        offer recommendations that are data-driven and decisions that are only
        based on the data offered.
      </h1>

  {/* comprehensive */}
  <div style={{ display: "flex",
justifyContent: "space-between",
paddingLeft:"30px"}}>
    {/* left */}
    <div style={{
border:"1px solid #dbfce7",

borderRadius:"10px",
width:"45%",
height:"50px",
backgroundColor:"#f0fdf4",
color:"#4a5565",
alignItems:"center",
display:"flex",
flexDirection:"row",
paddingLeft:"30px",
marginTop:"20px"}}>
<IoIosArrowForward style={{ color: "#00cc8a",marginRight:"-10px" }} />
      <IoIosArrowForward style={{ color: "#00cc8a" }} />
      <h1>Comprehensive Curriculum</h1>
    </div>

    {/* right */}
    <div style={{border:"1px solid #dbfce7",borderRadius:"10px",width:"45%",height:"50px",
      backgroundColor:"#f0fdf4",color:"#4a5565",alignItems:"center",display:"flex",
      flexDirection:"row",paddingLeft:"30px",marginTop:"20px"}}>
      

       <IoIosArrowForward style={{ color: "#00cc8a",
marginRight:"-10px" }} />
      <IoIosArrowForward style={{ color: "#00cc8a" }} />
      <h1>Comprehensive Curriculum</h1>
    </div>
  </div>

{/*show more */}
<div onClick={() => setShowMoreOne(!showMoreOne)}
  style={{color: "#b24dfb",
display: "flex",
justifyContent: "center",
marginTop:"30px",
cursor: "pointer",
flexDirection: "column"}}
>
  <div style={{ display: "flex",gap: "5px",alignItems:"center",
    borderBottom:"1px solid #f3f4f6",paddingBottom:"30px"}}>
    {showMoreOne ? "Show Less" : "Show More"} 
    <IoIosArrowDown />
  </div>

  {showMoreOne && (
<>
  <div style={{ display: "flex", 
justifyContent: "space-between",
marginTop:"20px",
paddingLeft:"30px"}}>
        {/* left side */}
        <div
          style={{border:"1px solid #dbfce7",
            borderRadius: "10px",
            width: "45%",
            height: "50px",
            backgroundColor: "#f0fdf4",
            color: "#4a5565",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
           paddingLeft:"30px",
marginTop:"20px"
          }}
        >
          <IoIosArrowForward style={{ color: "#00cc8a",marginRight:"-10px" }} />
          <IoIosArrowForward style={{ color: "#00cc8a" }} />
          <h1>Hands-on Projects</h1>
        </div>

        {/* right side */}
        <div
          style={{border:"1px solid #dbfce7",
            borderRadius: "10px",
            width: "45%",
            height: "50px",
            backgroundColor: "#f0fdf4",
            color: "#4a5565",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
           paddingLeft:"30px",
marginTop:"20px"
          }}
        >
          <IoIosArrowForward style={{ color: "#00cc8a",marginRight:"-10px" }} />
          <IoIosArrowForward style={{ color: "#00cc8a" }} />
          <h1>Industry MentorShip</h1>
        </div>
      </div>
{/*2nd comprehensive  */}
<div style={{ display: "flex", 
justifyContent: "space-between",
marginTop:"20px",
paddingLeft:"30px"}}>
        {/* left side */}
        <div
          style={{border:"1px solid #ffedd4",
            borderRadius: "10px",
            width: "45%",
            height: "50px",
            backgroundColor: "#fff7ed",
            color: "#4a5565",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
           paddingLeft:"30px",
marginTop:"20px"
          }}
        >
          <IoIosArrowForward style={{ color: "#ff6e17",marginRight:"-10px" }} />
          <IoIosArrowForward style={{ color: "#ff6e17" }} />
          <h1>career Guidance</h1>
        </div>

        {/* right side */}
        <div
          style={{border:"1px solid #ffedd4",

            borderRadius: "10px",
            width: "45%",
            height: "50px",
            backgroundColor: "#fff7ed",
            color: "#4a5565",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
           paddingLeft:"30px",
marginTop:"20px"
          }}
        >
          <IoIosArrowForward style={{ color: "#ff6e17",marginRight:"-10px" }} />
          <IoIosArrowForward style={{ color: "#ff6e17" }} />
          <h1>Portfolio Development</h1>
        </div>

      </div>
<div style={{ padding: "20px" }}>
  <h1
    style={{
      color: "#101828",
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "12px",
    }}
  >
    Course Highlights
  </h1>

  <ul
    style={{
      color: "#364153",
      fontSize: "15px",
      lineHeight: "1.8",
      paddingLeft: "20px",       
listStyleType: "disc", 
    }}
  >
    <li>Learn supervised and unsupervised machine learning algorithms</li>
    <li>Master popular ML libraries like scikit-learn, TensorFlow, and PyTorch</li>
    <li>Work on real-world datasets and business problems</li>
    <li>Build and deploy machine learning applications</li>
  </ul>
</div>


</>
  )}

</div></div>
{/*closed upto show more  COURSE CONTENT START  */}
<div style={{dispaly:"flex",
border:"1px solid black",
borderRadius:"25px",
width:"100%",
height:"165vh",
padding:"30px",
backgroundColor:"white",
marginTop:"70px",
boxShadow: "0 4px 12px #dadbdc", }}>

<h1 style={{fontSize:"23px",
fontWeight:"bold",
color:"#101828"}}>Course Content</h1>

{/*python andvaced python  */}
{pythons.map((python,index) => (

<div 
key={index}
style={{display:"flex",
flexDirection:"column",
border:"1px solid #e5e7eb",
borderRadius:"15px",

margin:"20px",}}>

<div style={{display:"flex",
justifyContent:"space-between",
cursor:"pointer",
margin:"10px",
padding:"10px"}}
onClick={() => 
setPythonPara(pythonpara === index ? null : index)}>

<h1 style={{color:"#9810fa",
fontWeight:"bold",
fontSize:"18px"}}>0{python.id} . {python.title}</h1>
{python.icon}
</div>

{pythonpara == index && (
<div 
style={{ margin: "8px", color: "#555",padding:"18px" }}>
{python.content}</div>  
)}
</div>
))}
<div style={{width:"100%",
height:"80px",
padding:"20px",
border:"1px solid #f3e8ff",
backgroundColor:"#f3f5fe",
display:"flex",
justifyContent:"space-between",
borderRadius:"10px",
alignItems:"center"
}}>
<h1 style={{color:"#101828",
fontWeight:"bold",
fontSize:"18px"}}>Complete Curriculum</h1>
<p style={{color:"#981efa",
fontWeight:"bold",
fontSize:"25px"}}>8</p>
</div>{/*-----------------div closed--------*/}
{/*python closed  */}

</div>
{/*COURSES CONTENT END  */}

{/*program sturcture start */}
<div
      style={{
        border: "1px solid black",
        borderRadius: "25px",
        width: "100%",
        padding: "20px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between", 
        marginTop: "25px",
        boxShadow: "0 4px 12px #dadbdc",
       gap:"20px"
    
      }}
    >
      {program.map((prog, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "48%", 
          }}
        >
          <h1 style={{ color: "#101828", fontWeight: "bold", fontSize: "18px" }}>
            {prog.title}
          </h1>

          {prog.points.map((point, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
                alignItems: "flex-start",
              }}
            >
              <IoIosArrowForward style={{ color: "#00cc8a", marginRight: "-8px" }} />
              <IoIosArrowForward style={{ color: "#00cc8a", marginRight: "-10px" }} />
              <p style={{marginLeft:"20px"}}>{point}</p>
            </div>
          ))}
        </div>
      ))}
    </div>

  
{/*program sturcture closed  */}

{/* for enquiry contact start skeela yirunthu */}

<div style={{width:"100%",
height:"130vh",
border:"1px solid black",
borderRadius:"20px",
padding:"30px",
marginTop:"30px",
backgroundColor:"white",
display:"flex",
justifyContent:"center",
alignItems:"center",
flexDirection:"column",
}}>

<h1 style={{color:"#101828",
fontWeight:"bold",
fontSize:"23px",
marginTop:'60px',
}}>For Enquiry You Can Contact</h1>
{/* input start */}
<div style={{ marginTop: "20px", width: "80%", padding: "20px" }}>
  {fields.map((field, index) => (
    <div key={index} style={{ marginBottom: "20px" }}>
      {field === "Message" ? (
        <textarea
          placeholder={` ${field}`}
          style={{
            width: "100%",
            border: "none",
            borderBottom: "1px solid #ccc",
            padding: "8px 0",
            outline: "none",
            fontSize: "16px",
            minHeight: "100px", // height increased only for message
            resize: "vertical", // allow user to resize if needed
          }}
        />
      ) : (
        <input
          type="text"
          placeholder={` ${field}`}
          style={{
            width: "100%",
            border: "none",
            borderBottom: "1px solid #ccc",
            padding: "8px 0",
            outline: "none",
            fontSize: "16px",
          }}
        />
      )}
    </div>
  ))}
</div>
{/*input close mealavarikum  */}
<p style={{ fontSize: "14px", color: "#333",width:"55%" }}>
  By registering I accept the{" "}
  <span style={{ color: "#9810fa", cursor: "pointer" }}>TnC</span> and{" "}
  <span style={{ color: "#9810fa", cursor: "pointer" }}>Privacy Policy</span> of the website 
  and give my consent to send me updates via Messages/Email *
</p>


{/* check mark keela  */}
<div style={{display:"flex",
flexDirection:"row",
border:"1px solid #d1d5dc",
padding:"15px",
borderRadius:"10px",
width:"50%",
justifyContent:"center",
marginTop:"15px"
}}>

    <div
      style={{
        display: "flex",
        
        cursor: "pointer",
        gap: "10px",
      }}
      onClick={CheckMark}
    >
      {/* checkbox toggle */}
      {checked ? (
        <MdCheckBox style={{ color: "#0075ff", fontSize: "22px" }} />
      ) : (
        <MdCheckBoxOutlineBlank style={{ color: "#0075ff", fontSize: "22px" }} />
      )}
<p 
style={{color:"#364153",
fontSize:"14px"}}
>i'm not robot</p>
<div style={{ color: "#364153", fontSize: "12px" }}>
  <p style={{ margin: 0 }}>reCAPTCHA</p>
  <p style={{ margin: 0, color: "#99a1af" }}>Privacy - Terms</p>
</div>


<FaRegCircle style={{color:"white",padding:"5px 5px", 
borderRadius:"50%",
backgroundColor:"#2b7fff",
fontSize:"25px",
}} />


</div>  </div>

{/* check mark closed meala varikum  */}

{/*button kela yirunthu */}
<div 
style={{color:"white",
width:"55%",
borderRadius:"30px",
marginTop:"20px",
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"15px 20px",
fontWeight:"bold",
backgroundColor: checked ? "#8800e3" : "#c883f8", 
transition: "0.3s ease",

}}>
<h1 style={{marginRight:"10px"}}>
CONTACT NOW</h1>
<IoIosArrowForward style={{ color: "white", marginRight: "-9px" }} />
 <IoIosArrowForward style={{ color: "white", marginRight: "-10px" }} />

</div>

{/*button mela varaikum */}
</div>

{/* for enquiry contact closed meala varikum */}


</div> {/* closes right side card */}
</div> {/*  closes apply-now flex container */}
 {/*  closes navbar wrapper */}
</>
  );
}
{/*without any changing of coding measurment alignment coding just give enitre coding that i need last section component go last and out of green div  */}
