import React from "react";
import './Post.css'

const Post = (props) => {
  return (
    <div className="post">
      <img src="https://placeimg.com/300/300/tech" alt="img" className="gambar" />
      <div className="desc">
        <div className="title">{props.data.title}</div>
        <p className="text">{props.data.body}</p>
        <button className="remove" onClick={() => props.remove(props.data.id)}>delete</button>
      </div>
    </div>
  )
}

export default Post;