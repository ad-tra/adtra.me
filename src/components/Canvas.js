
import React, { useRef, useEffect } from 'react'



export default function Canvas(props) {

    const { ...rest } = props
    const canvasRef = useRef(null)


    const draw = (ctx, frameCount, canvas) => {
        var radgrad = ctx.createRadialGradient(0,0,1,0,0,150);
        radgrad.addColorStop(0, '#A7D30C');
        radgrad.addColorStop(1, 'rgba(1,159,98,0)');
    
        var radgrad2 = ctx.createRadialGradient(0,150,1,0,150,150);
        radgrad2.addColorStop(0, '#FF5F98');
        radgrad2.addColorStop(1, 'rgba(255,1,136,0)');
    
        var radgrad3 = ctx.createRadialGradient(150,0,1,150,0,150);
        radgrad3.addColorStop(0, '#00C9FF');
        radgrad3.addColorStop(1, 'rgba(0,201,255,0)');
    
        var radgrad4 = ctx.createRadialGradient(150,150,1,150,150,150);
        radgrad4.addColorStop(0, '#F4F201');
        radgrad4.addColorStop(1, 'rgba(228,199,0,0)');
    
        ctx.fillStyle = radgrad4;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = radgrad3;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = radgrad2;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = radgrad;
        ctx.fillRect(0,0,canvas.width,canvas.height);

    }
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

    return <canvas ref={canvasRef} {...rest} />
}