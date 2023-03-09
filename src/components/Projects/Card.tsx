import { Row, Button, Text, Grid } from "@nextui-org/react";
import imc from '../assets/imc.png'
import ytclone from '../assets/ytclone.png'
import organiz from '../assets/organiz.png'
import streaming from '../assets/streaming.png'
import restaurante from '../assets/restaurante.png'
import memoria from "../assets/memoria.png";
import "./index.css";

export const Card0 = () => {
  return (
    <Grid xs={12} justify="center">
      <div className="slider-nav" style={{ border: "2px solid white", }}>
        <div className="image" style={{ border: "2px solid white", }}>
          <img
            className="image__img"
            height="100%"
            alt="Card example background"
            src={memoria}
          />
          <div className="image__overlay">
            <div className="image__title">
              <div
                color="white"
                className="image__description"
                style={{ fontSize: "30px" }}
              >
                Jogo da memória
              </div>
              <Grid xs={12}>
                <Row justify="center">
                  <a
                    href="https://jogo-da-memoria-dusky.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="xs"
                      shadow
                      color="warning"
                      rounded
                      css={{
                        marginBottom: "10px",
                        marginTop: "30px",
                        borderRadius: "$xs",
                        border: "$space$1 solid transparent",
                        background: "$warning",
                        color: "$yellow100",
                        height: "$15",
                        
                      }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Site
                      </Text>
                    </Button>
                  </a>
                </Row>
              </Grid>
              <Grid xs={12}>
                <Row justify="center">
                  <a
                    href="https://github.com/henrylomeu/jogo-da-memoria"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="xs"
                      shadow
                      color="warning"
                      rounded
                      css={{
                        marginBot1om: "30px",
                        marginTop: "30px",
                        borderRadius: "$xs",
                        border: "$space$1 solid transparent",
                        background: "$warning",
                        color: "$yellow100",
                        height: "$15",
                        
                      }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Github
                      </Text>
                    </Button>
                  </a>
                </Row>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export const Card1 = () => (
  <Grid xs={12} justify="center">
    <div className="slider-nav" style={{ border: "2px solid white", }}>
      <div className="image" style={{ border: "2px solid white", }}>
        <img
          className="image__img"
       
          height="100%"
          alt="Card example background"
          src={ytclone}
        />
        <div className="image__overlay">
          <div className="image__title">
            <div
              color="white"
              className="image__description"
              style={{ fontSize: "30px" }}
            >
              Youtube Clone
            </div>
            <Grid xs={12}>
              <Row justify="center">
                <a href="https://yt-clone-gamma.vercel.app/" target="_blank">
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Site
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
            <Grid xs={12}>
              <Row justify="center">
                <a
                  href="https://github.com/henrylomeu/YT-Clone"
                  target="_blank"
                >
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Github
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </Grid>
);

export const Card2 = () => (
  <Grid xs={12} justify="center">
    <div className="slider-nav" style={{ border: "2px solid white", }}>
      <div className="image" style={{ border: "2px solid white", }}>
        <img
          className="image__img"
       
          height="100%"
          alt="Card example background"
          src={imc}
        />
        <div className="image__overlay">
          <div className="image__title">
            <div
              color="white"
              className="image__description"
              style={{ fontSize: "30px" }}
            >
              Calculadora de IMC
            </div>
            <Grid xs={12}>
              <Row justify="center">
                <a href="https://calc-imc-rouge.vercel.app/" target="_blank">
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Site
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
            <Grid xs={12}>
              <Row justify="center">
                <a
                  href="https://github.com/henrylomeu/CalcIMC/tree/master"
                  target="_blank"
                >
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Github
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </Grid>
);

export const Card3 = () => (
  <Grid xs={12} justify="center">
    <div className="slider-nav" style={{ border: "2px solid white", }}>
      <div className="image" style={{ border: "2px solid white", }}>
        <img
          className="image__img"
       
          height="100%"
          alt="Card example background"
          src={organiz}
        />
        <div className="image__overlay">
          <div className="image__title">
            <div
              color="white"
              className="image__description"
              style={{ fontSize: "30px" }}
            >
              Sistema Financeiro
            </div>
            <Grid xs={12}>
              <Row justify="center">
                <a
                  href="https://organizadorfinanceiro-two.vercel.app/"
                  target="_blank"
                >
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Site
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
            <Grid xs={12}>
              <Row justify="center">
                <a
                  href="https://github.com/henrylomeu/organizadorfinanceiro/tree/master"
                  target="_blank"
                >
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Github
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </Grid>
);

export const Card4 = () => (
  <Grid xs={12} justify="center">
    <div className="slider-nav" style={{ border: "2px solid white", }}>
      <div className="image" style={{ border: "2px solid white", }}>
        <img
          className="image__img"
       
          height="100%"
          alt="Card example background"
          src={streaming}
        />
        <div className="image__overlay">
          <div className="image__title">
            <div
              color="white"
              className="image__description"
              style={{ fontSize: "30px" }}
            >
              Netflix Clone
            </div>
            <Grid xs={12}>
              <Row justify="center">
                <a
                  href="https://streaming-clone-ashen.vercel.app/"
                  target="_blank"
                >
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Site
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
            <Grid xs={12}>
              <Row justify="center">
                <a
                  href="https://github.com/henrylomeu/StreamingClone/tree/master"
                  target="_blank"
                >
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Github
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </Grid>
);

export const Card5 = () => (
  <Grid xs={12} justify="center">
    <div className="slider-nav" style={{ border: "2px solid white", }}>
      <div className="image" style={{ border: "2px solid white", }}>
        <img
          className="image__img"
       
          height="100%"
          alt="Card example background"
          src={restaurante}
        />
        <div className="image__overlay">
          <div className="image__title">
            <div
              color="white"
              className="image__description"
              style={{ fontSize: "30px" }}
            >
              Geritch Restaurante
            </div>
            <Grid xs={12}>
              <Row justify="center">
                <a href="https://restaurante-beta.vercel.app/" target="_blank">
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Site
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
            <Grid xs={12}>
              <Row justify="center">
                <a
                  href="https://github.com/henrylomeu/restaurante/tree/master"
                  target="_blank"
                >
                  <Button
                    size="xs"
                    shadow
                    color="warning"
                    rounded
                    css={{
                      marginBottom: "10px",
                      marginTop: "30px",
                      borderRadius: "$xs",
                      border: "$space$1 solid transparent",
                      background: "$warning",
                      color: "$yellow100",
                      height: "$15",
                     
                    }}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Github
                    </Text>
                  </Button>
                </a>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  </Grid>
);
