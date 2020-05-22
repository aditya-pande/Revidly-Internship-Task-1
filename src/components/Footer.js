import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
    <div>
        <footer className="footer" >
            <Link to="/writepostpage" >
                <img src="/create.png" className="footer__image" width="60" height="60"/>
            </Link>
        </footer>
    </div>
)

export default Footer