import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faSolarPanel, faWater } from "@fortawesome/free-solid-svg-icons"
import "./Product.css" 

const Product = ({id, type}) => {

const handleMouseOver = (e) => {
    console.log(document.querySelector(`#${id}`))
    document.querySelector(`#${id}`).classList.add("open")
}

const handleMouseLeave = (e) => {
    console.log(document.querySelector(`#${id}`))
    document.querySelector(`#${id}`).classList.remove("open")
}
const randomIcon = (e) => {
    const list = [faLightbulb, faSolarPanel, faWater]
    return list[Math.floor(Math.random() * 3)]
}


   return(
           <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className='product-container'>
                <FontAwesomeIcon icon={randomIcon()} size="2x" className="product-icon"/>
                <div className='product-information' id={id}>
                    <span>{type} {id}</span>
                    <Link className='product-button' to={`/product/${type}/${id}`}>Información</Link>
                </div>
           </div>
   )
}
 
export default Product