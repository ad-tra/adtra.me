import React, {useEffect} from 'react'
import { Link }from 'gatsby'
import "../styles/global.scss"
import * as Scss from '../styles/breakpoints.module.scss'

export default function TremendousText({headerText,error ,children}) {
    //changes the word "development" in header to "dev" on mobile screens
    useEffect(() => {

       if(!!headerText) {
        const mediaQuery = window.matchMedia(`(max-width: ${Scss.breakpointMobile})`)
        changeHeaderContent(mediaQuery) // in case the user is mobile by default. he won't change his window, so this will take care of him/her.
        
        mediaQuery.addEventListener('change', changeHeaderContent);
        
        function changeHeaderContent(width){
          if(width.matches)
            document.querySelector('.layout_header').textContent = document.querySelector('.layout_header').textContent.replace("development", "dev")
        }
      }    
    })
    
  
  return (
    <div className={`${error? "error" : ''} layout`}>
        {headerText ? <h1 className="layout_header">{headerText}</h1>: ""}
        {children}
        <nav className="layout_controls">
          {/*<ul className="languages">
            <li><Link to="/">en</Link></li>
            <li><Link to="/501">ar</Link></li>
            <li><Link to="/501">fr</Link></li>
          </ul>*/}
          <ul className="internal_links">
            <li><Link to="/">home</Link></li>
            <li><Link to="/501">work</Link></li>
            <li><Link to="/blog">blog</Link></li>
          </ul>
        </nav>
    </div> 
    )
}
