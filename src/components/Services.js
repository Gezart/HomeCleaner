import React from 'react'
import Container from './Container'

const Services = ({ titles }) => {
    return (
        <Container>
            <div className="services-titles">
                {
                    titles.map((item, index) =>
                       <div className='title' key={index}><p>{item.title}</p></div>
                    )
                }
            </div>
        </Container>
    )
}

export default Services