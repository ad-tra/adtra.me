module.exports = {
    siteMetadata: {
        siteUrl: `https://www.adtra.me`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-posts`,
                path: `${__dirname}/data/blog_markdown`,
            },
        }
    
    ]
}