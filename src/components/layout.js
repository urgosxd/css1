import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { LayoutWrapper, NavWrapper, P } from "../elements"
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap"

export const Layout = ({ data, children, isHome }) => {
  const dataQ = useStaticQuery(graphql`
    query Hola {
      allFile(filter: { relativePath: { eq: "toggle.png" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(dataQ)

  const Hamburger = dataQ.allFile.edges[0].node.childImageSharp.fluid.src

  return (
    <LayoutWrapper>
      <NavWrapper>
        <Navbar expand="md" className="position-absolute barra">
          <Navbar.Brand className="logo">HELLO CTM</Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              background: `url(${Hamburger})`,
            }}
            className="togle"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end mr-2"
          >
            <Nav className="navitems ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavWrapper>

      {children}
      <div></div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
