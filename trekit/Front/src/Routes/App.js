import React, {useEffect} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {FiSettings} from "react-icons/fi" 
import { TooltipComponent} from "@syncfusion/ej2-react-popups"
import { useStateContext } from "../contexts/ContextProvider.js"

import Sidebar from "../Components/Sidebar.js"
import Navbar from "../Components/Navbar.js"

//import Layout from "../Components/Layout"
import Login from "../Pages/Login.js"
import Main from "../Pages/Main.js"
import ProductData from "../Pages/ProductData.js"
import './App.css'
//import Checkout from "../pages/Checkout"

function App() {
    const {activeMenu, setActiveMenu} = useStateContext()
  
  return (
    <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4">
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                className="text-3xl text-black p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white " style={{ zIndex: '20000' }}>
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg fixed">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg  md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            </div>
        </div>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/product/:type/:id" element={<ProductData/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;