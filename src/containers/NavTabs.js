import React from 'react'
import {Link} from 'react-router-dom'

export default function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li><Link to="/">🏠 Home </Link></li>
            <li><Link to="/socialmedia">📋 Social Media </Link></li>
            <li><Link to="/uploads">▶ Recent Uploads </Link></li>
            <li><Link to="/shop">🛍 Shop (NEW!) </Link></li>
        </ul>
    )
}