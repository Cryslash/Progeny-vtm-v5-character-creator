import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Grid, Group, Modal, SegmentedControl, Stack, Text, Title, Tooltip, useMantineTheme,} from "@mantine/core"
import { trackEvent } from "../utils/analytics"
import { Character, meritFlawSchema } from "../data/Character"
import { disciplines } from "../data/Disciplines"
import { PredatorTypes } from "../data/PredatorType"
import { upcase } from "../generator/utils"
import { globals } from "../globals"
import usePointStates from "../hooks/usePointStates"
import PointPicker from "./PointPicker"
import Tally from "./Tally"
import { useEffect } from "react"
import { DisciplineName, disciplineNameSchema, PredatorTypeName } from "~/data/NameSchemas"
import { t } from "../i18n"

type PredatorTypeModalProps = {
  modalOpened: boolean
  closeModal: () => void
  character: Character
  pickedPredatorType: PredatorTypeName
  setCharacter: (character: Character) => void
  nextStep: () => void
  specialty: string
  setSpecialty: (specialty: string) => void
  discipline: string
  setDiscipline: (specialty: string) => void
}

const PredatorTypeModal = ({
  modalOpened,
  closeModal,
  setCharacter,
  nextStep,
  character,
  pickedPredatorType,
  specialty,
  setSpecialty,
  discipline,
  setDiscipline,
}: PredatorTypeModalProps) => {
  const theme = useMantineTheme()

  const smallScreen = globals.isSmallScreen
  const phoneScreen = globals.isPhoneScreen

  const predatorType = PredatorTypes[pickedPredatorType]
  const pickedDiscipline = disciplines[discipline as DisciplineName]

  const { pointStates, updatePointStates, setFromSelectableMeritsAndFlaws } = usePointStates(
    predatorType.selectableMeritsAndFlaws
  )

  useEffect(() => {
    setFromSelectableMeritsAndFlaws(predatorType.selectableMeritsAndFlaws)
  }, [pickedPredatorType])

  const titleWidth = smallScreen ? "300px" : "750px"

  if (
    predatorType.selectableMeritsAndFlaws.length > 0 &&
    !pointStates?.at(predatorType.selectableMeritsAndFlaws.length - 1)
  ) {
    return <></>
  }

  return (
    <Modal
      withCloseButton={false}
      size="xl"
      opened={modalOpened}
      onClose={closeModal}
      title={
        <div style={{ width: titleWidth }}>
          <Text fw={700} fz="30px" ta="center">
            {predatorType.name}
          </Text>
          <Text style={{ fontSize: "25px", color: "grey" }} ta="center">
            {t("ui.predatorTypeModal.description")}
          </Text>
        </div>
      }
      centered
    >
      <Stack>
        <Divider my="sm" />

        {predatorType.bloodPotencyChange !== 0 ? (
          <div>
            <Grid>
              <Grid.Col span={smallScreen ? 8 : 4}>
                <Text fw={700} fz="xl">
                  {t("ui.predatorTypeModal.bloodPotency")}
                </Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Text
                  fz="xl"
                  fw={700}
                  ta="center"
                  c={predatorType.bloodPotencyChange > 0 ? "green" : "red"}
                >
                  {`${predatorType.bloodPotencyChange > 0 ? "+" : ""}${predatorType.bloodPotencyChange}`}
                </Text>
              </Grid.Col>
            </Grid>
            <Divider my="sm" variant="dotted" />
          </div>
        ) : null}

        {predatorType.humanityChange !== 0 ? (
          <div>
            <Grid>
              <Grid.Col span={smallScreen ? 8 : 4}>
                <Text fw={700} fz="xl">
                  {t("ui.predatorTypeModal.humanityChange")}
                </Text>
              </Grid.Col>
              <Grid.Col span={4}>
                <Text
                  fz="xl"
                  ta="center"
                  fw={700}
                  c={predatorType.humanityChange > 0 ? "green" : "red"}
                >
                  {`${predatorType.humanityChange > 0 ? "+" : ""}${predatorType.humanityChange}`}
                </Text>
              </Grid.Col>
            </Grid>
            <Divider my="sm" variant="dotted" />
          </div>
        ) : null}

        {predatorType.meritsAndFlaws.length !== 0 ||
        predatorType.selectableMeritsAndFlaws.length !== 0 ? (
          <div>
            <Group position="apart">
              <Text fw={700} fz="xl">
                {t("ui.predatorTypeModal.meritsAndFlaws")}
              </Text>
              <Stack w="100%">
                {predatorType.meritsAndFlaws.map((mf) => (
                  <Grid key={mf.name}>
                    <Grid.Col span={smallScreen ? 8 : 4}>
                      <Text miw="220px" maw="80%" fz="xl">
                        {`${mf.name}: `}
                        <Text fz="xs">{mf.summary}</Text>
                      </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <Text fz="xl" ta="center">
                        {t("ui.predatorTypeModal.level")}
                        <Tally
                          n={mf.level}
                          style={{ color: theme.colors.red[7], marginTop: "-5px" }}
                          size="28px"
                        />
                      </Text>
                    </Grid.Col>
                  </Grid>
                ))}

                {predatorType.selectableMeritsAndFlaws.map(({ options, totalPoints }, i) => {
                  const subPointStates = pointStates[i].subPointStates
                  const spentPoints = subPointStates.reduce((acc, cur) => acc + cur.selectedPoints, 0)

                  return (
                    <>
                      <Divider my="sm" />
                      <Group key={i} position="apart">
                        <Text maw="80%" fz="xl">
                          {t("ui.predatorTypeModal.pickPoints").replace("{{total}}", String(totalPoints))}
                        </Text>
                        <Text>
                          {t("ui.predatorTypeModal.remaining")}{" "}
                          <Title ta="center" c="red">
                            {`${totalPoints - spentPoints}`}
                          </Title>
                        </Text>
                        <Stack>
                          {options.map((option, j) => {
                            const { selectedPoints, maxLevel } = subPointStates[j]
                            return (
                              <Group key={predatorType.name + "/" + option.name + j}>
                                <Tooltip
                                  disabled={option.summary === ""}
                                  label={`${upcase(option.summary)}`}
                                  transitionProps={{ transition: "slide-up", duration: 200 }}
                                  events={globals.tooltipTriggerEvents}
                                >
                                  <Text w="140px">{option.name}</Text>
                                </Tooltip>
                                <PointPicker
                                  points={selectedPoints}
                                  setPoints={(n) => updatePointStates(n, i, j)}
                                  maxLevel={maxLevel}
                                />
                              </Group>
                            )
                          })}
                        </Stack>
                      </Group>
                    </>
                  )
                })}
              </Stack>
            </Group>
            <Divider my="sm" />
          </div>
        ) : null}

        <Text fw={700} fz="xl" ta="center">
          {t("ui.predatorTypeModal.selectSpecialty")}
        </Text>
        <SegmentedControl
          size={phoneScreen ? "sm" : "md"}
          color="red"
          value={specialty}
          onChange={setSpecialty}
          data={predatorType.specialtyOptions.map((specialty) => ({            
            label: `${t(`skills.${specialty.skill}`)}: ${t(`skills.specialties.${specialty.name}`)}`,
            value: `${specialty.skill}_${specialty.name}`,
          }))}
        />
        <Divider my="sm" />

        <Text fw={700} fz="xl" ta="center">
          {t("ui.predatorTypeModal.bonusDiscipline")}
        </Text>
        <Tooltip
          label={`${t(`disciplineName.${discipline}`)}: ${pickedDiscipline.summary}`}
          transitionProps={{ transition: "slide-up", duration: 200 }}
          events={globals.tooltipTriggerEvents}
        >
          <SegmentedControl
            size={phoneScreen ? "sm" : "md"}
            color="red"
            value={discipline}
            onChange={setDiscipline}
            data={predatorType.disciplineOptions.map((discipline) => ({              
              label: t(`disciplineName.${discipline.name}`),
              value: discipline.name,
            }))}
          />
        </Tooltip>

        <Divider my="sm" />

        <Group position="apart">
          <Button
            color="yellow"
            variant="subtle"
            leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
            onClick={closeModal}
          >
            {t("ui.predatorTypeModal.back")}
          </Button>

          <Button
            color="grape"
            onClick={async () => {
              const pickedSpecialty = predatorType.specialtyOptions.find(
                ({ name }) => name === specialty.split("_")[1]
              )
              const pickedDisciplineOption = predatorType.disciplineOptions.find(
                ({ name }) => name === discipline
              )
              if (!pickedSpecialty) {
                console.error(`Couldn't find specialty with name ${specialty}`)
              } else if (!pickedDisciplineOption) {
                console.error(`Couldn't find discipline with name ${discipline}`)
              } else {
                const pickedMeritsAndFlaws = predatorType.selectableMeritsAndFlaws.flatMap((selectable, i) => {
                  const subPointStates = pointStates[i].subPointStates
                  return selectable.options.flatMap((option, j) => {
                    const { selectedPoints } = subPointStates[j]
                    if (selectedPoints === 0) return []
                    return meritFlawSchema.parse({
                      name: option.name,
                      summary: option.summary,
                      level: selectedPoints,
                      type: option.type,
                    })
                  })
                })

                const pickedDisciplineParsed = disciplineNameSchema.parse(discipline)
                const changedPickedDiscipline = pickedDisciplineParsed !== character.predatorType.pickedDiscipline

                setCharacter({
                  ...character,
                  predatorType: {
                    name: pickedPredatorType,
                    pickedDiscipline: pickedDisciplineParsed,
                    pickedSpecialties: [pickedSpecialty],
                    pickedMeritsAndFlaws,
                  },
                  disciplines: changedPickedDiscipline ? [] : character.disciplines,
                  rituals: changedPickedDiscipline ? [] : character.rituals,
                })

                trackEvent({
                  action: "predatortype confirm clicked",
                  category: "predator type",
                  label: pickedPredatorType,
                })

                closeModal()
                nextStep()
              }
            }}
          >
            {t("ui.predatorTypeModal.confirm")}
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}

export default PredatorTypeModal
