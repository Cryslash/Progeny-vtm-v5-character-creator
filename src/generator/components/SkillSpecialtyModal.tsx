import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Group, Modal, Select, Stack, Text, TextInput } from "@mantine/core"
import { useState } from "react"
import { t } from "../../i18n"
import { Character } from "../../data/Character"
import { Skills, SkillsKey, skillsKeySchema } from "../../data/Skills"
import { Specialty } from "../../data/Specialties"
import { globals } from "../../globals"
import { intersection, lowcase, upcase } from "../utils"

type SpecialtyModalProps = {
  modalOpened: boolean
  closeModal: () => void
  character: Character
  pickedSkillNames: SkillsKey[]
  skills: Skills
  setCharacter: (character: Character) => void
  nextStep: () => void
}

type SpecialtySkill = "academics" | "craft" | "performance" | "science"

export const SpecialtyModal = ({
  modalOpened,
  closeModal,
  setCharacter,
  nextStep,
  character,
  pickedSkillNames,
  skills,
}: SpecialtyModalProps) => {
  const smallScreen = globals.isSmallScreen
  const phoneScreen = globals.isPhoneScreen

  const [pickedSkillDisplay, setPickedSkillDisplay] = useState<string>("")
  const [pickedSkillSpecialty, setPickedSkillSpecialty] = useState("")

  const [academicsSpecialty, setAcademicsSpecialty] = useState("")
  const [craftSpecialty, setCraftSpecialty] = useState("")
  const [performanceSpecialty, setPerformanceSpecialty] = useState("")
  const [scienceSpecialty, setScienceSpecialty] = useState("")

  const specialtySkills = ["academics", "craft", "performance", "science"]

  const specialtyStates: Record<SpecialtySkill, { value: string; setValue: (s: string) => void }> = {
    academics: { value: academicsSpecialty, setValue: setAcademicsSpecialty },
    craft: { value: craftSpecialty, setValue: setCraftSpecialty },
    performance: { value: performanceSpecialty, setValue: setPerformanceSpecialty },
    science: { value: scienceSpecialty, setValue: setScienceSpecialty },
  }

  const pickedSpecialtySkills = intersection(specialtySkills, pickedSkillNames) as SpecialtySkill[]
  const pickedSkill = lowcase(pickedSkillDisplay)

  const inputW = phoneScreen ? 140 : 200
  return (
    <Modal
      withCloseButton={false}
      size="lg"
      opened={modalOpened}
      onClose={closeModal}
      title={
        <div>
          <Text w={smallScreen ? "300px" : "600px"} fw={700} fz={"30px"} ta="center">
            {t("ui.skillsSelection.specialtyModal.title")}
          </Text>
          <Text fw={400} fz={"md"} ta="center" mt={"md"} color="grey">
            {t("ui.skillsSelection.specialtyModal.description1")}
          </Text>
          <Text fw={400} fz={"md"} ta="center" mt={"md"} color="grey">
            {t("ui.skillsSelection.specialtyModal.description2")}
          </Text>
        </div>
      }
      centered
    >
      <Stack style={{ minHeight: "350px", display: "flex", flexDirection: "column" }}>
        <Divider my="sm" />
        <Text fw={700} fz={"xl"}>
          {t("ui.skillsSelection.specialtyModal.selectSkill")}
        </Text>

        <Group position="apart">         
          <Select
            w={inputW}
            placeholder={t("ui.skillsSelection.specialtyModal.pickOne")}
            searchable
            nothingFound={t("ui.skillsSelection.specialtyModal.noOptions")}
            dropdownPosition="bottom"
            data={pickedSkillNames
              .filter((s) => !specialtySkills.includes(s))
              .map((s) => ({
                value: s,
                label: t(`skills.${s}`),
              }))}
          
            // controla o valor selecionado corretamente
            value={pickedSkillDisplay || null}
            onChange={(value) => setPickedSkillDisplay(value ?? "")}            
          />
          
          <TextInput
            w={inputW}
            value={pickedSkillSpecialty}
            onChange={(event) => setPickedSkillSpecialty(event.currentTarget.value)}
          />
        </Group>
        <Divider my="sm" variant="dotted" />

        {pickedSpecialtySkills.map((s) => (
          <div key={s}>
            <Group position="apart">
              <Text fw={700} fz={phoneScreen ? "sm" : "xl"}>
                {t(`skills.${s}`)}:
              </Text>
              <TextInput
                w={inputW}
                value={specialtyStates[s].value}
                onChange={(event) => specialtyStates[s].setValue(event.currentTarget.value)}
              />
            </Group>
            <Divider my="sm" variant="dotted" />
          </div>
        ))}

        <Group position="apart" style={{ marginTop: "auto" }}>
          <Button color="yellow" variant="subtle" leftIcon={<FontAwesomeIcon icon={faChevronLeft} />} onClick={closeModal}>
            {t("ui.skillsSelection.specialtyModal.back")}
          </Button>

          <Button
            color="grape"
            onClick={async () => {
              let pickedSpecialties = specialtySkills.reduce<Specialty[]>((acc, s) => {
                return [...acc, { skill: skillsKeySchema.parse(s), name: specialtyStates[s as SpecialtySkill].value }]
              }, [])
              pickedSpecialties = [
                ...pickedSpecialties,
                { skill: skillsKeySchema.parse(pickedSkill), name: lowcase(pickedSkillSpecialty) },
              ]

              closeModal()
              setCharacter({ ...character, skills: skills, skillSpecialties: pickedSpecialties })
              nextStep()
            }}
          >
            {t("ui.skillsSelection.specialtyModal.confirm")}
          </Button>
        </Group>
      </Stack>
    </Modal>
  )
}
