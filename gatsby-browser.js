import React, {useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';

import Background from './src/components/background/Background'



export const wrapPageElement = ({element}) => { 
  return (
  <AnimatePresence exitBeforeEnter>
    {element}
    <Background />
  </AnimatePresence>
)};