import React from 'react'
import Container from './Container'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutUs = ({image, content}) => {
    const bannerImage = getImage(image?.localFile)
  return (
    <Container>
        <div className='about-us'>
            <div className="image">
                <GatsbyImage image={bannerImage} alt="Banner Image"/>
            </div>
            <div className='content' dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>

    </Container>
  )
}

export default AboutUs