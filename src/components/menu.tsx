import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled.a`
color: #FCF6F4;

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`
const ABOUT = styled.a`
color: #FCF6F4;
text-decoration: none;
z-index:1;
`
const SKILLS = styled.a`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
color: #FCF6F4;

display: flex;
justify-content: space-evenly;
`

const MenuItems = () => {
    return (
        <>
            <Contact target="_blank" href="mailto:codebucks27@gmail.com">
                <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}

                >
                    Say hi..
                </motion.h2>
            </Contact>
            <BLOG>
                <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    Blog
                </motion.h2>
            </BLOG>
            <WORK>
                <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>
            <BottomBar>
                <ABOUT>
                    <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        About.
                    </motion.h2>
                </ABOUT>
                <SKILLS>
                    <motion.h2
                        initial={{
                            y:200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        My Skills.
                    </motion.h2>
                </SKILLS>
            </BottomBar>
        </>
    )
}

export default MenuItems;

