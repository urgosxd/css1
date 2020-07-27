import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import { BannerWrapper, P, AboutWrapper, ServicesWrapper } from "../elements"

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
          <Col className="contentBx" lg={6}>
            <h2 className="heading">{data.h2}</h2>
            <p size="small" className="text">
              {data.p}
            </p>
          </Col>
          <Col lg={6}>
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
      <Container className="">
        <Row>
          {data.box.map(e => (
            <Col lg={4} className="serviceBx ">
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
  return <div>asd</div>
}

export const Client = ({ data }) => {
  return <div>asd</div>
}

export const Testimonials = ({ data }) => {
  return <div>asd</div>
}
