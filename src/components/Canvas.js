import React, { useRef, useEffect } from 'react'

export default function Canvas (props) {
  
  const { draw, ...rest } = props
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    draw(context, frameCount, canvas)
    // const render = () => {
    //   frameCount++
    //   draw(context, frameCount, canvas)
    //   animationFrameId = window.requestAnimationFrame(render)
    // }
    // render()
    
    // return () => {
    //   window.cancelAnimationFrame(animationFrameId)
    // }
  }, [draw])
  
  return <canvas ref={canvasRef} {...rest}/>
}

