import React, { useState } from "react"
import { Link } from "gatsby"

export default ({ content }) => {
  const [slice, setSlice] = useState<number[]>([0, 2])
  console.log(content)
  return (
    <div id="old-posts">
      <div id="old-posts-content">
        {content.slice(slice[0], slice[1]).map((post, i: number) => {
          return (
            <Link to={post.slug} className="col-md-6" key={i}>
              <div className="posts-top">
                <h5>{post.title}</h5>
                <p className="post-date">{post.date}</p>
              </div>
              <p>{post.excerpt}</p>
            </Link>
          )
        })}
      </div>
      <div id="old-posts-pagination">
        <button
          disabled={!!!(slice[0] > 0)}
          onClick={() => setSlice([slice[0] - 2, slice[1] - 2])}
        >
          {"<"}
        </button>
        <button
          disabled={!!!(slice[1] < content.length)}
          onClick={() => setSlice([slice[0] + 2, slice[1] + 2])}
        >
          {">"}
        </button>
      </div>
    </div>
  )
}