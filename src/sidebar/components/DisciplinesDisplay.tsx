import { Grid, List, Stack, Title } from "@mantine/core"
import { Power, Ritual } from "../../data/Disciplines"
import { DisciplineName } from "~/data/NameSchemas"
import { t } from "../../i18n"

export type DisciplinesProps = {
  powers: Power[]
  rituals: Ritual[]
}

const DisciplineDisplay = ({ powers, rituals }: DisciplinesProps) => {
  const powersByDisciplines = new Map<DisciplineName, Power[]>()
  powers.forEach((power) => {
    if (!powersByDisciplines.has(power.discipline)) {
      powersByDisciplines.set(power.discipline, [power])
    } else {
      powersByDisciplines.set(power.discipline, [
        ...powersByDisciplines.get(power.discipline)!,
        power,
      ])
    }
  })

  return (
    <Stack>
      <Grid>
        {Array.from(powersByDisciplines.entries()).map(([disciplineName, powers]) => {
          const translatedDiscipline = t(`disciplineName.${disciplineName.toLowerCase()}`)
          return (
            <Grid.Col span={6} key={disciplineName}>
              <Title order={4}>{translatedDiscipline}</Title>
              <List>
                {powers.map((power) => (
                  <List.Item key={power.name}>{power.name}</List.Item>
                ))}

                {disciplineName === "blood sorcery"
                  ? rituals.map((ritual) => (
                      <List.Item ml={"-3px"} icon={"⛤"} key={ritual.name}>
                        {ritual.name}
                      </List.Item>
                    ))
                  : null}
              </List>
            </Grid.Col>
          )
        })}
      </Grid>
    </Stack>
  )
}

export default DisciplineDisplay
