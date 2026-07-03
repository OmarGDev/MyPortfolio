import { Title, Text, Image, Paper, Group, Box, NavLink } from "@mantine/core";
import SiseLogo from "../../assets/Logos/sise-logo.png";

import { IconCertificate2 } from "@tabler/icons-react";
import { certificates } from "./Certifiaciones";

export default function Educacion() {
  return (
    <Paper withBorder radius="xl" shadow="md" p="xl">
      <Title order={2} mb="xl">
        Educación
      </Title>

      <Group gap="lg" align="center">
        <Image src={SiseLogo} radius="md" h={50} w={50} fit="contain" />
        <Title order={4}>Instituto Superior SISE</Title>
      </Group>
      <Text size="md" mt="md">
        Técnico Superior en Programación y Análisis de Sistemas de Información
      </Text>

      <Text size="md" c="dimmed" fw={600}>
        2022 - 2025 · Titulado
      </Text>

      <Text fw={700} size="md" mt="md" c="blue">
        <IconCertificate2 size={24} />
        Certificaciones y cursos adicionales
      </Text>
      <Box mt="md">
        {certificates.map((certi, index) => (
          <NavLink
            key={index}
            href={certi.href}
            target="_blank"
            rel="noopener noreferrer"
            label={certi.label}
            description={certi.description}
            leftSection={
              <Image src={certi.logo} radius="md" h={50} w={50} fit="contain" />
            }
          />
        ))}
      </Box>
    </Paper>
  );
}
