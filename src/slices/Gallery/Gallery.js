import React from 'react'
const slugify = require('slugify')

const Gallery = ({ data }) => (
  <div>
    {data.primary.title && (
      <h2
        id={slugify(data.primary.title[0].text, {
          lower: true,
        })}
      >
        {data.primary.title[0].text}
      </h2>
    )}
    {data.primary.paragraph && <p>{data.primary.paragraph[0].text}</p>}

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
  </div>
)

export default Gallery
