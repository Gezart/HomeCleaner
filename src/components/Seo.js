import React from 'react'
import { Helmet } from 'react-helmet'
import Logo from '../../logo.png'

const Seo = ({title, description, keywords}) => {
  return (
    <>
        <Helmet>
            <title>{title}</title>
            <link rel="icon" href={Logo} />
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
        </Helmet>
    </>
  )
}

export default Seo