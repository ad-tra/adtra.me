import React, { useEffect } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import "../styles/global.scss";
import * as Scss from "../styles/breakpoints.module.scss";
import Background from "./background/Background";

export default function Layout({ error, extraStyles, children, className }) {
	return (
		<div
			className={`${error ? "error" : ""} layout ${
				className ? className : ""
			}`}
			style={extraStyles}
		>
			{children}

			<nav className="layout_controls">
				{/*<ul className="languages">
              <li><Link to="/">en</Link></li>
              <li><Link to="/501">ar</Link></li>
              <li><Link to="/501">fr</Link></li>
            </ul>*/}
				<ul className="internal_links">
					<li>
						<Link to="/work">work</Link>
					</li>
					<li>
						<Link to="/blog">blog</Link>
					</li>
					<li>
						<Link to="/">home</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
