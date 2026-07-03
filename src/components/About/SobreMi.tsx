import { Box, Paper, Text, Title } from "@mantine/core";
import { IconArrowRoundaboutRight } from "@tabler/icons-react";
export default function SobreMi() {
  return (
    <Paper withBorder radius="xl" shadow="md" p="xl">
      <Box p="md">
        <Title order={3} mb="md">
          <IconArrowRoundaboutRight size={24} style={{ marginRight: 8 }} />
          Sobre mí
        </Title>

        <Text size="md" c="dimmed">
          Soy desarrollador enfocado principalmente en Backend con Java y Spring
          Boot. Me apasiona crear aplicaciones escalables, aprender nuevas
          tecnologías y mejorar constantemente mis habilidades. También cuento
          con experiencia en React para el desarrollo de interfaces modernas y
          dinámicas.
        </Text>
      </Box>
    </Paper>
  );
}
