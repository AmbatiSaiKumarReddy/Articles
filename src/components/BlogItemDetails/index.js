import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    list: {},
    isLoadings: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const data = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const each = await data.json()
    const formattedResult = {
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      content: each.content,
      topic: each.topic,
    }

    this.setState({
      list: formattedResult,
      isLoadings: false,
    })
  }

  renderBlogItemDetails = () => {
    const {list} = this.state
    const {id, title, imageUrl, avatarUrl, author, content, topic} = list
    return (
      <div className="details">
        <h1 className="heading">{title}</h1>
        <div className="detail-container">
          <div className="avatar-container">
            <img className="avatar-url" src={avatarUrl} />
            <p>{author}</p>
          </div>

          <img className="image-detail" src={imageUrl} />
          <p>{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoadings} = this.state

    return (
      <div>
        {isLoadings ? (
          <Loader type="TailSpin" color="green" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
