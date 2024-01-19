import React, { useEffect, useRef } from 'react'
import './App.css'
import Login from './pages/login/Login';
import { Route,Routes } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Home from './pages/Home/Home';
import RequireUser from './Components/RequireUser';
import Feed from './Components/feed/Feed';
import Profile from './Components/profile/Profile';
import UpdateProfile from './Components/updateProfile/UpdateProfile';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar'
const App = () => {

  const isLoading = useSelector(state=>state.appConfigReducer.isLoading)
  const loadingRef = useRef(null)
  useEffect(()=>{
    if(isLoading){
      loadingRef.current?.continuousStart();
    }
    else{
      loadingRef.current?.complete();
    }
  },[isLoading])
  return (
    <div className='App'>
      <LoadingBar color='#000' ref={loadingRef}/>
        <Routes>
          <Route element={<RequireUser/>}>
              <Route element={<Home/>}>
                <Route path='/' element={<Feed/>}/>
                <Route path='/profile/:userId' element={<Profile/>}/>
                <Route path='/updateProfile' element={<UpdateProfile/>}/>
              </Route>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default App