import React, {useState, useEffect} from "react"
import Product from "../Components/Product.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import "./Main.css"

const Main = () => {
    const [state, setState] = useState({
        username: "Balez"
    })
    const [products, setProducts] = useState([
        {
            type: "Baldosa",
            id: "V5-32"
        },
        {
            type: "Panel solar",
            id: "SS-X1"
        },
        {
            type: "Baldosa",
            id: "FS-SS"
        },
        {
            type: "Baldosa",
            id: "D5-3D"
        },
        {
            type: "Panel solar",
            id: "LS-XL"
        },
        {
            type: "Baldosa",
            id: "F1-33"
        },
        {
            type: "Baldosa",
            id: "B5-64"
        },
        {
            type: "Panel solar",
            id: "SS-46"
        },
        {
            type: "Baldosa",
            id: "FS-22"
        },
    ])

    useEffect(()=>{
        
    },[])

    return (
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
                        {state.username}
                    </span>
                </div>
            </div>
            <div className="product-list">
                {products.map(product => <Product id={product.id} type={product.type} />)}
            </div>
        </>
        );
    }
  
  export default Main;