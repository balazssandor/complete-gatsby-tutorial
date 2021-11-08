import * as React from "react"
import Layout from '../../components/layout'
import {graphql, Link} from 'gatsby'

const Blog = ({data}) => {
    console.log(data);
    return (
        <Layout pageTitle="Blog Page" pageHeading="Blog ">
            {/* <ul> */}
                {data.allMdx.nodes.map((node => {
                    return <article key={node.id}>
                      <Link to={node.slug}>
                        <h2>{node.frontmatter.title}</h2> 
                      </Link>
                      <p>{node.frontmatter.date} | Read in {node.timeToRead} min</p>
                      </article>;
                    })) 
                }
            {/* </ul>  */}
        </Layout>
        );
};

export const query = graphql`
  query {
    allMdx (sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM do, YYYY", locale: "EN")
          title
        }
        timeToRead
        id
        slug 
      }
    }
  }
`

export default Blog;
