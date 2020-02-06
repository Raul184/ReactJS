import React , { useContext } from "react";
// Url params
import { useParams } from "react-router-dom";
// Context
import { productsContext } from '../context/products';
import { cartContext } from '../context/cart';
import { useHistory } from 'react-router-dom';

export default function ProductDetails() {
  // dinamic URL params
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(productsContext);
  
  const product = products.find(el => el.id === parseInt(id) )
  const { image: { url } , title , price , description } = product;
  return <>
    { product !== undefined && <section className="single-product">
      <img src={url} alt="" className="single-product-image"/>
      <article>
        <h1>{title}</h1>
        <h2>$ {price}</h2>
        <p>{description}</p>
        <button 
          className="btn btn-primary btn-block"
          onClick={() => history.push('/cart')}
        >
          Add to Cart
        </button>
      </article>
    </section>
        
    }
  </>;
}
