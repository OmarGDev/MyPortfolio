import { ThemeIcon } from "@mantine/core";
import { technologies } from "./LogosTec.tsx";

export default function Demose() {
  return (
    <ThemeIcon radius="xl" size="xl" color="rgba(255, 255, 255, 0)">
      <div>
        {technologies.map((tech) => (
          <div key={tech.name}>
            <img src={tech.logo} alt={tech.name} width={32} />
          </div>
        ))}
      </div>
    </ThemeIcon>
  );
}
