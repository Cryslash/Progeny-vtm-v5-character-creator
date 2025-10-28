import { Aside, Center, ScrollArea, Stepper } from "@mantine/core"
import { Character, containsBloodSorcery } from "../data/Character"
import { isDefault, upcase } from "../generator/utils"
import { globals } from "../globals"
import { t } from "../i18n"

export type AsideBarProps = {
  selectedStep: number
  setSelectedStep: (step: number) => void
  character: Character
}

const AsideBar = ({ selectedStep, setSelectedStep, character }: AsideBarProps) => {
  const maybeRituals = containsBloodSorcery(character.disciplines) ? ["rituals"] : []

  const stepperKeys = [
    "clan",
    "attributes",
    "skills",
    "generation",
    "predatorType",
    "name",
    "disciplines",
    ...maybeRituals,
    "touchstones",
    "merits",
  ] as const

  const isHigherLevelAccessible = (character: Character, key: string) => {
    const index = Math.max(0, stepperKeys.indexOf(key) - 1)
    for (let i = index; i < stepperKeys.length; i++) {
      if (!isDefault(character, stepperKeys[i] as keyof Character)) return true
    }
    return false
  }

  const getStepper = () => (
    <Stepper
      color="grape"
      orientation="vertical"
      active={selectedStep}
      onStepClick={setSelectedStep}
      breakpoint="sm"
    >
      <Stepper.Step key="intro" label={t("ui.asideBar.intro")} description="" />
      {stepperKeys.map((key) => (
        <Stepper.Step
          key={key}
          label={t(`ui.asideBar.steps.${key}`)}
          description=""
          disabled={!isHigherLevelAccessible(character, key)}
        />
      ))}
      <Stepper.Step
        key="final"
        label={t("ui.asideBar.final")}
        description=""
        disabled={isDefault(character, "disciplines")}
      />
    </Stepper>
  )

  const height = globals.viewportHeightPx
  const scrollerHeight = 940
  return (
    <Aside p="md" hiddenBreakpoint="sm" width={{ xs: 200 }} style={{ zIndex: 0 }}>
      <Center h="100%">
        {height <= scrollerHeight ? (
          <ScrollArea h={height - 100}>{getStepper()}</ScrollArea>
        ) : (
          getStepper()
        )}
      </Center>
    </Aside>
  )
}

export default AsideBar
