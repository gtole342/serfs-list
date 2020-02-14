import React from 'react'
import Search from './search'
import fleurdelis from '../images/fleur_de_lis_yellow.svg'
import './style.scss'
import FleurDeLis from './FleurDeLis';
import { Link } from 'react-router-dom'

const Nav = props => {
    return (
        <span className="nav">
            <span className="left">
                <span className="logo">
                    <a href="/" id="pagename">
                        <img src="/logo.png" alt="logo" height="50" />
                    </a>
                </span>
            </span>
            <span className="right">
                <button className="nav-button">
                    <a className="nav-link" href="/search"> 
                        Show all Posts
                    </a>
                </button>
                <button className="nav-button">
                    <a className="nav-link" href="#">
                        <FleurDeLis />
                        <span> Favorites</span>
                    </a>
                </button>
                <button className="nav-button">
                    <a className="nav-link" href="/post/submit">Make a post</a>
                </button>
            </span>
        </span>
    )






    return (
        <div>
            <nav className="nav">
                <span className="left">
                    <span className="logo">
                        <a href="/" id="pagename">
                            <img src="/logo.png" alt="logo" height="50" />
                        </a>
                    </span>
                </span>
                <span className="right">
                    <span id="postlink">
                        <button className="nav-button">
                            <a className="nav-link" href="/post/submit">Make a post</a>
                        </button>
                    </span>
                    <span id="favorites">
                        <button className="nav-button">
                            <a className="nav-link" href="#">
                                <FleurDeLis />
                                <span> Favorites</span>
                            </a>
                        </button>
                    </span>
                </span>
            </nav>
            <Link to={'/search'}>
                <button className="nav-button">
                    Show all Posts
                </button>
            </Link>
        </div>
    )
}

export default Nav