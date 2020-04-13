import React from 'react'

import Button from '../../components/atoms/Button/Button'

const slugify = require('slugify')

const Slider = ({ data }) => (
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

    <Button>Więcej...</Button>

    {data.primary.image && (
      <img
        src={data.primary.image.url}
        width={data.primary.image.dimensions.width}
        alt={data.primary.image.alt}
      />
    )}
  </div>
)

export default Slider
