exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
    query BlogPosts {
        allMarkdownRemark {
          edges {
            node {
                id
              frontmatter {
                slug
                title
                status
              }
            }
          }
        }
      }
      
    `)
    const blogPosts = results.data.allMarkdownRemark.edges
    //await scraperVS.main(politicians);



    blogPosts.forEach((edge)=>{
        const blogPost = edge.node;
        
        if(blogPost.frontmatter.status !== "private"){
          createPage({
            path: `/blog/${blogPost.frontmatter.slug}/`,
            component: require.resolve('./src/templates/BlogPost.js'),
            context : {
                id: blogPost.id
            }
        })
        }
        
    })
    

}
