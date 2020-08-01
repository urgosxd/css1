import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { LayoutWrapper, NavWrapper, P } from "../elements"
import { Menu } from "@styled-icons/entypo"
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { ParallaxProvider, Parallax } from "react-skrollr"

const Layout = ({ data, children, isHome }) => {
  return (
    <LayoutWrapper>
      <ParallaxProvider
        init={{
          smoothScrollingDuration: 500,
          smoothScrolling: true,
          forceHeight: false,
        }}
      >
        <NavWrapper>
          <Navbar expand="md" className="position-absolute barra">
            <Navbar.Brand className="logo">HELLO CTM</Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{
                background: `url(${Menu})`,
              }}
              className="togle"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end mr-2 nadaque"
            >
              <Nav className="navitems ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </NavWrapper>

        {children}
      </ParallaxProvider>
    </LayoutWrapper>
  )
}

export default Layout
