// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    isLoading: true,
    blogList: [],
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const data = await fetch('https://apis.ccbp.in/blogs')
    const result = await data.json()
    const formattedData = result.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({
      blogList: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, blogList} = this.state

    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogList.map(each => <BlogItem details={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
