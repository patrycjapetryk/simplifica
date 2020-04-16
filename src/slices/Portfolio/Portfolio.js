import React from 'react'

import Button from '../../components/atoms/Button/Button'
import Title from '../../components/atoms/Title/Title'

const Portfolio = ({ data }) => (
  <section>
    <Title data={data} />

    {data.fields &&
      data.fields.map((slide, slideIndex) => (
        <div key={slideIndex}>
          {slide.image && (
            <img
              src={slide.image.url}
              width={slide.image.dimensions.width}
              alt={slide.image.alt}
            />
          )}
          {slide.paragraph && <p>{slide.paragraph[0].text}</p>}
        </div>
      ))}

    <Button>Więcej...</Button>
  </section>
)

export default Portfolio
