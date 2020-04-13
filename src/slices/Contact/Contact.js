import React from 'react'
const slugify = require('slugify')

const Contact = ({ data }) => (
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

    {data.primary.description && <p>{data.primary.description[0].text}</p>}
  </div>
)

export default Contact
