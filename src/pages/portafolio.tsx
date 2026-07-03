import {
  AspectRatio,
  Box,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from "@mantine/core";
import "./portafolio.css";
import Tecnologias from "../components/About/TecnologiasMarquee";
import Projects from "../components/Proyectos/Projects";
import Head from "../components/header/head";
import LiquidEther from "../components/reactbits/Dither/LiquidEther";
import SobreMi from "../components/About/SobreMi";
import Perfil from "../components/About/Perfil";
import Contact from "../components/Contact/Contact";
import Stack from "../components/Stack/Stack";
import Educacion from "../components/Education/Educacion";
import DotGrid from "../components/reactbits/DotGrid/DotGrid";

export default function Portafolio() {
  return (
    <Container size="lg" p="md">
      <Box
        style={{
          overflow: "hidden",
        }}
      >
        {/* Fondo animado */}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#2F293A"
            activeColor="#e61337"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </Box>

        {/* Contenido */}
        <Grid
          grow
          p="md"
          justify="center"
          align="center"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Head />
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Tecnologias />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Perfil />
          </Grid.Col>

          {/* Sobre mí */}

          <Grid.Col span={{ base: 12, md: 4 }}>
            <SobreMi />
          </Grid.Col>

          {/* Proyectos */}

          <Grid.Col span={{ base: 12, md: 12 }}>
            <Projects />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Educacion />
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
}
