import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faSolarPanel, faWater } from "@fortawesome/free-solid-svg-icons"
import "./Product.css" 

const Product = ({id, type, src}) => {

const handleMouseOver = (e) => {
    console.log(document.querySelector(`#${id}`))
    document.querySelector(`#${id}`).classList.add("open")
}

const handleMouseLeave = (e) => {
    console.log(document.querySelector(`#${id}`))
    document.querySelector(`#${id}`).classList.remove("open")
}

   return(
           <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className='product-container'>
                <img src={src} alt="product" className="product-icon"/>
                <div className='product-information' id={id}>
                    <span>{type} {id}</span>
                    <Link className='product-button' to={`/product/${type}`}>Información</Link>
                </div>
           </div>
   )
}
 
export default Product