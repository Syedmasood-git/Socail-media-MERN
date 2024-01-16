import React from 'react'
import './App.css'
import Login from './pages/login/Login';
import { Route,Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Home from './pages/Home/Home';
import RequireUser from './Components/RequireUser';

const App = () => {
  return (
    <div className='App'>
        <Routes>
          <Route element={<RequireUser/>}>
              <Route path='/' element={<Home/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default App