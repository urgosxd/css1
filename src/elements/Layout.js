import styled from "styled-components"

export const LayoutWrapper = styled.div`
  .heading {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  .text {
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
  }

  @media ${props => props.theme.devices.tablet} {
    .heading {
      font-size: 45px;
    }
  }

  @media ${props => props.theme.devices.phone} {
    .heading {
      font-size: 38px;
    }
  }
`
