import React from "react";
import Image from "next/image";

const products = {
  laptop: { 
    name: "Laptop", 
    description: "A fast and powerful laptop.", 
    image: "/img/laptop.jpg"   
  },
  phone: { 
    name: "Phone", 
    description: "A smartphone with great features.", 
    image: "/img/phone.webp" 
  },
  tv: { 
    name: "TV", 
    description: "A smart TV with 4K display.", 
    image: "/img/tv.jpg" 
  },
};

export default function SlugPage({ params }) {
  const slug = params.slug[0];
  const product = products[slug];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Image
        src={product.image}   // path from public folder
        alt={product.name}
        width={400}
        height={300}
      />
    </div>
  );
}
