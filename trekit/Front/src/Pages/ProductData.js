import React from 'react'
import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import "./ProductData.css"

 
const ProductData = () => {
    const params =  useParams()
    let src = {
        img: "",
        modelo: "",
        funcionamiento: "",
        caracteristicas: "",
    }
    if(params.type === "Panel Solar Jinko Eagle 280W"){
        src = {
            img:"../images/solarpanel.png",
            precio:"$340 USD",
            modelo:"../images/solarpanel.png",
            funcionamiento:"../images/solarpanel.png",
            caracteristicas:"../images/solarpanel.png",
        }
    }else if(params.type === "Generador Eolico Cilindrico 1500W-3000W"){
        src = {
            img:"../images/generadoreolico.png",
            precio:"$540 USD",
            modelo:"../images/solarpanel.png",
            funcionamiento:"../images/solarpanel.png",
            caracteristicas:"../images/solarpanel.png",
        } 
    }else if(params.type === "Hidrogenerador Turbina Francis"){
        src = {
            img:"../images/turbina.png",
            precio:"$500 USD",
            modelo:"../images/solarpanel.png",
            funcionamiento:"../images/solarpanel.png",
            caracteristicas:"../images/solarpanel.png",
        }  
    }else if(params.type === "Baldosa Cinetica Pavagen"){
        src = {
            img:"../images/baldosa.png",
            precio:"$100 USD",
            modelo:"../images/solarpanel.png",
            funcionamiento:"../images/solarpanel.png",
            caracteristicas:"../images/solarpanel.png",
        }  
    }

    console.log(params)
    return(
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center bg-white dark:text-gray-200 m-3 p-4 rounded-2xl lg:flex-nowrap ">
                    <div className="w-400 md:w-1/2">
                        <img src={src.img} alt="product" className="w-full"/>
                    </div>
                    <div className='mt-10 flex gap-10 flex-wrap p-4 md:w-1/2'>
                        <div className='w-full text-left'>
                            <h1 className='font-bold text-gray-700 text-4xl md:text-5xl lg:text-6xl	xl:text-7xl'>{params.type}</h1>
                            <p className='mt-5 text-gray-400 text-4xl'>{src.precio}</p>
                        </div>
                        <div className='text-1xl' style={{fontSize:"1.25rem"}}>
                            <p><strong>Modelo: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p><strong>Funcionamiento: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p><strong>Caracteristicas: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                     
                    </div>
                </div>
            </div>
    )
}
 
export default ProductData