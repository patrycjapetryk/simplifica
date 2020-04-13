import React from 'react'
import { graphql } from 'gatsby'

import Slider from '../slices/Slider/Slider'
import Portfolio from '../slices/Portfolio/Portfolio'
import Contact from '../slices/Contact/Contact'
import Gallery from '../slices/Gallery/Gallery'
import Text from '../slices/Text/Text'

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
              ... on PRISMIC_HomepageBodyPortfolio {
                type
                primary {
                  paragraph
                  title
                }
                fields {
                  image
                  paragraph
                }
              }
              ... on PRISMIC_HomepageBodyAbout_me {
                type
                primary {
                  title
                  paragraph
                  description
                  image
                }
              }
              ... on PRISMIC_HomepageBodyContact {
                type
                primary {
                  title
                  paragraph
                  description
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
        switch (item.type) {
          case 'slider':
            return <Slider data={item} key={index} />
          case 'what_i_do':
            return <Gallery data={item} key={index} />
          case 'portfolio':
            return <Portfolio data={item} key={index} />
          case 'about_me':
            return <Text data={item} key={index} />
          case 'contact':
            return <Contact data={item} key={index} />
          default:
            return null
        }
      })}
    </>
  )

  // return (
  //   <>
  //     {body.map((item, index) => {
  //       return (
  //         <div key={index}>
  //           {item.primary.title && (
  //             <h2
  //               id={slugify(item.primary.title[0].text, {
  //                 lower: true,
  //               })}
  //             >
  //               {item.primary.title[0].text}
  //             </h2>
  //           )}
  //           {item.primary.paragraph && <p>{item.primary.paragraph[0].text}</p>}

  //           {item.primary.description && (
  //             <p>{item.primary.description[0].text}</p>
  //           )}

  //           {item.primary.image && (
  //             <img
  //               src={item.primary.image.url}
  //               width={item.primary.image.dimensions.width}
  //               alt={item.primary.image.alt}
  //             />
  //           )}

  //           {item.fields &&
  //             item.fields.map((slide, slideIndex) => (
  //               <div key={slideIndex}>
  //                 {slide.image && (
  //                   <img
  //                     src={slide.image.url}
  //                     width={slide.image.dimensions.width}
  //                     alt={slide.image.alt}
  //                   />
  //                 )}
  //                 {slide.title && <h3>{slide.title[0].text}</h3>}
  //                 {slide.paragraph && <p>{slide.paragraph[0].text}</p>}
  //               </div>
  //             ))}
  //         </div>
  //       )
  //     })}
  //   </>
  // )
}

export default IndexPage
