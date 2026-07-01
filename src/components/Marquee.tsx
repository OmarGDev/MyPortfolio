import { Marquee } from "@mantine/core";
import { technologies } from "./LogosTec.tsx";
import { Text } from "@mantine/core";

export default function Demo() {
  return (
    <Marquee
      orientation="vertical"
      duration={10000}
      gap="xs"
      fadeEdges={true}
      mah={200}
      maw={400}
    >
      {technologies.map((tech) => (
        <div key={tech.name}>
          <img src={tech.logo} alt={tech.name} width={30} height={30} />
          <>
            <Text
              size="lg"
              component="span"
              fw={700}
              style={{
                color: tech.color,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              {tech.name}
            </Text>
          </>
        </div>
      ))}
    </Marquee>
  );
}
