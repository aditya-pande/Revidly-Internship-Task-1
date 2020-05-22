import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ clan, user, text }) => {
    return (
        <div className="post" >
            <div className="post__header" >
                <Link to="/notfoundpage" className="post__header__link" >
                    <img src="/user.png" className="post__user-image" width="60" height="60"/>
                </Link>

                <Link to="/notfoundpage" className="post__header__link" >{user}</Link>

                <Link to="/notfoundpage" className="post__header__link" >{clan}</Link>
            </div>
    
            <div className="post__body" >
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Post