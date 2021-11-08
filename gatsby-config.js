/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Balázs's Gatsby"
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
  "gatsby-transformer-sharp"
],
}
