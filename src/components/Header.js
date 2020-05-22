import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => (
    <div>
        <header className="header">
            <div className="header__links-container" >
                <Link to="/profilepage" >
                    <img src="/user.png" className="header__image" />
                </Link>

                <Link to="/writepostpage" className="header__write-link" >Write Something here...</Link>

                <Link to="/searchpeoplepage" >
                    <img src="/magnifying-glass.png" className="header__image" />
                </Link>
            </div>

            <div className="header__clans-list">
                {
                    props.clans.map((clan) => <Link className="header__clans-list__clan-link" to="/notfoundpage" key={clan.name}>{clan.name}</Link>)
                }
            </div>
        </header>
    </div>
)

const mapStateToProps = (state) => ({
    clans: state.clans
})

export default connect(mapStateToProps)(Header)