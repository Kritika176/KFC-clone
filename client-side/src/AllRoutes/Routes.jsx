import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { Signin } from '../Signin/Signin';
import { Signup } from "../Signup/Signup"

export function AllRoutes() {
  return (
    <Routes>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
    </Routes>
  )
}
