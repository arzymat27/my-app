import React from "react";
import p from './Post.module.css'
const Post = (props) => {
  return (
    <div className={p.item}>
      <img src="https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>

  )
}

export default Post