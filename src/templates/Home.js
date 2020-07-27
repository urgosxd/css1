import React from "react"
import {
  Layout,
  Banner,
  About,
  Services,
  Tecnology,
  Client,
  Testimonials,
} from "../components"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      markdownRemark(id: { eq: "34fb13db-f4ba-5ac2-9c9b-23acf9359806" }) {
        id
        frontmatter {
          content {
            baner {
              h2
              p
              img {
                childImageSharp {
                  fluid(maxWidth: 1400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            about {
              h2
              p
              img {
                childImageSharp {
                  fluid(maxWidth: 1400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            services {
              h2
              p
              box {
                img {
                  childImageSharp {
                    fixed(width: 100, quality: 100, height: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                h2
              }
            }
            tecnology {
              h2
              p
              img {
                childImageSharp {
                  fluid(maxWidth: 250, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            client {
              h2
              p
              box {
                img {
                  childImageSharp {
                    fixed(width: 200, quality: 100, height: 60) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            testimonials {
              h2
              box {
                p
                h3
              }
            }
          }
        }
      }
    }
  `)

  const baner = data.markdownRemark.frontmatter.content.baner
  const about = data.markdownRemark.frontmatter.content.about
  const services = data.markdownRemark.frontmatter.content.services
  const tecnology = data.markdownRemark.frontmatter.content.tecnology
  const client = data.markdownRemark.frontmatter.content.client
  const test = data.markdownRemark.frontmatter.content.testimonials

  return (
    <Layout>
      <Banner data={baner} />
      <About data={about} />
      <Services data={services} />
      <Tecnology data={tecnology} />
      <Client data={client} />
      <Testimonials data={test} />
    </Layout>
  )
}
