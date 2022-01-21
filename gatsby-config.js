module.exports = {
    siteMetadata: {
        siteUrl: `https://adtra.me`,
        title: `Adam Trabelsi`,
        description: `developer portfolio of Adam Trabelsi`,
        author: `Adam Trabelsi`,
        keywords: `developer, front-end, back-end, adam trabelsi`,
        image: "/favicon.ico"
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 680,
                    }
                },
                `gatsby-remark-autolink-headers`
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
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-6RKPYPGZM5" // Google Analytics / GA
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: false,
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
              },
            },
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: 'Adam Trabelsi',
            short_name: 'AdTra',
            start_url: '/',
            background_color: '#d7d7ff',
            theme_color: '#d7d7ff',
            display: 'standalone',
            icon: 'static/favicon.ico',
          },
        }
    ]
}