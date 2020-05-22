import React from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'

const PostsList = (props) => (
    <div>
        {
            props.posts.map((post) => <Post key={post.id} {...post}  />)
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)