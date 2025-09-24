import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { PiPuzzlePieceFill } from "react-icons/pi";
import { HiMiniMicrophone } from "react-icons/hi2";



export const products = {
  Frontend: { 
image: "/img/front.jpg"
icon:<FaHeart />
description: "Front Web Development", 
content:"30 courses",
    
  },
  webSecurity: { 
image: "/img/car.jpg"
icon:<BsGlobeCentralSouthAsia />

description: "Web Security & Performance", 
content:"24 courses",

  },
  Backend: { 
    image: "/img/backend.jpg"
icon:<PiPuzzlePieceFill />
description: "Backend Web Development", 
content:"12 courses",
  },
  
Fullstack: { 
    image: "/img/fullstack.webp"
icon:<HiMiniMicrophone />

description: "Full-Stack Web Development", 
content:"18 courses",  },
 
};
export default function SlugPage({ params }) {
  const slug = params.slug[0];
  const product = products[slug];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
<Image
        src={product.image}   // path from public folder
        alt={product.name}
        width={400}
        height={300}
      />
      <h1>{product.icon}</h1>
      <p>{product.description}</p>
      
    </div>
  );
}
