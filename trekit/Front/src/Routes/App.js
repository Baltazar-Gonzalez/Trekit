import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"

//import Layout from "../Components/Layout"
import Login from "../Pages/Login.js"
import Main from "../Pages/Main.js"
import ProductData from "../Pages/ProductData.js"
//import Checkout from "../pages/Checkout"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/product/:type/:id" element={<ProductData/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;