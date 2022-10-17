import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from 'react'
import Container from './Container'
const PlainText = ({ column, image }) => {
    const allColumns = column;
    return (
        <Container>
            <div className={`plain-text`}>
                {
                    allColumns.map((column, index) =>
                        <div className="column" key={index}>
                            <div className="image">
                                <GatsbyImage image={getImage(column.image?.localFile)} alt={column.title} />
                            </div>
                            <h3>{column.title}</h3>
                            <p>{column.content}</p>
                            {
                                column.plainButton && column.plainButton.title ?
                                    <Link to={column.plainButton && column.plainButton.url}>
                                        <button>{column.plainButton && column.plainButton.title}</button> </Link> : ''
                            }

                        </div>
                    )
                }
            </div>
        </Container>
    )
}

export default PlainText

