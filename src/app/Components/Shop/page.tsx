'use client';
import React from "react";
import Image from "next/image";
import { products } from "./products";
import { useRouter } from "next/navigation";

export default function AllProductList() {
  const router = useRouter();

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {Object.entries(products).map(([key, product]) => (
        <div
          key={key}
          style={{ width: "200px", cursor: "pointer", textAlign: "center" }}
          onClick={() => router.push(`/shop/${key}`)}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={200}   // must be a number
            height={150}  // must be a number
          />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
}
