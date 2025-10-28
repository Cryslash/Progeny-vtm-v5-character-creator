import { Button, Select, Space, Stack, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import { Character, getEmptyCharacter } from "../../data/Character"
import ReactGA from "react-ga4"
import { trackEvent } from "../../utils/analytics"
import { t } from "../../i18n"

type GenerationPickerProps = {
  character: Character
  setCharacter: (character: Character) => void
  nextStep: () => void
}

const GenerationPicker = ({ character, setCharacter, nextStep }: GenerationPickerProps) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Generation Picker" })
  }, [])

  const isThinBlood = character.clan === "Thin-blood"
  const defaultGeneration = isThinBlood ? "14" : "13"
  const initialGeneration =
    character.generation !== getEmptyCharacter().generation
      ? character.generation.toString()
      : defaultGeneration

  const [generation, setGeneration] = useState<string | null>(initialGeneration)

  return (
    <div style={{ width: "100%" }}>
      <Text fz={"30px"} ta={"center"} 
        dangerouslySetInnerHTML={{ __html: t("ui.generation.title") }} 
      />

      <Text style={{ fontSize: "25px", color: "grey" }} ta={"center"}>
        {isThinBlood
          ? t("ui.generation.thinbloodNote")
          : t("ui.generation.commonChoice")}
      </Text>

      <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
        {t("ui.generation.header")}
      </Text>
      <hr color="#e03131" />
      <Space h={"sm"} />

      <Stack align="center" spacing="xl">
        <Select
          styles={(theme) => ({
            item: {
              "&[data-selected]": {
                "&, &:hover": {
                  backgroundColor: theme.colors.grape,
                  color: theme.colors.white,
                },
              },
            },
          })}
          style={{ width: "100%" }}
          value={generation}
          onChange={setGeneration}
          label={t("ui.generation.label")}
          placeholder={t("ui.generation.placeholder")}
          data={
            isThinBlood
              ? [
                  {
                    value: "14",
                    label: t("ui.generation.options.14"),
                  },
                ]
              : [
                  { value: "14", label: t("ui.generation.options.14") },
                  { value: "13", label: t("ui.generation.options.13") },
                  { value: "12", label: t("ui.generation.options.12") },
                  { value: "11", label: t("ui.generation.options.11") },
                  { value: "10", label: t("ui.generation.options.10") },
                ]
          }
        />

        <Button
          disabled={generation === null}
          color="grape"
          onClick={() => {
            setCharacter({ ...character, generation: parseInt(generation ?? "0") })
            trackEvent({
              action: "generation submit clicked",
              category: "generation",
              label: generation ?? "0",
            })
            nextStep()
          }}
        >
          {t("ui.generation.confirm")}
        </Button>
      </Stack>
    </div>
  )
}

export default GenerationPicker
