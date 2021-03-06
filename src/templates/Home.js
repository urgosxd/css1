import React from "react"
import {
  Banner,
  About,
  Services,
  Tecnology,
  Client,
  Testimonials,
  Contact,
  Footer,
} from "../components"
import { useStaticQuery, graphql } from "gatsby"
import Loadable from "react-loadable"

const loader = () => <div>Loading about content.....</div>

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      markdownRemark(frontmatter: { path: { eq: "/hola" } }) {
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
                  fixed(width: 670, quality: 100, height: 600) {
                    ...GatsbyImageSharpFixed
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
            contact {
              h2
              p
              img {
                childImageSharp {
                  fluid(maxWidth: 1400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              img2 {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100, maxHeight: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            footer {
              p
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
  const contact = data.markdownRemark.frontmatter.content.contact
  const footer = data.markdownRemark.frontmatter.content.footer

  const MyParallaxComponent = Loadable({
    loader: () => import("../components/layout"),
    loading: loader,
  })
  return (
    <MyParallaxComponent>
      <Banner data={baner} />
      <About data={about} />
      <Services data={services} />
      <Tecnology data={tecnology} />
      <Client data={client} />
      <Testimonials data={test} />
      <Contact data={contact} />
      <Footer data={footer} />
    </MyParallaxComponent>
  )
}
