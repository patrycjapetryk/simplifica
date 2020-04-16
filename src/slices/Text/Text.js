import React from 'react'

import Title from '../../components/atoms/Title/Title'

const Text = ({ data }) => (
  <section>
    <Title data={data} />
    {data.primary.description && <p>{data.primary.description[0].text}</p>}
    {data.primary.image && (
      <img
        src={data.primary.image.url}
        width={data.primary.image.dimensions.width}
        alt={data.primary.image.alt}
      />
    )}
  </section>
)

export default Text
