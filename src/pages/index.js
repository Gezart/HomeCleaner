import * as React from "react"
import { graphql } from "gatsby"
import '../../Assets/css/main.css'
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import ColoredBanner from '../components/ColoredBanner';
import Layout from '../components/Layout';
import PlainText from '../components/PlainText';
import Text from '../components/Text';
import Services from '../components/Services';
import Images from '../components/Images';
import Slider from '../components/Slider';
import Contact from '../components/Contact';
import Seo from "../components/Seo";

export default function Home({data}) {
 let sections = data.wpPage.sections.sections
 console.log("===================env================", process.env.GATSBY_SITE_URL);
 return (
  <main>
  <Layout>
    <Seo title="Home - Home Cleaner" description="Clean your home with Home Cleaner" keywords="Home Cleaner, Cleaning"/>
      {
          sections.map((section, index) => {
              const typeName = section.__typename;
              switch(typeName){
              case 'WpPage_Sections_Sections_Text':
                  return <Text {...section} key={index}/>
              case 'WpPage_Sections_Sections_Banner':
                  return <Banner {...section} key={index}/>
              case 'WpPage_Sections_Sections_BannerWithColor':
                  return <ColoredBanner {...section} key={index}/>
              case 'WpPage_Sections_Sections_PlainText':
                  return <PlainText {...section} key={index}/>
              case 'WpPage_Sections_Sections_Services':
                  return <Services {...section} key={index}/>
              case 'WpPage_Sections_Sections_AboutUs':
                  return <AboutUs {...section} key={index}/>
              case 'WpPage_Sections_Sections_Images':
                  return <Images {...section} key={index}/>
              case 'WpPage_Sections_Sections_Slider':
                      return <Slider {...section} key={index}/>
              case 'WpPage_Sections_Sections_ContactForm' :
                  return<Contact {...section} key={index} />
              
              default: 
              return <p>No section</p>
              
              }              
          })
      }
  </Layout>
  </main>
)
}
export const data = graphql `
query MyQuery {
  wpPage(title: {eq: "Home"}) {
    sections {
      sections {
        __typename
        ... on WpPage_Sections_Sections_Text {
          title
          content
        }
        ... on WpPage_Sections_Sections_Banner {
          title
          content
          bannerSize
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        ... on WpPage_Sections_Sections_BannerWithColor {
          title
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        ... on WpPage_Sections_Sections_AboutUs {
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
        ... on WpPage_Sections_Sections_Services {
          titles {
            title
          }
        }
        ... on WpPage_Sections_Sections_Images {
          images {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
        ... on WpPage_Sections_Sections_Slider {
          slides {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF, PNG]
                  )
                }
              }
            }
          }
        }
        ... on WpPage_Sections_Sections_PlainText {
          column {
            title
            content
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  }
}

`

