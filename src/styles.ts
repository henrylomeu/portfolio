import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
    position: fixed;
    margin-top: 27px;
    left: 0;
    right: 0;
    height: 10px;
    background: #F5A524;
    transform-origin: 0%;
    z-index: 2000;

    @media only screen and (max-width: 1024px) {
      margin-top: 79px;
      z-index: 2000;
    }
    
`

export const Container = styled.div`
width: 100%;
min-height: 100vh;
margin: 0;
padding: 0;
background-color: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.fontColor};

transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`