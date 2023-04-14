import { Button, Container, Text, Link, Grid, Image } from "@nextui-org/react";
import github from '../assets/svg/bxl-github.svg'
import github2 from '../assets/svg/bxl-github2.svg'
import file from '../assets/svg/bxs-file-doc.svg'
import linkedin from '../assets/svg/bxl-linkedin-square.svg'
import './index.css'
import { motion } from "framer-motion";

export default function App() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing
      }
    }
  };
  return (
   
    <motion.div className="name" initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <Container 
      css={{ 
        '@xsMax': {

    }}}>
      
      <motion.h2
      variants={fadeInUp}
        className="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight:'bold',
          fontSize: '30px'
          /* color: '#80818C' */
         /*  '@xsMax': {
            fontSize: '22px'
          } */
        }}
      >
        Olá, me chamo
      </motion.h2>
      <motion.h1
      variants={{
        ...fadeInUp,
        animate: {
          ...fadeInUp.animate,
          transition: { ...fadeInUp.animate.transition, delay: 0.5 }
        }
      }}
      className="text1"
      style={{
          color:'#F5A524',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          fontWeight:'bold'
        }}
      >
        Henry
      </motion.h1>
      <motion.h2
      variants={{
        ...fadeInUp,
        animate: {
          ...fadeInUp.animate,
          transition: { ...fadeInUp.animate.transition, delay: 1 }
        }
      }}
        className="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          /* color:'#80818C', */
          fontWeight:'bold',
          fontSize: '30px'
         /*  '@xsMax': {
            fontSize: '22px'
          } */
        }}
      >
        Sou desenvolvedor frontend
      </motion.h2>
      <motion.div variants={{
        ...fadeInUp,
        animate: {
          ...fadeInUp.animate,
          transition: { ...fadeInUp.animate.transition, delay: 1.5 }
        }
      }}>
      <Grid className="grid" css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}>
    <Link 
          href="https://www.linkedin.com/in/henrylomeu/"
          target="_blank"
    >
      
      <Button 
      shadow color="warning"
      className="button1"
      auto
        css={{ 
          marginTop:'$10',
          borderRadius: '$xs', 
          border: '$space$1 solid transparent',
          background: '$warning', 
          color: '$yellow100',
          height: '$15', 
        }}
  >
     <Image src={linkedin}/>
      </Button>
      </Link>
      <Link 
          href="https://github.com/henrylomeu"
          target="_blank"
    >
      <Button 
      shadow color="warning"
      className="button2"
      auto
      css={{ 
        marginLeft:'10px',
        marginTop:'$10',
        borderRadius: '$xs', 
        border: '$space$1 solid transparent',
        background: '$warning', 
        color: '$yellow100',
        height: '$15',  
      }}
  >
     <Image src={github2}/>
      </Button>
      </Link>
      <Link 
          href="https://drive.google.com/file/d/1zXh6A_8Xz9NGnqRXOI4DXL-QfaOFkqPu/view?usp=sharing"
          target="_blank"
    >
    <Button 
    shadow color="warning"
    className="button3"
    auto
      css={{ 
        marginLeft:'10px',
        marginTop:'$10',
        borderRadius: '$xs', 
        border: '$space$1 solid transparent',
        background: '$warning', 
        color: '$yellow100',
        height: '$15', 
      }}
  >
     <Image src={file}/>
      </Button>
      </Link>
    </Grid>
    </motion.div>
    </Container>
    </motion.div>
  
  );
}
