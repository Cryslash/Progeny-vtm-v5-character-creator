import { Card, Center, Grid, Image, ScrollArea, Text, Title, useMantineTheme } from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { useEffect } from "react"
import ReactGA from "react-ga4"
import { trackEvent } from "../../utils/analytics"
import { isThinbloodFlaw, isThinbloodMerit, loresheets } from "~/data/MeritsAndFlaws"
import { ClanName, clanNameSchema } from "~/data/NameSchemas"
import { Character, getEmptyCharacter, MeritFlaw } from "../../data/Character"
import { clans } from "../../data/Clans"
import { globals } from "../../globals"
import { notDefault } from "../utils"
import { t } from "../../i18n"

type ClanPickerProps = {
  character: Character
  setCharacter: (character: Character) => void
  nextStep: () => void
}

const ClanPicker = ({ character, setCharacter, nextStep }: ClanPickerProps) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Clan Picker" })
  }, [])

  const theme = useMantineTheme()
  const c1 = "rgba(26, 27, 30, 0.90)"

  // Função para ajustar as chaves ao formato usado no pt.ts
const normalizeClanKey = (clan: string) => {
  const map: Record<string, string> = {
    "Banu Haqim": "banuHaqim",
    "Thin-blood": "thinblood",
  }
  return map[clan] || clan.toLowerCase()
}

  const createClanPick = (clan: ClanName, c2: string) => {
    const bgColor = theme.fn.linearGradient(0, c1, c2)

    // aplica o normalizador antes de chamar o t()
 const clanKey = normalizeClanKey(clan)

    return (
      <Grid.Col key={clan} span={4}>
        <Card
          className="hoverCard"
          shadow="sm"
          padding="lg"
          radius="md"
          h={275}
          style={{ background: bgColor, cursor: "pointer" }}
          onClick={() => {
            const newMerits = clan === character.clan ? character.merits : getNewMerits(clan, character)
            const newFlaws = clan === "Thin-blood" ? character.flaws : flawsWithoutThinbloodFlaws(character.flaws)

            if ((notDefault(character, "disciplines") || notDefault(character, "predatorType")) && clan !== character.clan) {
              notifications.show({
                title: t("ui.clanPicker.resetDisciplinesTitle"),
                message: t("ui.clanPicker.resetDisciplinesMessage"),
                autoClose: 7000,
                color: "yellow",
              })

              setCharacter({
                ...character,
                clan,
                disciplines: [],
                availableDisciplineNames: clans[clan].nativeDisciplines,
                predatorType: clan === "Thin-blood" ? getEmptyCharacter().predatorType : character.predatorType,
                merits: newMerits,
                flaws: newFlaws,
              })
            } else {
              setCharacter({
                ...character,
                clan,
                availableDisciplineNames: clans[clan].nativeDisciplines,
                merits: newMerits,
                flaws: newFlaws,
              })
            }

            trackEvent({
              action: "clan clicked",
              category: "clans",
              label: clan,
            })
            nextStep()
          }}
        >
          <Card.Section>
            <Center pt={10}>
              <Image fit="contain" withPlaceholder src={clans[clan].logo} height={120} width={120} alt="Clan Logo" />
            </Center>
          </Card.Section>

          <Center>
            <Title p="md">{t(`clans.${clanKey}.name`)}</Title>
          </Center>           
          <Text h={55} size="sm" color="dimmed" ta="center">
            {t(`clans.${clanKey}.description`)}
          </Text>
        </Card>
      </Grid.Col>
    )
  }

  const height = globals.viewportHeightPx

  return (
    <div style={{ height: height - 250 }}>
      <Text
        fz="30px"
        ta="center"
        dangerouslySetInnerHTML={{ __html: t("ui.clanPicker.pickYourClan") }}
       />

      <Text ta="center" fz="xl" fw={700} c="red">
        {t("ui.clanPicker.title")}
      </Text>
      <hr color="#e03131" />

      <ScrollArea h={height - 215} w="100%" p={20}>
        <Text ta="center" fz="xl" fw={700} mb="sm" mt="md" c={theme.colors.blue[6]}>
          {t("ui.clanPicker.rulers")}
        </Text>
        <Grid grow m={0}>
          {["Ventrue", "Tzimisce", "Lasombra"]
            .map((c) => clanNameSchema.parse(c))
            .map((clan) => createClanPick(clan, theme.fn.rgba(theme.colors.blue[8], 0.9)))}
        </Grid>

        <Text ta="center" fz="xl" fw={700} mb="sm" mt="md" c={theme.colors.red[8]}>
          {t("ui.clanPicker.fighters")}
        </Text>
        <Grid grow m={0}>
          {["Brujah", "Gangrel", "Banu Haqim"]
            .map((c) => clanNameSchema.parse(c))
            .map((clan) => createClanPick(clan, theme.fn.rgba(theme.colors.red[8], 0.9)))}
        </Grid>

        <Text ta="center" fz="xl" fw={700} mb="sm" mt="md" c={theme.colors.grape[7]}>
          {t("ui.clanPicker.seducers")}
        </Text>
        <Grid grow m={0}>
          {["Toreador", "Ravnos", "Ministry"]
            .map((c) => clanNameSchema.parse(c))
            .map((clan) => createClanPick(clan, theme.fn.rgba(theme.colors.grape[8], 0.9)))}
        </Grid>

        <Text ta="center" fz="xl" fw={700} mb="sm" mt="md" c="green">
          {t("ui.clanPicker.investigators")}
        </Text>
        <Grid grow m={0}>
          {["Malkavian", "Tremere", "Hecata"]
            .map((c) => clanNameSchema.parse(c))
            .map((clan) => createClanPick(clan, theme.fn.rgba(theme.colors.green[9], 0.9)))}
        </Grid>

        <Text ta="center" fz="xl" fw={700} mb="sm" mt="md" c="rgb(175,175,175)">
          {t("ui.clanPicker.hidden")}
        </Text>
        <Grid grow m={0}>
          {["Nosferatu", "Salubri"]
            .map((c) => clanNameSchema.parse(c))
            .map((clan) => createClanPick(clan, theme.fn.rgba(theme.colors.gray[6], 0.9)))}
        </Grid>

        <Text ta="center" fz="xl" fw={700} mb="sm" mt="md" c="teal">
          {t("ui.clanPicker.advanced")}
        </Text>
        <Grid grow m={0}>
          {["Caitiff", "Thin-blood"]
            .map((c) => clanNameSchema.parse(c))
            .map((clan) => createClanPick(clan, theme.fn.rgba(theme.colors.teal[8], 0.9)))}
        </Grid>
      </ScrollArea>
    </div>
  )
}

