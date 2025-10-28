import {  Button, Center, Divider, Grid, Group, ScrollArea, Space, Stack, Text, TextInput, Textarea,} from "@mantine/core"
import { useEffect, useState } from "react"
import { Character, Touchstone } from "../../data/Character"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import ReactGA from "react-ga4"
import { trackEvent } from "../../utils/analytics"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { globals } from "../../globals"
import { t } from "../../i18n"

type TouchstonePickerProps = {
  character: Character
  setCharacter: (character: Character) => void
  nextStep: () => void
}

const TouchstonePicker = ({ character, setCharacter, nextStep }: TouchstonePickerProps) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Touchstone Picker" })
  }, [])

  const initial =
    character.touchstones.length > 0
      ? character.touchstones
      : [{ name: "", description: "", conviction: "" }]

  const [touchstones, setTouchstones] = useState<Touchstone[]>(initial)

  const updateTouchstone = (
    i: number,
    updatedTouchstone: { name?: string; description?: string; conviction?: string }
  ) => {
    const newTouchstones = [...touchstones]
    newTouchstones[i] = { ...touchstones[i], ...updatedTouchstone }
    setTouchstones(newTouchstones)
  }

  return (
    <div>
      <Text
        mt={90}
        fw={700}
        fz={globals.isSmallScreen ? "xl" : "28px"}
        ta="center"
      >
        {t("ui.touchstonePicker.title")}
      </Text>

      <Text
        fz={globals.isSmallScreen ? "md" : "23px"}
        c={"grey"}
        ta="center"
      >
        {t("ui.touchstonePicker.subtitle.line1")}
        <br />
        {t("ui.touchstonePicker.subtitle.line2")}
      </Text>

      <Text mt={"md"} ta="center" fz="xl" fw={700} c="red">
        {t("ui.touchstonePicker.sectionTitle")}
      </Text>
      <hr color="#e03131" />
      <Space h={"sm"} />

      <Stack align="center" spacing={globals.isPhoneScreen ? "xs" : "xl"}>
        <ScrollArea
          h={globals.viewportHeightPx - 420}
          w={globals.isSmallScreen ? "100%" : "110%"}
        >
          {touchstones.map((touchstone, i) => (
            <Stack key={i} mt={"20px"}>
              <Grid style={{ width: "100%" }}>
                {i !== 0 ? <Divider style={{ width: "100%" }} /> : null}

                {!globals.isPhoneScreen && (
                  <Grid.Col span={2}>
                    <Center style={{ height: "100%" }}>
                      <FontAwesomeIcon icon={faUser} className="fa-6x" />
                    </Center>
                  </Grid.Col>
                )}

                <Grid.Col span={globals.isPhoneScreen ? 12 : 4}>
                  <TextInput
                    style={{ width: globals.isPhoneScreen ? "100%" : "250px" }}
                    value={touchstone.name}
                    onChange={(event) =>
                      updateTouchstone(i, { name: event.currentTarget.value })
                    }
                    placeholder={t("ui.touchstonePicker.name.placeholder")}
                    label={t("ui.touchstonePicker.name.label")}
                  />

                  <TextInput
                    style={{ width: globals.isPhoneScreen ? "100%" : "250px" }}
                    value={touchstone.conviction}
                    onChange={(event) =>
                      updateTouchstone(i, { conviction: event.currentTarget.value })
                    }
                    placeholder={t("ui.touchstonePicker.conviction.placeholder")}
                    label={t("ui.touchstonePicker.conviction.label")}
                  />
                </Grid.Col>

                <Grid.Col
                  span={globals.isSmallScreen ? 12 : 4}
                  offset={globals.isSmallScreen ? 0 : 1}
                >
                  <Textarea
                    style={{ width: globals.isSmallScreen ? "100%" : "300px" }}
                    value={touchstone.description}
                    onChange={(event) =>
                      updateTouchstone(i, { description: event.currentTarget.value })
                    }
                    placeholder={t("ui.touchstonePicker.description.placeholder")}
                    label={t("ui.touchstonePicker.description.label")}
                    autosize
                    minRows={4}
                  />
                </Grid.Col>
              </Grid>

              <Group>
                <Button
                  leftIcon={<FontAwesomeIcon icon={faTrash} />}
                  compact
                  color="red"
                  variant="subtle"
                  onClick={() => {
                    const newTouchstones = [...touchstones]
                    newTouchstones.splice(i, 1)
                    setTouchstones(newTouchstones)
                  }}
                >
                  {t("ui.touchstonePicker.remove")}
                </Button>
              </Group>
            </Stack>
          ))}
        </ScrollArea>

        <Button
          color="grape"
          onClick={() => {
            setTouchstones([...touchstones, { name: "", description: "", conviction: "" }])
          }}
        >
          {t("ui.touchstonePicker.add")}
        </Button>

        <Button
          color="grape"
          onClick={() => {
            setCharacter({ ...character, touchstones: touchstones })

            trackEvent({
              action: "touchstone confirm clicked",
              category: "touchstones",
              label: `${touchstones.length}`,
            })

            nextStep()
          }}
        >
          {t("ui.touchstonePicker.confirm")}
        </Button>
      </Stack>
    </div>
  )
}

export default TouchstonePicker
