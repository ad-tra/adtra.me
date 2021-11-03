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
    

  const draw = (ctx, frameCount, canvas) => {
    let x = 100, y = 100,  r = 140, startAngle = 0, endAngle = Math.PI * 2
ctx.clearRect(0, 0, canvas.width, canvas.height);
      
ctx.filter = "blur(1px)"
      ctx.globalAlpha = 0.9
      ctx.globalCompositeOperation = "multiply";


    for(let i = 0; i < canvas.height - y; i += 150){    
      for(let j = 0; j < canvas.width - x; j += 200 ){
        let gradient = ctx.createRadialGradient(x+j,y+i, 1, x+j,y+i, r );
        gradient.addColorStop(0, `rgba(150, 150, 150, ${Math.random()})`);
        gradient.addColorStop(1, 'white');
        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        ctx.arc(x+j, y+i, r, startAngle, endAngle)
        ctx.fill();
      
      }

    }

    
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
