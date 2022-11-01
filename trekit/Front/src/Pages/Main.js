import React, {useState, useEffect} from "react"
import Product from "../Components/Product.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import "./Main.css"

const Main = () => {
    const state = {
        username: "Balez"
    }
    const [products, setProducts] = useState([
        {
            type: "Panel Solar Jinko Eagle 280W",
            id: "D3-C2",
            src: "./images/solarpanel.png"
        },
        {
            type: "Generador Eolico Cilindrico 1500W-3000W",
            id: "GF-13",
            src: "./images/generadoreolico.png"
        },
        {
            type: "Hidrogenerador Turbina Francis",
            id: "F1-22",
            src: "./images/turbina.png"
        },
        {
            type: "Baldosa Cinetica Pavagen",
            id: "AL-F4",
            src: "./images/baldosa.png"
        },
     
    ])

    useEffect(()=>{
        
    },[])

    return (
        <>
            <div className="product-list">
                {products.map(product => <Product id={product.id} src={product.src} type={product.type} />)}
            </div>
        </>
        );
    }
  
  export default Main;