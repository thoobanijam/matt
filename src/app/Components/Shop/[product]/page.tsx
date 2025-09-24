'use client';   import React from "react";
import Image from "next/image";
import { products } from "../products";

export default function ProductPage({ params }) {
  const product = products[params.product];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Image src={product.image} alt={product.name} width={400} height={300} />
    </div>
  );
}
