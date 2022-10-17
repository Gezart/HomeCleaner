import * as React from "react"
import { graphql } from "gatsby"
import '../../Assets/css/main.css'


export default function Home({data}) {
  return <div>Hello world!</div>
}
export const data = graphql `
  query PageQuery {
    allWpPage {
      nodes {
        slug
        sections {
          sections {
            ... on WpPage_Sections_Sections_Text {
              title
            }
          }
        }
      }
    }
  }
`

