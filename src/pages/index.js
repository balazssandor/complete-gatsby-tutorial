import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



const HomePage = () => {
  return (
    
      <Layout pageTitle='Home Page' pageHeading='Welcome to my Gatsby site!'>
      I'm building this site by following the Gatsby Tutorial.
      <StaticImage src="../pic.jpg"/>
    </Layout>

  )
}

export default HomePage