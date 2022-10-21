import React from 'react'
import Container from './Container'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ModalImage from "react-modal-image";

const Images = ({ images }) => {
  return (
    <Container>
      <div className="images">
        {
          images.map((item, index) => {
            console.log("testtt",item);
            return (
              <div className='image' key={index}>

                
                {/* <ModalImage
                  small={<GatsbyImage image={getImage(item.image?.localFile)} alt="Banner Image" />}
                  large={<GatsbyImage image={getImage(item.image?.localFile)} alt="Banner Image" />}
                /> */}



               
                <GatsbyImage image={getImage(item.image?.localFile)} alt="Banner Image" />
              </div>
            )
          }

          )
        }
      </div>
    </Container>
  )
}

export default Images