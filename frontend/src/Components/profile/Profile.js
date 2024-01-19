import React from 'react'
import './profile.scss'
import Post from '../post/Post'
import userImg from '../../Assets/user.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CreatePost from '../createPost/CreatePost'

const Profile = () => {
  const navigate = useNavigate();
  const myProfile = useSelector(state=>state.appConfigReducer.myProfile)
  return (
    <div className='profile'> 
        <div className="container">
          <div className="left">
            <CreatePost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
          <div className="right">
            <div className="profile-card">
              <div className="user">
              <img className='user-img' src={myProfile?.avatar?.url?myProfile.avatar.url:userImg} alt="user" />
              <h3 className='user-name'>{myProfile.name}</h3>
              </div>
              <div className="follower-info">
                <h4>{myProfile.followers>0?myProfile.followers:0} Followers</h4>
                <h4>{myProfile.followings>0?myProfile.followings:0} Following</h4>
              </div>
              <button className='btn-primary follow-btn'>Follow</button>
              <button className='update-btn btn-secondary' onClick={()=>navigate('/updateProfile')} >Update Profile</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile