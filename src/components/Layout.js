import React from 'react'
import { Link }from 'gatsby'

export default function TremendousText({headerText,error ,children}) {
    return (
    <div className={`${error? "error" : ''} layout`}>
        {headerText ? <h1 className="layout_header">{headerText}</h1>: ""}
        {children}
        <nav className="layout_controls">
          <ul className="languages">
            <li><Link to="/">en</Link></li>
            <li><Link to="/501">ar</Link></li>
            <li><Link to="/501">fr</Link></li>
          </ul>
          <ul className="internal_links">
            <li><Link to="/">home</Link></li>
            <li><Link to="/501">work</Link></li>
            <li><Link to="/blog">blog</Link></li>
          </ul>
        </nav>
    </div> 
    )
}
