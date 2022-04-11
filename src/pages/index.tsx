import * as React from "react"
import styled from "styled-components";
import { c } from "../constants"
import GlobalStyle from "./globalStyle";
import {StaticImage} from "gatsby-plugin-image";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: ${c.colors.background};
`

const ColorDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: 50%;
  background-color: ${c.colors.colorPane};;
  height: 100%;
  transition: height 0.5s ease 0s, width 1s ease 0.5s;
  z-index: 1;
`

const Header = styled.div`
  padding: 2rem;
`

const LogoWrapper = styled.div`
  picture {
    width: 100%;
    &:hover {
      width: 150%;
    }
  }
`

const EyeButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0px);
  background-color: ${c.colors.background};
  padding: 0;
  border-radius: 90%;
  border: 1px solid ${c.colors.colorPane};
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  height: 55vh;
  width: 65vw;
  display: flex;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  background: linear-gradient(to right, rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) center bottom / 100% 2px no-repeat, linear-gradient(to right, ${c.colors.colorPane} 50%,  ${c.colors.background} 50%) center top;
  background-repeat: no-repeat;
  border-left: 2px solid  ${c.colors.background};
  border-right: 2px solid ${c.colors.colorPane};
`
const LeftContainer = styled.div`
  font-size: calc(1rem + 1.5vw);
  color: rgb(252, 246, 244);
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const IndexPage = () => {
  return (
  <React.Fragment>
    <GlobalStyle />
    <MainWrapper>
      <ColorDiv />
      <Header>
        <LogoWrapper>
          <StaticImage src="../images/logo.svg"
                       alt="Ernesto Cobos - Logo"
                       width={50}
                       style={{ zIndex: 2 }}
                       height={50}/>
        </LogoWrapper>
        <EyeButton>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449S19.748 19 12.015 19C4.835 19 0 11.551 0 11.551S4.446 5 12.015 5C19.709 5 24 11.551 24 11.551zM17 12c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z"/>
          </svg>
        </EyeButton>
      </Header>
      <ContentWrapper>
        <LeftContainer>
        </LeftContainer>
      </ContentWrapper>
    </MainWrapper>
  </React.Fragment>
  )
}

export default IndexPage
