import * as React from "react"
import styled, { keyframes } from "styled-components";
import {motion, AnimatePresence} from 'framer-motion'
import GlobalStyle from "./globalStyle";
import {StaticImage} from "gatsby-plugin-image";
import {ThemeProvider} from "styled-components"
import {lightTheme} from "../Themes"
import PowerButton from "../components/PowerButton";
import MenuItems from "../components/menu";

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`


const Box = styled(motion.div)`

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);


  width: 65vw;
  height: 55vh;
  display: flex;


  background: linear-gradient(to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) bottom,
  linear-gradient(to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};


  z-index: 1;

`
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;

  }



`

const Container = styled.div`
padding: 2rem;
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: 50%;
  height: 100%;
  z-index:1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`


const IndexPage = () => {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <ThemeProvider theme={lightTheme}>
                <AnimatePresence exitBeforeEnter>

                    <MainContainer>
                        <DarkDiv/>
                        <Container>
                            <PowerButton />
                            <StaticImage src="../images/logo.svg"
                                         alt="Ernesto Cobos - Logo"
                                         width={50}
                                         style={{ zIndex: 2 }}
                                         height={50}/>

                            <MenuItems/>
                        </Container>
                        <Box initial={{height: 0}}
                             animate={{height: '55vh'}}
                             transition={{type: 'spring', duration: 2, delay: 1}}>
                            <SubBox>
                                <Text>
                                    <h6>Hi there,</h6>
                                    <h3>I'm Ernesto Cobos.</h3>
                                    <h6>An IT consultant with experience as Full-Stack Development. and SRE.</h6>
                                </Text>
                            </SubBox>
                        </Box>
                        <SubBox>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1, delay: 2}}
                            >
                                <StaticImage src="../images/profile-image.png"
                                             alt="Ernesto Cobos - Logo"
                                             style={{zIndex: 2}}/>
                            </motion.div>
                        </SubBox>
                    </MainContainer>
                </AnimatePresence>
            </ThemeProvider>

        </React.Fragment>
    )
}

export default IndexPage
