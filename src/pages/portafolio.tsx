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
import Demo from "../components/Marquee.tsx";
import OmarPerfil from "../assets/Logos/Perfil.png";
import Projects from "../components/Projects.tsx";
import Head from "../components/head.tsx";
export default function Portafolio() {
  return (
    <Container size="lg" p="md">
      <Grid grow p="md" justify="center" align="center">
        {/* Encabezado */}
        <Head />
        {/* Tecnologías */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Box h="100%" p="md" ta="center">
            <Title order={3} mb="md">
              Tecnologías
            </Title>
            <Demo />
          </Box>
        </Grid.Col>

        {/* Perfil */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Box ta="center" p="md">
            <AspectRatio ratio={1} maw={200} mx="auto">
              <Image
                src={OmarPerfil}
                alt="Omar Anthony Gutierrez"
                radius="xl"
              />
            </AspectRatio>

            <Title order={4} mt="md">
              Omar Anthony
            </Title>

            <Text size="lg" fw={500} c="blue">
              Full Stack Developer
            </Text>

            <Text size="sm" c="dimmed" mt="xs">
              Java • Spring Boot • React • MySQL
            </Text>
          </Box>
        </Grid.Col>

        {/* Sobre mí */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Box p="md">
            <Title order={3} mb="md">
              Sobre mí
            </Title>

            <Text size="md" c="dimmed" lh={1.8}>
              Soy desarrollador enfocado principalmente en Backend con Java y
              Spring Boot. Me apasiona crear aplicaciones escalables, aprender
              nuevas tecnologías y mejorar constantemente mis habilidades.
              También cuento con experiencia en React para el desarrollo de
              interfaces modernas y dinámicas.
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Projects />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
