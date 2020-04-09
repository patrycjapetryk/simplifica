import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
// import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"

export const query = graphql`
  {
    prismic {
      allLogos {
        edges {
          node {
            company_name
            logo_image
            logo_imageSharp {
              childImageSharp {
                fixed(width: 30, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            date
            body {
              ... on PRISMIC_PostBodyText {
                type
                label
                primary {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`

const IndexPage = ({ data }) => {
  const {
    prismic: {
      allLogos: {
        edges: [{ node }],
      },
    },
  } = data

  return (
    <Layout>
      <img src={node.logo_image.url} width="30px" alt="Simplifica logo" />
      {/* <Img fixed={node.logo_imageSharp.childImageSharp.fixed} /> */}
      <h1>{node.company_name[0].text}</h1>
      <p>Welcome to my homepage! </p>
      <StyledDiv />
      <Link to="/blog/">Go to blog</Link>
    </Layout>
  )
}

export default IndexPage
