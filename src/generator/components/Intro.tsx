import { faFileArrowUp, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, Alert, Button, FileButton, Stack, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconBrandGithub, IconBrandReddit, IconBrandTwitter } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import LoadModal from "../../components/LoadModal"
import { Character } from "../../data/Character"
import ReactGA from "react-ga4"
import { globals } from "../../globals"
import { t } from "../../i18n"

type IntroProps = {
  setCharacter: (character: Character) => void
  nextStep: () => void
}

const Intro = ({ setCharacter, nextStep }: IntroProps) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Intro" })
  }, [])

  const [loadedFile, setLoadedFile] = useState<File | null>(null)
  const [loadModalOpened, { open: openLoadModal, close: closeLoadModal }] = useDisclosure(false)

  return (
    <Alert
      mt={globals.isPhoneScreen ? "75px" : "50px"}
      color="grape"
      variant="outline"
      bg={"rgba(0, 0, 0, 0.6)"}
    >
      <Text fz={globals.largeFontSize} ta="center" mb="lg">
        {t("ui.intro.title")}
      </Text>

      <Text fz={globals.smallerFontSize} mb="xs">
        {t("ui.intro.description1")}
      </Text>

      <Text fz={globals.smallerFontSize} mb="xs">
        {t("ui.intro.description2")}{" "}
        <a href="https://linktr.ee/nerdbert">Nerdbert</a>.
      </Text>

      <Text fz={globals.smallerFontSize} mb="xl">
        {t("ui.intro.warning")}
      </Text>

      <Text fz={globals.smallerFontSize} mb="xl">
        {t("ui.intro.feedback")}
        &nbsp;
        <ActionIcon
          display="inline"
          component="a"
          href="https://www.reddit.com/user/ProgenyDev/"
          variant="default"
          c="#ff6314"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandReddit />
        </ActionIcon>
        &nbsp;
        <ActionIcon
          display="inline"
          component="a"
          href="https://twitter.com/Odin68092534"
          variant="default"
          c="#1DA1F2"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandTwitter />
        </ActionIcon>
      </Text>

      <Stack align="center" spacing="xl">
        <Button
          leftIcon={<FontAwesomeIcon icon={faPlay} />}
          size="xl"
          color="grape"
          onClick={nextStep}
        >
          {t("ui.intro.getStarted")}
        </Button>

        <FileButton
          onChange={async (payload: File | null) => {
            if (!payload) return
            setLoadedFile(payload)
            openLoadModal()
          }}
          accept="application/json"
        >
          {(props) => (
            <Button
              leftIcon={<FontAwesomeIcon icon={faFileArrowUp} />}
              size="md"
              color="yellow"
              variant="light"
              {...props}
            >
              {t("ui.intro.loadFromFile")}
            </Button>
          )}
        </FileButton>

        <Button
          component="a"
          href="https://github.com/Odin94/Progeny-vtm-v5-character-creator"
          target="_blank"
          rel="noreferrer"
          leftIcon={<IconBrandGithub />}
          size="xs"
          color="gray"
          variant="filled"
        >
          {t("ui.intro.viewSource")}
        </Button>

        <Button
          component="a"
          href="https://ko-fi.com/odin_dev"
          target="_blank"
          rel="noreferrer"
          leftIcon={<span>☕</span>}
          size="xs"
          color="gray"
          variant="light"
        >
          {t("ui.intro.support")}
        </Button>

        <Button
          component="a"
          href="https://odin-matthias.de"
          target="_blank"
          rel="noreferrer"
          size="xs"
          color="gray"
          variant="subtle"
        >
          <Text color="rgb(190,190,190)">{t("ui.intro.website")}</Text>
        </Button>
      </Stack>

      <LoadModal
        loadedFile={loadedFile}
        setCharacter={setCharacter}
        loadModalOpened={loadModalOpened}
        closeLoadModal={closeLoadModal}
      />
    </Alert>
  )
}

export default Intro