const meritsWithoutThinbloodMerits = (merits: MeritFlaw[]) => merits.filter((m) => !isThinbloodMerit(m.name))
const flawsWithoutThinbloodFlaws = (flaws: MeritFlaw[]) => flaws.filter((f) => !isThinbloodFlaw(f.name))
const meritsWithoutInvalidLoreSheets = (newClan: ClanName, character: Character) => {
  const { merits } = character
  const loresheetMerits = loresheets.flatMap((loresheet) =>
    loresheet.merits.map((lsMerit) => ({ loresheet, meritName: lsMerit.name }))
  )

  return merits.filter((m) => {
    const loresheetMerit = loresheetMerits.find((lsMerit) => m.name === lsMerit.meritName)
    if (!loresheetMerit) return true

    const requirementsMet = loresheetMerit.loresheet.requirementFunctions.every((fun) =>
      fun({ ...character, clan: newClan })
    )
    return requirementsMet
  })
}

const getNewMerits = (newClan: ClanName, character: Character) => {
  let newMerits = meritsWithoutInvalidLoreSheets(newClan, character)
  newMerits = newClan === "Thin-blood" ? newMerits : meritsWithoutThinbloodMerits(newMerits)

  if (newMerits.length < character.merits.length) {
    notifications.show({
      title: t("ui.clanPicker.resetMeritsTitle"),
      message: t("ui.clanPicker.resetMeritsMessage"),
      autoClose: 7000,
      color: "yellow",
    })
  }

  return newMerits
}

export default ClanPicker
