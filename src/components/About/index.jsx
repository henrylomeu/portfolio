import { Grid, Card, Text, Container, Image, Tooltip } from "@nextui-org/react";
import {useMediaQuery} from './useMediaQuery.js'
import Sobre from '../assets/sobre.jpg';
import User from '../assets/svg/bxs-user-detail.svg'
import Calendar from '../assets/svg/bx-calendar.svg'
import Map from '../assets/svg/bx-map.svg'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation,useTime, useTransform } from 'framer-motion';
import { useEffect } from "react";
import './styles.css';
export default function App() {

  
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  const isMd = useMediaQuery(960);

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$20", $$cardColor: '$colors$primary', }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
    >
    <Container css={{marginTop:'$18',}}>
    <h3
        className="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '50px',
          fontWeight:'bold',
          /* color:'#80818C' */
         /*  '@xsMax': {
            fontSize: '22px'
          } */
        }}
      >
        Quem sou eu?!
      </h3>
      
      <Text
        h1
        size={60}
        css={{
          color:'#F5A524',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '@xsMax': {
            fontSize: '50px'
          }
        }}
        weight="bold"
      >
        Sobre mim
      </Text>
      <Grid.Container justify="center">
      <Grid >
        <Image src={Sobre} className='no-rotate' css={{width:'250px', height: '250px', borderRadius:'$2xl',  
            '@xsMax': {
              
            },}}/>
      </Grid>
      <Grid justify="center"
         css={{
            marginRight:'180px',
            '@xsMax': {
              
            },
          }}>
      <Tooltip
          color="warning"
          content="Henry Lomeu Souza"
          placement="rightStart"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        ><Image justify="center"src={User} css={{marginBottom:'65px',cursor: "pointer", paddingLeft:'50px','@xsMax': {
          display: 'none'
        },}}/></Tooltip>
        <Tooltip
          color="warning"
          content="Maio de 2000"
          placement="rightStart"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        ><Image justify="center"src={Calendar} css={{marginBottom:'30px',cursor: "pointer", paddingLeft:'50px' ,'@xsMax': {
          display: 'none'
        },}}/></Tooltip>
        <Tooltip
          color="warning"
          content="Brasília, Brasil"
          placement="rightEnd"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        ><Image justify="center" src={Map} css={{marginTop:'50px',cursor: "pointer", paddingLeft:'50px', '@xsMax': {
          display: 'none'
        },}}/></Tooltip>
      </Grid>
    </Grid.Container>
    <Grid >
    <h4
        className="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign:'center',
          paddingTop: '50px',
         /*  color:'#80818C' */
         /*  '@xsMax': {
            fontSize: '22px'
          } */
        }}
      >
        Curioso sobre como sites são feitos e funcionam! Desenvolvi alguns projetos de front-end utilizando HTML5, CSS3, Javascript, React, TypeScript, NextJS e consumo de APIs e disponibilizei os links deles e de seus repositórios do github nesse site. Meu primeiro contato com a programação foi em 2022. Acabei ficando extremamente fascinado pelo universo dessas tecnologias e decidi estudar algumas linguagens voltadas para o desenvolvimento front-end.
      </h4>
      </Grid>
    </Container>
    </motion.div>
  );
}
