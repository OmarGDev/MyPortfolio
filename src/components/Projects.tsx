import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Typography,
} from "@mantine/core";
import misHabitos from "../assets/ProyectImg/mis-habitos.png";
import mercadoMayorista from "../assets/ProyectImg/mercado-mayorista.png";

const projects = [
  {
    title: "Mercado Mayorista",
    description: "Sistema de gestión de productos",
    img: mercadoMayorista,
    github: "https://github.com/OmarGDev/GestionDeMercadoFront",
  },
  {
    title: "Aplicación Mis Hábitos",
    description: "API REST con JWT",
    img: misHabitos,
    github: "https://github.com/OmarGDev/MisHabitos",
  },
];

export default function Projects() {
  return (
    <section className="section-container section-block" id="proyectos">
      <Typography>
        <h1>Proyectos Destacados</h1>
      </Typography>
      <div className="projects-grid" color="blue">
        {projects.map((project) => (
          <Card
            key={project.title}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            color="dark"
          >
            <Image src={project.img} alt={project.title} height={160} />
            <Text fw={500}>{project.title}</Text>
            <Text size="sm" color="dimmed">
              {project.description}
            </Text>
            <Group mt="md" mb="xs">
              <Badge color="green" variant="light">
                Java | Spring Boot
              </Badge>
              <Badge color="blue" variant="light">
                React | TypeScript
              </Badge>
            </Group>
            <Button
              variant="light"
              color="cyan"
              fullWidth
              mt="md"
              radius="md"
              component="a"
              href={project.github}
              target="_blank"
            >
              Ver Proyecto
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
