import { Button, Stack, Text, TextInput, Textarea } from "@mantine/core"
import { useEffect, useState } from "react"
import { Character } from "../../data/Character"
import ReactGA from "react-ga4"
import { t } from "../../i18n"

type BasicsPickerProps = {
  character: Character
  setCharacter: (character: Character) => void
  nextStep: () => void
}

const BasicsPicker = ({ character, setCharacter, nextStep }: BasicsPickerProps) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Basics Picker" })
  }, [])

  const [name, setName] = useState(character.name)
  const [sire, setSire] = useState(character.sire)
  const [ambition, setAmbition] = useState(character.ambition)
  const [desire, setDesire] = useState(character.desire)
  const [description, setDescription] = useState(character.description)

  return (
    <div>
      <Text fw={700} fz={"30px"} ta="center">
        {t("ui.basics.title")}
      </Text>

      <Stack mt={"xl"} align="center" spacing="xl">
        <TextInput
          style={{ width: "300px" }}
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          placeholder={t("ui.basics.name.placeholder")}
          label={t("ui.basics.name.label")}
        />

        <TextInput
          style={{ width: "300px" }}
          value={sire}
          onChange={(event) => setSire(event.currentTarget.value)}
          placeholder={t("ui.basics.sire.placeholder")}
          label={t("ui.basics.sire.label")}
          description={t("ui.basics.sire.description")}
        />

        <TextInput
          style={{ width: "300px" }}
          value={ambition}
          onChange={(event) => setAmbition(event.currentTarget.value)}
          placeholder={t("ui.basics.ambition.placeholder")}
          label={t("ui.basics.ambition.label")}
        />

        <TextInput
          style={{ width: "300px" }}
          value={desire}
          onChange={(event) => setDesire(event.currentTarget.value)}
          placeholder={t("ui.basics.desire.placeholder")}
          label={t("ui.basics.desire.label")}
        />

        <Textarea
          style={{ width: "300px" }}
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
          placeholder={t("ui.basics.description.placeholder")}
          label={t("ui.basics.description.label")}
          autosize
          minRows={4}
        />

        <Button
          color="grape"
          onClick={() => {
            setCharacter({ ...character, name, sire, ambition, desire, description })
            nextStep()
          }}
        >
          {t("ui.basics.confirm")}
        </Button>
      </Stack>
    </div>
  )
}

export default BasicsPicker
