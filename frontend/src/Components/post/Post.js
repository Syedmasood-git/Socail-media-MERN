import React from 'react'
import Avatar from '../avatar/Avatar'
import './post.scss'
import postimg from '../../Assets/postImg.jpg'
import {AiOutlineHeart} from 'react-icons/ai'
 
const Post = ({post}) => {
  return (
    <div className='post'>
        <div className="heading">
            <Avatar/>
            <h4>Syed Masood</h4>
        </div>
        <div className="content">
            <img src={postimg} alt='post'/>
        </div>
        <div className="footer">
            <div className="like">
                <AiOutlineHeart className='icon'/>
                <h4>4 likes</h4>
            </div>
            <p className='caption'>This is beautiful place Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ut?</p>
            <h6 className='time-ago'>4 hrs ago</h6>
        </div>
    </div>
  )
}

export default Post