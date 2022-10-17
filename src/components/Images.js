import React from 'react'
import Container from './Container'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Images = ({images}) => {
  return (
    <Container>
        <div className="images">
            {
              images.map((item, index) =>
              <div className='image' key={index}>
                        <GatsbyImage image={getImage(item.image?.localFile)} alt="Banner Image"/>
                    </div>
                )
            }
        </div>
    </Container>
  )
}

export default Images