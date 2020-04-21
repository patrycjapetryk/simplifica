import React, { useState } from 'react'

import Button from '../../components/atoms/Button/Button'
import Title from '../../components/atoms/Title/Title'

const Portfolio = ({ data }) => {
  const [visibleSlides, setVisibleSlides] = useState(3)

  return (
    <section>
      <Title data={data} />

      {data.fields &&
        data.fields.map((slide, index) => (
          <React.Fragment key={index}>
            {index < visibleSlides && (
              <div>
                <img
                  src={slide.image.url}
                  width={slide.image.dimensions.width}
                  alt={slide.image.alt}
                />
                <p>{slide.paragraph[0].text}</p>
              </div>
            )}
          </React.Fragment>
        ))}

      <Button
        onClick={() =>
          visibleSlides === 3 ? setVisibleSlides(9) : setVisibleSlides(3)
        }
      >
        {visibleSlides === 3 ? 'Więcej...' : 'Mniej'}
      </Button>
    </section>
  )
}

export default Portfolio
