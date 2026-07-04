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
import SobreMi from "../components/About/SobreMi";
import Perfil from "../components/About/Perfil";
import Stack from "../components/Stack/Stack";
import Educacion from "../components/Education/Educacion";
import DotGrid from "../components/reactbits/DotGrid/DotGrid";
import Waves from "../components/reactbits/Waves/Waves";

export default function Portafolio() {
  return (
    <Container
      size="lg"
      p="md"
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        style={{
          overflow: "hidden",
        }}
      >
        {/* Fondo animado */}
        <Box
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        >
          <Waves
            lineColor="#4e4242"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            waveSpeedX={0.0125}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
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
