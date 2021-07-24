module.exports = {
    siteMetadata: {
        siteUrl: `http://adtra.me`,
        title: `Adam Trabelsi`,
        description: `developer portfolio of Adam Trabelsi`,
        author: `Adam Trabelsi`,
        keywords: `developer, front-end, back-end, adam trabelsi`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 680,
                    }
                }
              ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-posts`,
                path: `${__dirname}/data/blog_markdown`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/data/images`,
            },
        }
    
    ]
}