import React from 'react'
import Container from './Container'
import { useStaticQuery, graphql } from "gatsby"
import Form from './Form'
const Contact = () => {

  const data = useStaticQuery(graphql`
    {
      wp {
        acfOptionsThemeOption {
          themeOptions {
            formTitle
            footerDescription
            footerMenuTitle
            footerMenu {
              title {
                ... on WpPage {
                  title
                  slug
                }
              }
            }
            policyTitle
            policyMenu {
              title {
                ... on WpPage {
                  title
                  slug
                }
              }
            }
            socialMediaTitle
            socialMedia {
              icon
              link {
                title
                url
              }
            }
            emailTitle
            phoneTitle
            contactItems {
              icon
              link {
                title
                url
              }
            }
            topFooterTitle
            footerButton {
              ... on WpPage {
                title
                slug
              }
            }
            phone
            location
            email
            social
          }
        }
      }
    }
  `)
  let options = data.wp.acfOptionsThemeOption.themeOptions;
  console.log('>>>>>>>>>>>', options)
  return (
    <Container>
      <div className="contact-wrapper">
        <div className="form-info">
          <div className="text" dangerouslySetInnerHTML={{ __html: options.formTitle }}></div>
          <div className="form-contact">
            <div className="contact-item">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.contactItems[0].icon }}></div>
              <div className="item-content">
                <h3>{options.location}</h3>
                <p>{options.contactItems[0].link.title}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.contactItems[1].icon }}></div>
              <div className="item-content">
                <h3>{options.email}</h3>
                <a href={options.contactItems[1].link.url}>{options.contactItems[1].link.title}</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.contactItems[2].icon }}></div>
              <div className="item-content">
                <h3>{options.phone}</h3>
                <a href={options.contactItems[2].link.url}>{options.contactItems[2].link.title}</a>
              </div>

            </div>
            <div className="contact-item">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.contactItems[3].icon }}></div>
              <div className="item-content">
                <h3>{options.social}</h3>
                <div className="sm-item">
                  {
                    options.socialMedia.map((smItem, index) =>
                      <a href={smItem.link.url} key={index} target="_blank" dangerouslySetInnerHTML={{ __html: smItem.icon }}></a>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <Form />
        </div>
      </div>
    </Container>
  )
}

export default Contact