import "./index.css";
import { Card0, Card1, Card2, Card3, Card4, Card5 } from "./Card";
import { motion, useAnimation } from 'framer-motion';
import { useEffect,useState,ReactNode } from "react";
import { useInView } from 'react-intersection-observer';
import { Grid, NextUIProvider, Container, Text, Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode,Autoplay, Pagination, Navigation } from "swiper";

export default function App() {

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
  <Container className="container" css={{}}>
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
      Onde ganhei experiência
    </h3>
    <Grid 
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
      Meus Projetos
    </Text>
    </Grid>
    </Container>
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        rewind={true}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation,FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide><Card0/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card2/></SwiperSlide>
        <SwiperSlide><Card3/></SwiperSlide>
        <SwiperSlide><Card4/></SwiperSlide>
        <SwiperSlide><Card5/></SwiperSlide>
      </Swiper>
    </>
    </motion.div>
  );
}
