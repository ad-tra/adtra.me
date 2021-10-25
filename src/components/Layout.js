import React, {useEffect} from 'react'
import { Link }from 'gatsby'

import Canvas from './Canvas'
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
    },[])
    

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.filter = 'blur(40px)'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  return (
    <div className={`${error? "error" : ''} layout`}>
        {headerText ?<h1 className="layout_header">{headerText}</h1>: ""}
        {children}
        <Canvas draw = {draw} /> 
        <nav className="layout_controls">
          {/*<ul className="languages">
            <li><Link to="/">en</Link></li>
            <li><Link to="/501">ar</Link></li>
            <li><Link to="/501">fr</Link></li>
          </ul>*/}
          <ul className="internal_links">
            <li><Link to="/blog">blog</Link></li>
            <li><Link to="/501">work</Link></li>
            <li><Link to="/">home</Link></li>
          </ul>
        </nav>
    </div> 
    )
}
