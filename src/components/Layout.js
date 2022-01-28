import React, {useEffect} from 'react'
import { Link }from 'gatsby'
import { motion } from 'framer-motion'


import "../styles/global.scss"
import * as Scss from '../styles/breakpoints.module.scss'
import Canvas from './Canvas'

export default function Layout({headerText,error ,extraStyles, children}) {
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
      <div className={`${error? "error" : ''} layout`} style={extraStyles}>
          {headerText ? 
            <h1 className="layout_header" >
              {headerText.split(" ").map((word,i) => <motion.span variants = {variants} initial = "initial" animate= "animate" exit = "exit" custom = {i}> {word}</motion.span>)}
            </h1> 
          : 
          ""}
          {children}

          <nav className="layout_controls">
            {/*<ul className="languages">
              <li><Link to="/">en</Link></li>
              <li><Link to="/501">ar</Link></li>
              <li><Link to="/501">fr</Link></li>
            </ul>*/}
            <ul className="internal_links">
              <li><Link to="/work">work</Link></li>
              <li><Link to="/blog">blog</Link></li>
              <li><Link to="/">home</Link></li>
            </ul>
          </nav>
      </div> 

  )
}


const variants = {
  animate: i =>({
    opacity: 1,
    top: 0 ,
    transition:{
      ease:[0.18, 0.89, 0.1, 1],
      duration: 1,
      delay: 0.01 * i,

    }
  }),
  initial: i => ({
    opacity: 0,
    top: 40 + Math.pow(1.3,i),

  }),
  exit: i => ({
    opacity: 0,
    top:   0.3* Math.pow(1.3,i),
  })
}