import { Grid } from "@mantine/core";
import TextType from "../reactbits/TextType/TextType";

export default function Head() {
  return (
    <Grid.Col span={12}>
      <TextType
        text={["Omar Anthony Gutiérrez Panebra"]}
        typingSpeed={90}
        pauseDuration={1500}
        deletingSpeed={50}
        showCursor
        cursorCharacter="_"
        cursorBlinkDuration={0.5}
        variableSpeed={{ min: 60, max: 120 }}
      />
    </Grid.Col>
  );
}
