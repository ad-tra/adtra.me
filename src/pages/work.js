import React from "react";

import Layout  from '../components/Layout'
import SEO from '../components/SEO'
import Section from "../components/Section";

export default function Work() {
    const projectsMap = [
        {slug: "https://soflotutors.com/explanations", title: "SoFlo Tutors - Building The Largest Free SAT Explanations Hub "}, 
        { slug: "https://soflotutors.com/reg/consult",  title: "Registration Form with Async Data Validation" },
        { slug: "https://kashidajs.netlify.app/", title: "Kashida - Readability Enhancement Algorithm for the Arabic Script" },
        { slug: "https://github.com/ad-tra/toth",  title: "Toth -  Educational Website for SAT students" },
        { slug: "https://github.com/ad-tra/school-skipper",   title: "School Skipper - Bot that attends school for you " },
    ]
 

    return (
        <div>
            <Layout>
                <SEO title="Work - Adam Trabelsi" description={"my work along with personal projects that I did for fun"}/>

                <div className="long_content" >
                    <Section title="work & Personal Projects" list={projectsMap} /> 


                </div>
            </Layout>
        </div>
    );
}
