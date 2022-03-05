import React from "react";
import p from './MyPosts.module.css'
import Post from "./Post";
const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount:85},
    { id: 2, message: 'It`s my first post!', likesCount:122 },
    { id: 2, message: 'Blablabla', likesCount:58 },
    { id: 2, message: 'i use this app', likesCount:12 }
   
]
let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        <button>Remove</button>
        </div>
      </div>

      <div className={p.posts}>
       {postsElement}

      </div>
    </div>
  )
}

export default MyPosts