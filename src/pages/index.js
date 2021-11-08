import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



const HomePage = () => {
  return (
    
      <Layout pageTitle='Home Page' pageHeading='Welcome to my Gatsby site!'>
      I'm building this site by following the Gatsby Tutorial.
      <StaticImage src="http://www.worldanimalfoundation.org/files/547756/catitems/Eel-975ed8016870930cb33b85df59d5536e.jpg"/>
    </Layout>

  )
}

export default HomePage