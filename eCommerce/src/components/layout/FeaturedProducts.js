import React , { useContext } from "react";
import { productsContext } from '../../context/products';
//layout
import ProductList from './ProductList';


export default function FeaturedProducts() {
  const { featured } = useContext(productsContext)

  return <ProductList title='Featured products' products={featured}/>
}
