import React from 'react'

import Title from '../../components/atoms/Title/Title'

const Contact = ({ data }) => (
  <section>
    <Title data={data} />
    {data.primary.description && <p>{data.primary.description[0].text}</p>}
  </section>
)

export default Contact
