import {
  Badge,
  Box,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconStack2 } from "@tabler/icons-react";
import { technologies } from "../LogosTec";

const categories = [
  "Lenguajes",
  "Backend",
  "Frontend",
  "Base de datos",
  "Herramientas",
];

export default function StackTecnologias() {
  return (
    <Paper withBorder radius="xl" shadow="md" p="xl">
      <Group mb="xl">
        <ThemeIcon size={42} radius="xl" color="blue">
          <IconStack2 size={24} />
        </ThemeIcon>

        <Title order={2}>Stack</Title>
      </Group>

      <Stack gap="xl">
        {categories.map((category) => (
          <Box key={category}>
            <Text fw={700} size="lg" c="blue" mb="md">
              {category}
            </Text>

            <Group gap="md">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="light"
                    radius="md"
                    size="xl"
                    color="gray"
                    styles={{
                      root: {
                        paddingLeft: 8,
                        paddingRight: 12,
                        height: 42,
                        fontWeight: 500,
                      },
                    }}
                    leftSection={
                      <Image src={tech.logo} alt={tech.name} w={22} h={22} />
                    }
                  >
                    {tech.name}
                  </Badge>
                ))}
            </Group>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
