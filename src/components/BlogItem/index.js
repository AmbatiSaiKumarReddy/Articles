import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link to={`/blogs/${id}`}>
      <div className="item-container">
        <img className="title-image" src={imageUrl} />
        <div>
          <p>{title}</p>
          <p>{topic}</p>
          <div>
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
