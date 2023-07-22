import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useHeader, variants } from "../hooks/useHeader";
import { motion } from "framer-motion";

export default function IndexPage({ data }) {
	const { t } = useTranslation();
	const header_text_l =
		"Adam Trabelsi, software engineer building secure note-taking solutions at";
	const header_text_r = ", using Rust";
	return (
		<Layout className={data.locales.edges[0].node.language}>
			<h1 className="layout_header">
				{useHeader(header_text_l)}
				<motion.a
					variants={variants}
					className="lb_link"
					initial="initial"
					animate="animate"
					exit="exit"
					custom={30}
					href="https://lockbook.net"
					target="_blank"
				>
					Lockbook
				</motion.a>{" "}
				{useHeader(header_text_r)}
			</h1>
			<SEO title={t("Adam Trabelsi - hi there : )")} />
		</Layout>
	);
}

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
