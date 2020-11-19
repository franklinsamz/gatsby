import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

<GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="headshot" />


export const query = graphql`{
  file(relativePath: {eq: "landscape.jpg"}) {
    image {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FLUID)
      }
    }
  }
}
`
