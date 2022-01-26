import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import getOpacityMesh from '../utils/opacityMesh';

export default function Section({title, list}) {
    
    const [opacityMesh, setOpacityMesh] = useState(getOpacityMesh(list,0, 0.2));
    const handleHover = i => list.length > 1 && setOpacityMesh(getOpacityMesh(list, i, 0.2)) 
    
    return (
    <section>
        <h1 className="title">
            <motion.span initial={{y: '-100%'}} animate = {{y:0 }} exit={{y: '100%'}} transition={{ duration: 0.2 }}>
                {title}
            </motion.span>
        </h1>
        <ul className="blog_posts_list">
            {list.map(({ title, slug}, i ) =>{ 
                const isLocal = !slug.includes("://")
                return ( 
                <motion.li className="blog_posts_list_item" style={{opacity: opacityMesh[i]}} onMouseOver={()=>handleHover(i)} variants = {variants} initial = "initial" animate = "animate" exit ="exit" custom ={i}>
                        <Link to = {isLocal ? "./" + slug : slug} target={isLocal? "_self" : "_blank"}>{title}</Link>

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
        filter: "opacity(0)"
    }),
    animate: i => ({
        y: 0,
        scaleY: 1,
        filter: "opacity(1)",
        transition:{
            delay:   0.05* i,
            ease: 'easeIn',
            duration: 0.25
        }
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