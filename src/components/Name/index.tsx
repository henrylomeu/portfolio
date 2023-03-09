import { Button, Container, Text, Link, Grid, Image } from "@nextui-org/react";
import github from '../assets/svg/bxl-github.svg'
import github2 from '../assets/svg/bxl-github2.svg'
import file from '../assets/svg/bxs-file-doc.svg'
import linkedin from '../assets/svg/bxl-linkedin-square.svg'
import './index.css'
import { motion } from "framer-motion";

export default function App() {
  
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
    <Container 
      css={{ 
        '@xsMax': {

    }}}>
      
      <h2
        className="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '50px',
          fontWeight:'bold',
          fontSize: '30px'
          /* color: '#80818C' */
         /*  '@xsMax': {
            fontSize: '22px'
          } */
        }}
      >
        Olá, me chamo
      </h2>
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
            fontSize: '50px'
          }
        }}
        weight="bold"
      >
        Henry
      </Text>
      <h2
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
      </h2>
      
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
    </Container>
    </motion.div>
  );
}
