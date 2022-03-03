import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import * as Scss from '../styles/breakpoints.module.scss'
import getOpacityMesh from '../utils/opacityMesh';

export default function Section({title, list}) {
    
    const [isMobile, setIsMobile] = useState(undefined);
    const [opacityMesh, setOpacityMesh] = useState(list.map(el => ({opacity:1, filter: 1}) ));
    const handleHover = i => (list.length > 1 && !isMobile) && setOpacityMesh(getOpacityMesh(list, i, 0.2))
    useEffect(() => {
        const matchesResponsiveQuery = window.matchMedia(`(max-width: ${Scss.breakpointMobile})`).matches
        setIsMobile(matchesResponsiveQuery)
        setOpacityMesh( matchesResponsiveQuery ?  list.map(el => ({opacity:1, filter: 0}) ):  getOpacityMesh(list,0, 0.2))

    }, []);


    console.log(opacityMesh)
    return (
    <section>
        <h1 className="title">
            <motion.span initial={{y: '-100%'}} animate = {{y:0 ,transition:{duration:0.5}}} exit={{y: '100%', transition:{duration:0.25}}}>
                {title}
            </motion.span>
        </h1>
        <ul className="blog_posts_list">
            {list.map(({ title, slug}, i ) =>{ 
                const isLocal = !slug.includes("://")
                return ( 
                <motion.li 
                    className="blog_posts_list_item" 
                    style={{filter: `opacity(${opacityMesh[i].opacity}) blur(${opacityMesh[i].filter}px)`}} 
                    onMouseOver={()=>handleHover(i)} 
                    variants = {variants} 
                    initial = "initial" 
                    animate = "animate" 
                    exit ="exit" 
                    custom ={i}>
                        <Link to = {isLocal ? "./" + slug : slug} target={isLocal? "_self" : "_blank"} style={{textDecoration:  opacityMesh[i] < 0.3 && "none"}} >{title}</Link>

                </motion.li>
             )})}
        </ul>
    </section>
  );
}

const variants = {
    initial: i => ({
        y: 30 / (i === 0 ? 1 : i) ,
        scaleY: 1* Math.pow(0.9,i ) ,
        opacity: 0,
    }),
    animate: i => ({
        y: 0,
        scaleY: 1,
        transition:{
            delay:   0.1* i,
            ease: 'easeIn',
            duration: 0.2
        },
        opacity: 1,
    }),
    exit: i => ({
        y: 50 + Math.pow(0.9, i),
        opacity: [0,0],
        transition:{
            ease: 'easeIn',
            delay:   0.1 + 0.01* i,
            duration: 0.2,
        }
    })
}
