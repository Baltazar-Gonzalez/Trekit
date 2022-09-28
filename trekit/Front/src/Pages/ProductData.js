import React from 'react'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import "./ProductData.css"

 
const ProductData = () => {
    const params =  useParams()
    console.log(params)
    return(
        <>
            <div className="navbar">
                <div className="navbar-brand">
                    <span>
                        <a href="/">Tre<strong>kit</strong></a>
                    </span>
                </div>
                <div className="navbar-user">
                <FontAwesomeIcon icon={faUser} size="1x" style={{margin: " 0 10px"}} />
                    <span>
                        Balez
                    </span>
                </div>
            </div>
            <div className='information'>
                <h1>{params.type}</h1>
                <p>{params.id}</p>
                <div className='more-information'>
                    <p><strong>Modelo: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><strong>Funcionamiento: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p><strong>Caracteristicas: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </>
    )
}
 
export default ProductData