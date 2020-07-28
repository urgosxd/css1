import styled from "styled-components"

export const NavWrapper = styled.nav`
  & .barra {
    width: 100%;
    z-index: 1000;
    padding: 40px 100px;
  }
  & .logo {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
  & .togle {
    background: white;
  }
  & .navbar-toggler-icon {
    color: white;
  }
  & .navitems .nav-link {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
  }
  .nadaque {
    transition: 0.5s;
  }

  @media ${props => props.theme.devices.tablet} {
    & .barra {
      padding: 40px 70px;
    }
  }
  @media ${props => props.theme.devices.phone} {
    & .barra {
      padding: 40px 50px;
    }
  }
`

export const BannerWrapper = styled.section`
  height: 100vh;
  background: #3475ca;
  & .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.25;
  }
  & .contenido {
    max-width: 750px;
  }
  & .contenido h2 {
    color: #fff;
    font-size: 55px;
    font-weight: 700;
  }
  & .contenido p {
    color: #fff;
  }
  @media ${props => props.theme.devices.tablet} {
    & .contenido h2 {
      font-size: 45px;
    }
  }
`

export const AboutWrapper = styled.section`
  & .contentBx {
    background: #162c3b;
    padding: 100px;
  }
  & .gatsby-image-wrapper {
    background-size: cover;
    background-position: center;
    width: 100%;
  }

  @media ${props => props.theme.devices.tablet} {
    & .contentBx {
      text-align: center;
      padding: 50px;
      min-height: 400px;
    }
    & .gatsby-image-wrapper {
      height: 500px;
    }
  }
`
export const ServicesWrapper = styled.section`
  background: #12222d;
  padding: 100px 0;
  text-align: center;

  & .contentBx {
    margin-top: 80px;
  }
  & .serviceBx .min {
    background: #fff;
    height: 400px;
    width: 350px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    flex-direction: column;
  }
  @media ${props => props.theme.devices.tablet} {
    & .contentBx .row {
      padding: 50px 0;
    }
    & .contentBx .row .serviceBx:last-child {
      margin-left: 25%;
    }
    & .contentBx .row .serviceBx {
      margin-bottom: 20px;
    }
  }
  @media ${props => props.theme.devices.phone} {
    padding: 60px 40px;
    & .serviceBx .min {
      width: 300px;
    }
    & .contentBx {
      margin-top: 5px;
    }
    & .serviceBx .min {
      width: 325px;
    }
    & .contentBx .row .serviceBx:last-child {
      margin-left: 0;
    }
  }
`
export const TecnologyWrapper = styled.section`
  background: #3f8ffc;
  padding: 100px;
  padding-top: 300px;
  margin-top: -300px;
  & .imgBox {
    max-width: 250px;
  }
  & .imgCol {
    padding-left: 20%;
  }
  @media ${props => props.theme.devices.tablet} {
    & .imgBox {
      margin: 50px 0;
    }
    & .imgCol {
      margin-top: 60px;
      margin-left: 13%;
    }
  }
  @media ${props => props.theme.devices.phone} {
    padding: 50px 50px;
    padding-top: 250px;
    text-align: center;
    & .imgCol {
      padding-left: 0%;
    }
  }
`
export const ClientWrapper = styled.section`
  background: #162c3b;
  padding: 100px;
  text-align: center;
  & .gatsby-image-wrapper {
    opacity: 0.25;
    cursor: pointer;
  }
  & .gatsby-image-wrapper:hover {
    opacity: 1;
  }
  @media ${props => props.theme.devices.tablet} {
    & .gatsby-image-wrapper {
      margin-bottom: 25px;
    }
  }
  @media ${props => props.theme.devices.phone} {
    padding: 70px;
    & .gatsby-image-wrapper {
      margin-bottom: 50px;
    }
  }
`
export const TestimonialsWrapper = styled.section`
  position: relative;
  padding: 100px;
  background: #12222d;
  text-align: center;
  & .contentBx {
    background: #fff;
    padding: 60px 50px;
  }
  & .contentBx p {
    font-style: italic;
  }
  & .contentBx h3 {
    font-size: 20px;
    text-align: end;
    font-weight: 500;
    color: #3f8ffc;
  }

  @media ${props => props.theme.devices.tablet} {
    padding-bottom: 10px;
    & .contentBx {
      margin-bottom: 40px;
    }
    & .contentBx::last-child {
      margin-bottom: 0;
    }
  }
  @media ${props => props.theme.devices.phone} {
    padding: 50px;
  }
`
export const ContactWrapper = styled.section`
  & .contact {
    padding: 100px;
    background: #162c3b;
    text-align: center;
  }
  & .contentBx {
    text-align: left;
    padding: 100px;
  }

  & .gatsby-image-wrapper {
    background-size: cover;
    background-position: center;
  }
  & .formulario .inputBx {
    margin-bottom: 40px;
  }
  & .formulario .inputBx input {
    width: 100%;
    background: transparent;
    box-shadow: none;
    border: none;
    outline: none;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    border-bottom: 2px solid #fff;
  }
  & .formulario .inputBx input::placeholder {
    color: #fff;
  }
  & .formulario .inputBx textarea {
    width: 100%;
    background: transparent;
    box-shadow: none;
    border: none;
    outline: none;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    border-bottom: 2px solid #fff;
  }
  & .formulario .inputBx textarea::placeholder {
    color: #fff;
  }
  & .formulario .inputBx input[type="submit"] {
    width: 150px;
    background: #fff;
    color: #111;
    cursor: pointer;
    font-weight: 400;
  }
  @media ${props => props.theme.devices.phone} {
    & .contact {
      padding: 50px;
      background: #162c3b;
      text-align: center;
    }
  }
`
export const FooterWrapper = styled.footer`
  background: #162c3b;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & ul {
    display: flex;
    justify-content: center;
  }
  & ul li {
    list-style: none;
  }
  & ul li a {
    text-decoration: none;
    display: inline-block;
    margin: 0 10px;
    color: #fff;
  }
  & ul li a:hover {
    color: #fff;
    filter: invert(1);
  }
  @media ${props => props.theme.devices.phone} {
    padding: 30px 25px;
    flex-direction: column-reverse;
  }
`
