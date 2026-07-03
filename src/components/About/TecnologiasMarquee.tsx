import {
  Group,
  Image,
  Marquee,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { technologies } from "../LogosTec";

export default function Tecnologias() {
  return (
    <Stack align="center" gap="lg">
      <Title order={3}>Tecnologías</Title>

      <Paper withBorder radius="xl" p="sm" shadow="sm" w="100%">
        <Marquee
          orientation="vertical"
          duration={18000}
          gap="sm"
          fadeEdges
          mah={320}
        >
          {technologies.map((tech) => (
            <Paper
              key={tech.name}
              withBorder
              radius="lg"
              p="sm"
              shadow="xs"
              style={{
                transition: "all .2s ease",
                cursor: "default",
              }}
            >
              <Group gap="md" wrap="nowrap">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  w={36}
                  h={36}
                  fit="contain"
                />

                <Text
                  fw={700}
                  size="md"
                  style={{
                    color: tech.color,
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  {tech.name}
                </Text>
              </Group>
            </Paper>
          ))}
        </Marquee>
      </Paper>
    </Stack>
  );
}
