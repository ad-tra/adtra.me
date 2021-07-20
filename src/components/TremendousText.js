import React from 'react'
import { Link }from 'gatsby'

export default function TremendousText({headerText}) {
    return (
    <div className="tremendous_text">
        <h1 className="tremendous_text_text">{headerText}</h1>
        <nav className="tremendous_text_controls">
          <ul className="languages">
            <li><Link to="/">en</Link></li>
            <li><Link to="/501">ar</Link></li>
            <li><Link to="/501">fr</Link></li>
          </ul>
          <ul className="internal_links">
            <li><Link to="/">home</Link></li>
            <li><Link to="/501">work</Link></li>
            <li><Link to="/501">blog</Link></li>
          </ul>
        </nav>
    </div> 
    )
}
