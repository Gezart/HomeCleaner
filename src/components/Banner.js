import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Banner = ({title, content, image, bannerSize}) => {
  const bannerImage = getImage(image?.localFile)
  return (
    <div className={`banner ${bannerSize}`}>
        {/* <GatsbyImage image={getImage(image.localFile)} /> */}
        <div className="banner-image">
          <GatsbyImage image={bannerImage} alt="Banner Image"/>
        </div>
       <div className="banner-content">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
       </div>
    </div>
  )
}

export default Banner