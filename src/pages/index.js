import React from 'react'
import { graphql } from 'gatsby'
// import styled from "styled-components"

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodySlider {
                type
                primary {
                  title
                  paragraph
                  image
                }
              }
              ... on PRISMIC_HomepageBodyWhat_i_do {
                type
                primary {
                  title
                  paragraph
                }
                fields {
                  image
                  title
                  paragraph
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    prismic: {
      allHomepages: {
        edges: [
          {
            node: { body },
          },
        ],
      },
    },
  } = data

  return (
    <>
      {body.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.primary.title[0].text}</h2>
            <p>
              {item.primary.paragraph[0].text
                ? item.primary.paragraph[0].text
                : ''}
            </p>
            {item.primary.image && (
              <img
                src={item.primary.image.url}
                width={item.primary.image.dimensions.width}
                alt={item.primary.image.alt}
              />
            )}

            {item.fields &&
              item.fields.map((slide, slideIndex) => (
                <div key={slideIndex}>
                  <img
                    src={slide.image.url}
                    width={slide.image.dimensions.width}
                    alt={slide.image.alt}
                  />
                  <h3>{slide.title[0].text}</h3>
                  <p>{slide.paragraph[0].text}</p>
                </div>
              ))}
          </div>
        )
      })}
    </>
  )
}

export default IndexPage
