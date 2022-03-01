import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post";
const MyPosts =() => {
  debugger;
    return (
        <div>
          My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
          </div>

          <div className={p.posts}>
            <Post message='Hi, how are you?' likesCount='85'/>
            <Post message='It`s my first post'  likesCount='122'/>
            
          </div>
        </div>
    )
}

export default MyPosts