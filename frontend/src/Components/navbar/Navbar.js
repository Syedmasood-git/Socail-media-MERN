import React, { useState } from 'react'
import './navbar.scss'
import Avatar from '../avatar/Avatar'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const navigate = useNavigate();
  const myProfile = useSelector(state=>state.appConfigReducer.myProfile)
  const handleLogout = ()=>{

  }
  return (
    <div className='navbar'>
      <div className='container'>
        <h2 className='banner hover-link' onClick={()=>navigate('/')}> Social Media</h2>
        <div className='right-side'>
          <div className='profile hover-link' onClick={()=>navigate(`/profile/${myProfile._id}`)}>
            <Avatar src={myProfile?.avatar?.url} />
          </div>
          <div className="logout hover-link" onClick={handleLogout}>
            <AiOutlineLogout/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar