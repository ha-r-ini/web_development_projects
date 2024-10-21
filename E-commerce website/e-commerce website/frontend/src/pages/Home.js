import { Fragment,useState,useEffect } from "react"
import Productcard from "../components/Productcard"
import { useSearchParams } from "react-router-dom";

export default function Home(){
    const [products, setproduct] =useState([]);
    const [searchparams]= useSearchParams();
    
    useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL+'/product?'+searchparams)
    .then(res=>res.json())
    .then(res=>setproduct(res.products))
},[searchparams]);

    return  <Fragment>
  
      <h1 id="products_heading">Latest Products</h1>
  
      <section id="products" className="container mt-5">
        <div className="row">
        {products.map(product=><Productcard product={product}/>)}
         
        </div>
      </section>
  
    
    </Fragment>
}