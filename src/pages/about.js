import React from "react";

import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function about() {
	return (
		<div>
			<Layout>
				<SEO  title ="About - Adam Trabelsi"/>
				<div className="long_content">
					<section>
						<h1 className="title">About</h1>
						<p>hello there, you've reached a secret spot. Illuminati hangs here.  </p>
					</section>
				</div>
			</Layout>
		</div>
	);
}
