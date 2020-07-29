import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import {
  BannerWrapper,
  P,
  AboutWrapper,
  ServicesWrapper,
  TecnologyWrapper,
  ClientWrapper,
  TestimonialsWrapper,
  ContactWrapper,
  FooterWrapper,
} from "../elements"
import { Instagram, Twitter, Linkedin } from "@styled-icons/boxicons-logos"

export const Banner = ({ data }) => {
  const image = data.img.childImageSharp.fluid

  return (
    <BannerWrapper className="position-relative w-100 d-flex justify-content-center align-items-center">
      <Img fluid={image} />
      <div className="position-relative text-center contenido">
        <h2>{data.h2}</h2>
        <P size="small">{data.p}</P>
      </div>
    </BannerWrapper>
  )
}

export const About = ({ data }) => {
  const image = data.img.childImageSharp.fluid
  return (
    <AboutWrapper>
      <Container className="position-relative p-0" fluid={true}>
        <Row noGutters={true}>
          <Col className="contentBx" sm={12} md={12} lg={6}>
            <h2 className="heading">{data.h2}</h2>
            <P size="small" className="text">
              {data.p}
            </P>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Img fluid={image} />
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  )
}

export const Services = ({ data }) => {
  console.log(data)

  return (
    <ServicesWrapper>
      <h2 className="heading">{data.h2}</h2>
      <P size="small" className="text">
        {data.p}
      </P>
      <Container className="contentBx">
        <Row>
          {data.box.map(e => (
            <Col lg={4} md={6} xs={12} className="serviceBx ">
              <div className="min">
                <Img fixed={e.img.childImageSharp.fixed} />
                <h2>{e.h2}</h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </ServicesWrapper>
  )
}

export const Tecnology = ({ data }) => {
  return (
    <TecnologyWrapper>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div>
              <h2 className="heading ">{data.h2}</h2>
              <P size="small" className="text mt-4">
                {data.p}
              </P>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className="imgCol">
            <Img fluid={data.img.childImageSharp.fluid} className="imgBox" />
          </Col>
        </Row>
      </Container>
    </TecnologyWrapper>
  )
}

export const Client = ({ data }) => {
  console.log(data)
  return (
    <ClientWrapper>
      <h2 className="heading">{data.h2}</h2>
      <P size="small" className="text pb-5">
        {data.p}
      </P>
      <Container>
        <Row className="mt-5">
          {data.box.map(e => (
            <Col xs={12} md={6} lg={3}>
              <Img fixed={e.img.childImageSharp.fixed} className="imgBox" />
            </Col>
          ))}
        </Row>
      </Container>
    </ClientWrapper>
  )
}

export const Testimonials = ({ data }) => {
  return (
    <TestimonialsWrapper>
      <h2 className="heading">{data.h2}</h2>
      <Container>
        <Row className="mt-5">
          {data.box.map(e => (
            <Col lg={6}>
              <div className="contentBx d-flex justify-content-center align-items-center  flex-column text-left">
                <P size="small">{e.p}</P>
                <br />
                <h3 className="w-100">{e.h3}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </TestimonialsWrapper>
  )
}

export const Contact = ({ data }) => {
  console.log(data)
  const image = data.img.childImageSharp.fluid
  const image2 = data.img2.childImageSharp.fluid.src
  return (
    <ContactWrapper>
      <div className="contact">
        <h2 className="heading">{data.h2}</h2>
        <P size="small" className="text">
          {data.p}
        </P>
      </div>
      <Container className="h-75 p-0" fluid={true}>
        <Row noGutters={true}>
          <Col
            className="contentBx"
            xs={12}
            md={12}
            lg={6}
            style={{ background: `url(${image2})` }}
          >
            <form
              className="formulario"
              name="Contact Form"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="inputBx">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="inputBx">
                <input
                  type="email"
                  placeholder="Email Adress"
                  name="email"
                  id="email"
                />
              </div>
              <div className="inputBx">
                <input
                  type="text"
                  placeholder="Mobile nro"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="inputBx">
                <textarea
                  placeholder="Write your Message"
                  name="message"
                  id="message"
                />
              </div>
              <div data-netlify-recaptcha="true"></div>
              <div className="inputBx">
                <button type="submit">Send</button>
              </div>
            </form>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Img fluid={image} />
          </Col>
        </Row>
      </Container>
    </ContactWrapper>
  )
}

export const Footer = ({ data }) => {
  return (
    <FooterWrapper>
      <P size="small" className="text">
        {data.p}
      </P>
      <ul>
        <P size="small" className="text">
          Follow us on:
        </P>
        <li>
          <a href="#">
            <Instagram size="25" />
          </a>
        </li>
        <li>
          <a href="#">
            <Twitter size="25" />
          </a>
        </li>
        <li>
          <a href="#">
            <Linkedin size="25" />
          </a>
        </li>
      </ul>
    </FooterWrapper>
  )
}
