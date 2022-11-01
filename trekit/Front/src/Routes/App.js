import React, {useEffect} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {FiSettings} from "react-icons/fi" 
import { useStateContext } from "../contexts/ContextProvider.js"
import Sidebar from "../Components/Sidebar.js"
import Navbar from "../Components/Navbar.js"

//import Layout from "../Components/Layout"
import Login from "../Pages/Login.js"
import Main from "../Pages/Main.js"
import Workers from "../Pages/Workers.js"
import ProductData from "../Pages/ProductData.js"
import Dashboard from "../Pages/Dashboard.js"
import NotFound from "../Pages/notFound.js"
import './App.css'
//import Checkout from "../pages/Checkout"

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ backgroundColor: "rgb(94, 222, 148)", borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Main />)} />
                <Route path="/graficos" element={(<Dashboard />)} />

                {/* pages  */}
                <Route path="/login" element={<Login />} />
                <Route path="/lista" element={(<Main />)} />
                <Route path="/tecnicos" element={(<Workers />)} />
                <Route path="/product/:type/" element={<ProductData />} />
                <Route path="/product/:type/:id" element={<ProductData />} />
                <Route path="/product/:type/:id" element={<ProductData />} />
                <Route path="*" element={<NotFound />} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;