import React from "react";

import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Work() {
	const projectsMap = [
        {value: "https://kashidajs.netlify.app/", label: "Kashida - Readability Enhancement Algorithm for the Arabic Script"},
        {value: "https://www.figma.com/proto/Pp72uAcaRV2nQqCzrsz0kc/App-Design?node-id=70%3A3&starting-point-node-id=34%3A34", label:"Missed Connections - cross platform social media app"},
        {value: "https://github.com/ad-tra/toth", label: "Toth -  Educational Website for SAT students"},
        {value: "https://upbeat-aryabhata-049774.netlify.app/", label: "Muberza - Data Analytics to Compare Tunisian Politicians "},
        {value: "https://github.com/ad-tra/school-skipper", label: "School Skipper - Bot that attends school for you "},


    ]
    return (
		<div>
			<Layout>
				<SEO  title ="Work - Adam Trabelsi"/>
				<div className="long_content">
					<section>
						<h1 className="title">Personal Projects</h1>
                        <ul className="blog_posts_list">
                                {projectsMap.map(({value, label}) => 
                                    <li className="blog_posts_list_item"><a target="_blank" href={value}>{label}</a></li>
                                )}
                        </ul>
					</section>
				</div>
			</Layout>
		</div>
	);
}
