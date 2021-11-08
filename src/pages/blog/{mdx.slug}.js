import * as React from "react"
import Layout from '../../components/layout'
import { graphql } from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx" 
import {GatsbyImage, getImage} from 'gatsby-plugin-image'


const BlogPostPage = ( { data  } ) => {

  const image = getImage(data.mdx.frontmatter.hero_image) 
  console.log(image)

  return (

    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
      <p>Credit:{" "} 
        <a href={data.mdx.frontmatter.hero_image_credit_link} target="_blank">
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
    
  )
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM do, YYYY", locale: "EN")
        title
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_url
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPostPage