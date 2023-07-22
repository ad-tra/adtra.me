import * as React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useHeader } from "../hooks/useHeader";

export default function NotFoundPage() {
	return (
		<Layout error>
			<h1 className="layout_header">
				{useHeader(
					"404 Not Found. I looked under the table and over the shelve, didn't find it."
				)}
			</h1>
			<SEO
				title="404 - Adam Trabelsi "
				description="404 page is not found."
			/>
		</Layout>
	);
}
