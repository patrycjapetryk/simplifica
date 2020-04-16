import React from 'react'

import Title from '../../components/atoms/Title/Title'

const Gallery = ({ data }) => (
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
          {slide.title && <h3>{slide.title[0].text}</h3>}
          {slide.paragraph && <p>{slide.paragraph[0].text}</p>}
        </div>
      ))}
  </section>
)

export default Gallery
