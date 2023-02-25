import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
  // return (
  //   props.savedPosts.map(post => {
  //       return (
  //       <div className={css.SearchItem} key={post.title}>
  //           <p>Title: {post.title}</p>
  //           <p>Artist: {post.name}</p>
  //           <img src={post.image}></img>
  //           <p>Description: {post.description}</p>
  //       </div>
  //       )
  //   })
  //   )

    // destructured version
    return (
      props.savedPosts.map(post => {
          const {title, name, image, description} = post
          return <div className={css.SearchItem} key={title}>
            <p>Title: {title}</p>
            <p>Artist: {name}</p>
            <img src={image}></img>
            <p>Description: {description}</p>
        </div>
        })
    )
}

export default PostItem