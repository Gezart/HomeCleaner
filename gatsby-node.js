exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
  
	const wpData = await graphql(`
  query PageQuery {
    allWpPage {
      nodes {
        title
        slug
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
                          formats: [AUTO, WEBP, AVIF, PNG]
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
  }
  
  
  `)

	if (wpData.errors) {
		console.error(wpData.errors)
	}


	const { allWpPage } = wpData.data
	allWpPage.nodes.forEach( page => {
		createPage({
			path: `/${page.slug}`,
			component: require.resolve(`./src/templates/page.js`),
			context: { page },
		})
	})
  
}