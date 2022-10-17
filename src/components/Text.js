import React from 'react'
import Container from './Container'

const Text = ({title, content}) => {
    return (
    <Container>
        <div className='text'>
          <h2>{title}</h2>
          <div className='content' dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </Container>
  )
}

export default Text
