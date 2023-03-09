import { Text,Grid,Input,Textarea,Button,Link,Modal, useModal} from "@nextui-org/react"
import emailjs from "@emailjs/browser"
import { FormEvent,useState,useEffect } from "react"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import whatsapp from '../assets/svg/bxl-whatsapp.svg';

export default function Contato () {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')

  function sendEmail(e: FormEvent<HTMLFormElement>): void{
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert('Preencha todos os campos');
      return;
    }
    

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_vnw9sds","template_qtg6kvv",templateParams,"elUoh3fkJwSAkZXf4")
    .then((response)=>{
      console.log("EMAIL ENVIADO", response.status, response.text);
      setName('')
      setEmail('')
      setMessage('')
    }, (err)=>{
      console.log("Erro:", err)
    })
  }
  
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

  const { setVisible, bindings } = useModal();

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
        marginBottom:'70px',
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
         /*  color:'#80818C' */
         /*  '@xsMax': {
            fontSize: '22px'
          } */
        }}
      >
        Quer conversar?
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
        Contate me
      </Text>
       <form className="form" onSubmit={sendEmail}>
        <Input 
        clearable
          labelPlaceholder="Nome" 
          onChange={(e) => setName(e.target.value)}
          value={name} 
          css={{
            marginTop:'$13',
            color:'White',
            width: '300px',
            '@xsMax': {

              
            }
          }}
        />
         <Grid css={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}>
        <Input 
        clearable
          labelPlaceholder="Email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          css={{

            display: 'flex',
            width: '300px',
            marginTop:'$13'
          }}
        />
        </Grid>
        <Textarea  
               
          labelPlaceholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          css={{marginTop:'$13', width: '300px', color:'white'}}
        />
        <Grid css={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}>
        <Button 
        bordered color="warning" auto shadow
        type="submit"
        onPress={() => {
          if(name === '' || email === '' || message === ''){
            alert('Preencha todos os campos');
            return;
          } if(name != '' || email != '' || message != '') {
            setVisible(true);
          }
        }}
        css={{ 
        width:'300px',
        marginTop:'$13',
        borderRadius: '$xs', 
        height: '$15', 
        background: '$warning', 
        color: '$yellow100',
      }}
  >
     Enviar
      </Button>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Obrigado
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description" css={{display:'flex', alignItems:'center',justifyContent:'center'}}>
  			Seu email foi enviado e assim que possível entrarei em contato, até logo!
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button css={{borderRadius: '$xs'}}bordered color="warning" auto onPress={() => setVisible(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      </Grid>
      </form>
      </Grid>
      <h3
        className="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '50px',
          fontWeight:'bold', 
         /*  color:'#80818C' */
         /*  '@xsMax': {
            fontSize: '22px'
          } */
        }}
      >
        Se preferir:
      </h3>
      <Grid css={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}>
          <Link 
          href="https://wa.me/5561992545540"
          target="_blank">
        <Button 
        bordered color="warning" auto shadow
        css={{ 
        width:'300px',
        borderRadius: '$xs', 
        background: '$warning', 
        color: '$yellow100',
        height: '$15',  
        
      }}
  >
     Whatsapp <img src={whatsapp}/>
      </Button>
      </Link>
      </Grid>
      </Grid.Container>
      </motion.div>
  )
}
