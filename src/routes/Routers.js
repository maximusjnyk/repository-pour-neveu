import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { AllFoods } from "../pages/AllFoods";
import { FoodDetalis } from "../pages/FoodDetalis";
import { Cart } from "../pages/Cart";
import { CheckOut } from "../pages/CheckOut";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Contact } from "../pages/Contact";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Navigate to='/home'/> }/>
        <Route path='/home' element={ <Home/> }/>
        <Route path='/foods' element={ <AllFoods/> }/>
        <Route path="/foods/:id" element={ <FoodDetalis/> }/>
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/checkout' element={ <CheckOut/> }/>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>
    </>
  );
};

export default Routers;