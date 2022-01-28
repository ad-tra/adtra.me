import React from "react";

import Layout  from '../components/Layout'
import SEO from '../components/SEO'
import Section from "../components/Section";

export default function Work() {
    const projectsMap = [
        {slug: "https://soflotutors.netlify.app/sat-march-2020", title: "SoFlo Tutors - Dynamic Gatsby Blog (WIP)"}, 
        { slug: "https://kashidajs.netlify.app/", title: "Kashida - Readability Enhancement Algorithm for the Arabic Script" },
        // { slug: "https://www.figma.com/proto/Pp72uAcaRV2nQqCzrsz0kc/App-Design?node-id=34%3A34&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A34&hotspot-hints=0&hide-ui=1", title: "Missed Connections - cross platform social media app" },
        { slug: "https://upbeat-aryabhata-049774.netlify.app/",  title: "Muberza - Data Analytics to Compare Tunisian Politicians " },
        { slug: "https://github.com/ad-tra/toth",  title: "Toth -  Educational Website for SAT students" },
        { slug: "https://github.com/ad-tra/school-skipper",   title: "School Skipper - Bot that attends school for you " },
    ]
 

    return (
        <div>
            <Layout>
                <SEO title="Work - Adam Trabelsi" description={"my work along with personal projects that I did for fun"}/>

                <div className="long_content" >
                    <Section title=" personal projects" list={projectsMap} /> 


                </div>
            </Layout>
        </div>
    );
}
