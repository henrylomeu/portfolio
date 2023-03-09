import { Text,Grid,Card} from "@nextui-org/react"
import { useState,useEffect } from "react"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Servicos = () => {

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
  <Grid.Container justify="center" 
    css={{
      marginTop:'$18', 
      display:'inline-block',
      alignItems: 'center', 
      justifyContent: 'center',
      width:'100vw',

      '@xsMax': {
        marginBottom:'1000px',
      }
            }}>
    <Grid 
      css={{
        textAlign: 'center', 
      }}>
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
      O que eu faço?
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
      Meus Serviços
    </Text>
    </Grid>
    </Grid.Container>
    <Grid.Container justify='center' css={{
        display:'inline-block',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
    }}>
  <Grid xs={12} md={4} css={{ mw: "350px",padding:'15px'}}>
    <Card isHoverable variant="bordered" css={{ mw: "350px", borderRadius: '15px',
    border: '2px solid #F5A524 ',backgroundColor:'#80818C',color:'white' }}>
      <Card.Body css={{ textAlign: "center",  }}>
        <h3>Desenvolvimento Web</h3>
          Um desenvolvimento focado na criação de sites, páginas únicas, e-commerce e outras aplicações. Promovendo uma boa experiência e uma boa otimização do site.
      </Card.Body>
    </Card>
  </Grid>
    <Grid xs={12} md={4} css={{ mw: "350px",padding:'15px'}}>
      <Card isHoverable variant="bordered" css={{ mw: "350px", borderRadius: '15px',
    border: '2px solid #F5A524 ',backgroundColor:'#80818C',color:'white'  }}>
        <Card.Body css={{ textAlign: "center" }}>
          <h3>Desenvolvimento Responsivo</h3>
            Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático e acessível. Ou aplicações 100% mobile, como aplicativos.
        </Card.Body>
      </Card>
    </Grid>
    <Grid xs={12} md={4} css={{ mw: "350px",padding:'15px'}}>
      <Card isHoverable variant="bordered" css={{ mw: "350px", borderRadius: '15px',
    border: '2px solid #F5A524 ',backgroundColor:'#80818C',color:'white'  }}>
        <Card.Body css={{ textAlign: "center" }}>
          <h3>Experiência do usuário</h3>
            Aplicações voltadas a um conjunto de elementos e fatores de um serviço, produto ou sistema que tem como objetivo promover uma boa experiência para o usuário.
        </Card.Body>
      </Card>
    </Grid>
  </Grid.Container>
  </motion.div>
  )
}

export default Servicos