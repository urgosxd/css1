import styled from "styled-components"

export const NavWrapper = styled.nav`
  .barra {
    width: 100%;
    z-index: 1000;
    padding: 40px 100px;
  }
  .logo {
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .togle {
    position: relative;
    height: 28px;
    width: 36px;
    background-size: cover;
    border: none;
    padding: 0;
  }
  .navbar-toggler-icon {
    display: none;
    background: none;
  }
  .navitems .nav-link {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
  }
  .nadaque {
    transition: 0.5s;
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
    font-size: 60px;
  }
  & .contenido p {
    color: #fff;
  }
`

export const AboutWrapper = styled.section`
  .contentBx {
    background: #162c3b;
    padding: 100px;
  }
  & .gatsby-image-wrapper {
    background-size: cover;
    background-position: center;
    width: 100%;
  }
`
export const ServicesWrapper = styled.section`
  background: #12222d;
  padding: 100px;
  text-align: center;

  .serviceBx .min {
    background: #fff;
    height: 400px;
    width: 350px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    flex-direction: column;
  }
`
