import React, { useState } from "react";
import "./createPost.scss";
import Avatar from "../avatar/Avatar";

const CreatePost = () => {
    const[postImg,setPostImg] = useState('');
    const handleImageChange=(e)=>{

    }
  return (
    <div className="createPost">
      <div className="left">
        <Avatar />
      </div>
      <div className="right">
        <input type="text" className="captionInput" />
        <div className="img-container">
          <img src="" className="post-img" alt="" />
        </div>
        <div className="bottom">
          <div className="input-post-img">
            <label htmlFor="inputImg" className="label-img">
              <img src={postImg} alt="postImage" />
            </label>
            <input
              className="inputImg"
              type="file"
              id="inputImg"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button className="post-btn btn-primary">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
