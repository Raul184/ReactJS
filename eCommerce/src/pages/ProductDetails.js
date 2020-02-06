import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  // dinamic URL params
  const { id } = useParams();
  
  return <h1>ID: {id}</h1>;
}
