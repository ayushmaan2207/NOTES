import React from 'react'

const Card = ({post}) => {
  return (
    <div className="Card">
        <img src={post.img} alt="photo" />
        <p>{post.title}</p>
        <p>By <span>{post.author}</span> on <span>{post.category}</span> </p>
        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <div className="tags">
            {post.tags.map( (tag,index)=>{
                return <span key={index}>{` #${tag}`}</span>
            })}
        </div>
    </div>
  )
}

export default Card
