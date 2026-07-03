import { AspectRatio, Box, Image, Paper, Text, Title } from "@mantine/core";
import OmarPerfil from "../../assets/Logos/Perfil.png";

export default function Perfil() {
  return (
    <Paper withBorder radius="xl" shadow="md" p="xl">
      <Box ta="center" p="md">
        <AspectRatio ratio={1} maw={200} mx="auto">
          <Image src={OmarPerfil} alt="Omar Anthony Gutierrez" radius="xl" />
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
    </Paper>
  );
}
