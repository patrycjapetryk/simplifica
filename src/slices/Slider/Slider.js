import React from 'react'

import Button from '../../components/atoms/Button/Button'
import Title from '../../components/atoms/Title/Title'

const Slider = ({ data }) => (
  <section>
    <Title data={data} />
    <Button>Więcej...</Button>

    {data.primary.image && (
      <img
        src={data.primary.image.url}
        width={data.primary.image.dimensions.width}
        alt={data.primary.image.alt}
      />
    )}
  </section>
)

export default Slider
