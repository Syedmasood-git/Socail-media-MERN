import React from 'react'
import './feed.scss'
import Post from '../post/Post'
import Follower from '../follower/Follower'

const Feed = () => {
  return (
    <div className='feed'>
      <div className='container'>
        <div className="left">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className="right">
          <div className="following">
            <h3 className='title'>You Are Following</h3>
            <Follower/>
            <Follower/>
            <Follower/>
            <Follower/>
            <Follower/>
          </div>
          <div className="following">
            <h3 className='title'>Suggested for You</h3>
            <Follower/>
            <Follower/>
            <Follower/>
            <Follower/>
            <Follower/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed