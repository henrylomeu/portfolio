import { useEffect } from "react";
import javascript from '../assets/svg/bxl-javascript.svg';
import react from '../assets/svg/bxl-react.svg';
import typescript from '../assets/svg/bxl-typescript.svg';
import git from '../assets/svg/bxl-git.svg';
import github from '../assets/svg/bxl-github.svg';
import sass from '../assets/svg/bxl-sass.svg';
import { Card, Grid, Image, Tooltip, Text, Container } from "@nextui-org/react";
import './index.css';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function App() {

  const MockItem = ({ text }) => {
    return (
      
      <Card css={{ h: "$20", $$cardColor: '$colors$warning' }}>
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
    <Container  css={{  }}>
    <h3
        className="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '50px',
          fontWeight:'bold',
          /* color: '#80818C' */
         /*  '@xsMax': {
            fontSize: '22px'
          } */
        }}
      >
        Onde eu sou bom
      </h3>
    <Text
        className="text1"
        h1
        size={60}
        css={{
          color:'#F5A524',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '@xsMax': {
            fontSize: '50px',
          }
        }}
        weight="bold"
      >
      Minhas Skills
      </Text>
      <Text
        className="text1"
        h1
        size={20}
        css={{
          color:'grey',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          '@xsMax': {
            fontSize: '20px',
          }
        }}
        weight="bold"
      >
      /* Tente clicar  */
      </Text>
      <Grid.Container justify="center" >
        <Grid xs={5} md={1} css={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px',marginTop:'40px'}}>
        <Tooltip
          trigger="click"
          color="warning"
          content="Atualmente tenho 7 meses de experiência com Javascript"
          placement="bottom"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        >
          <Image 
            width='auto'  
            src={javascript}
            alt="Default Image"
            objectFit="cover" 
            css={{cursor: 'pointer'}}
          />
      </Tooltip>
        </Grid>
        <Grid xs={5} md={1} css={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px',marginTop:'40px'}}>
        <Tooltip
          trigger="click"
          color="warning"
          content="Atualmente tenho 5 meses de experiência com ReactJS"
          placement="bottom"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        >
        <Image 
          width='auto'  
          src={react}
          alt="Default Image"
          objectFit="cover" 
          css={{cursor: 'pointer'}}
      />
      </Tooltip>
        </Grid>
        <Grid xs={5} md={1} css={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px',marginTop:'40px'
,marginTop:'40px'}}>
        <Tooltip
          trigger="click"
          color="warning"
          content="Atualmente tenho 4 meses de experiência com Typescript"
          placement="bottom"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        >
        <Image
          width='auto'  
          src={typescript}
          alt="Default Image"
          objectFit="cover"
          css={{cursor: 'pointer'}}
        />
      </Tooltip>
        </Grid>
        <Grid xs={5} md={1} css={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px',marginTop:'40px'
,marginTop:'40px'}}>
        <Tooltip
          trigger="click"
          color="warning"
          content="Atualmente tenho 2 meses de experiência com Git"
          placement="bottom"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        >
        <Image 
          width='auto'  
          src={git}
          alt="Default Image"
          objectFit="cover" 
          css={{cursor: 'pointer'}}
        />
      </Tooltip>
        </Grid>
        <Grid xs={5} md={1} css={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px',marginTop:'40px'
,marginTop:'40px'}}>
        <Tooltip
          trigger="click"
          color="warning"
          content="Atualmente tenho 6 meses de experiência com Github"
          placement="bottom"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        >
        <Image 
          width='auto'  
          src={github}
          alt="Default Image"
          objectFit="cover"
          css={{cursor: 'pointer'}} 
        />
      </Tooltip>
        </Grid>
        <Grid xs={5} md={1} css={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'20px',marginTop:'40px'
,marginTop:'40px'}}>
        <Tooltip
          trigger="click"
          color="warning"
          content="Atualmente tenho 6 meses de experiência com SASS"
          placement="bottom"
          css={{width: "180px", textAlign: "center",fontWeight:'bold'}}
        >
        <Image 
          width='auto'  
          src={sass}
          alt="Default Image"
          objectFit="cover" 
          css={{cursor: 'pointer'}}
        />
      </Tooltip>
        </Grid>
      </Grid.Container>
    </Container>
    </motion.div>
  );
}