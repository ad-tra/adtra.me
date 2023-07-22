import * as React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useHeader } from "../hooks/useHeader";

export default function NotFoundPage() {
	return (
		<Layout error>
			<h1 className="layout_header">
				{useHeader(
					"501 Page Under Construction. I'm working on it, already have a pencil over my ear. See you soon."
				)}
			</h1>
			<SEO
				title="501 - Adam Trabelsi "
				description="501 under construction."
			/>
		</Layout>
	);
}
