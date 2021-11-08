/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "SB's Gatsby Study"
  },
  /* Your site config here */
  plugins: ["gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "blog",
      path: `${__dirname}/blog`
    }
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
   {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "gatsby-page",
      },
    },
],
}
