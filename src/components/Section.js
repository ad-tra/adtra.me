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
            <motion.span initial={{y: '-100%'}} animate = {{y:0 }} transition={{ duration: 0.3}}>
                {title}
            </motion.span>
        </h1>
        <ul className="blog_posts_list">
            {list.map(({ title, slug}, i ) =>{ 
                const isLocal = !slug.includes("://")
                return ( 
                <li className="blog_posts_list_item" style={{opacity: opacityMesh[i]}} onMouseOver={()=>handleHover(i)}>
                    <motion.div 
                        variants = {variants}
                        initial = "initial"
                        animate = "animate"
                        custom ={i}
                    >
                        <Link to = {isLocal ? "./" + slug : slug} target={isLocal? "_self" : "_blank"}>{title}</Link>

                    </motion.div>
                </li>
             )})}
        </ul>
    </section>
  );
}

const variants = {
    initial: i => ({
        y: 50 / (i === 0 ? 1 : i) ,
        scaleY: 1 * Math.pow(0.5, i) 
    }),
    animate: i => ({
        y: 0,
        scaleY: 1,
        transition:{
            delay:  0.05 + 0.05* i,
            ease: 'easeOut',
            duration: 0.3
        }
    })
}