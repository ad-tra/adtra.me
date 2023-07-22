import React from "react";
import { motion } from "framer-motion";

export default function Header({ text }) {
	console.log(text);
	return <h1 className="layout_header">{get_animated_header(text)}</h1>;
}

export const get_animated_header = (text) => {
	return text.split(" ").map((word, i) => (
		<motion.span
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			custom={i}
		>
			{word}{" "}
		</motion.span>
	));
};
const variants = {
	animate: (i) => ({
		opacity: 1,
		top: 0,
		transition: {
			ease: [0.18, 0.89, 0.1, 1],
			duration: 1,
			delay: 0.01 * i,
		},
	}),
	initial: (i) => ({
		opacity: 0,
		top: 40 + Math.pow(1.3, i),
	}),
	exit: (i) => ({
		opacity: 0,
		top: 0.3 * Math.pow(1.3, i),
	}),
};
