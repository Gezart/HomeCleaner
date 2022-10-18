import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Logo from '../../logo.png'

const Seo = ({title, description, keywords}) => {
    const data = useStaticQuery(graphql`
        {
            wp {
                acfOptionsThemeOption {
                  themeOptions {
                    tabIcon {
                      localFile {
                        childImageSharp {
                          gatsbyImageData
                        }
                      }
                    }
                  }
                }
              }
        }
    `)
    console.log('>>>>>>>>>>>', Logo)
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