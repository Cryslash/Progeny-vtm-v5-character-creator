import { faCheckSquare } from "@fortawesome/free-regular-svg-icons"
import { faFileExport, faFloppyDisk, faFilePdf, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ActionIcon, Alert, Button, Modal, Stack, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { notifications } from "@mantine/notifications"
import { IconAlertCircle, IconBrandReddit, IconBrandTwitter, IconButterfly } from "@tabler/icons-react"
import ResetModal from "../../components/ResetModal"
import { Character } from "../../data/Character"
import { downloadCharacterSheet } from "../pdfCreator"
import { downloadJson, updateHealthAndWillpowerAndBloodPotencyAndHumanity } from "../utils"
import { createWoD5EVttJson } from "../foundryWoDJsonCreator"
import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { trackEvent } from "../../utils/analytics"
import { t } from "../../i18n"

type FinalProps = {
    character: Character
    setCharacter: (character: Character) => void
    setSelectedStep: (step: number) => void
}

const Final = ({ character, setCharacter, setSelectedStep }: FinalProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Final" })
    }, [])

    const [downloadError, setDownloadError] = useState<Error | undefined>()
    const [resetModalOpened, { open: openResetModal, close: closeResetModal }] = useDisclosure(false)
    const [exportModalOpened, { open: openExportModal, close: closeExportModal }] = useDisclosure(false)

    return (
        <div style={{ maxWidth: "440px" }}>
            <Text ta="center" fz="50px">
                <FontAwesomeIcon icon={faCheckSquare} color="green" />
            </Text>
            <Text fz="32px" ta="center" fw={700} mb={20}>
                {t("ui.final.creationComplete")}
            </Text>

            <div style={{ background: "rgba(0, 0, 0, 0.6)", padding: "10px", borderRadius: "8px", marginBottom: "20px" }}>
                <Text fz="xl" mb="xl">
                    {t("ui.final.exportInstructions")}
                </Text>
                {/* <Text fz="xl">
                    {t("ui.final.feedbackMessage")}
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
                    &nbsp;
                    <ActionIcon
                        display="inline"
                        component="a"
                        href="https://bsky.app/profile/odinmatthias.bsky.social"
                        variant="default"
                        c="#208BFE"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButterfly />
                    </ActionIcon>
                </Text> */}
            </div>

            <Stack align="center" spacing="xl">
                <Button
                    leftIcon={<FontAwesomeIcon icon={faFilePdf} />}
                    size="xl"
                    color="grape"
                    onClick={() => {
                        downloadCharacterSheet(character).catch((e) => {
                            console.error(e)
                            setDownloadError(e as Error)
                        })

                        trackEvent({
                            action: "PDF downloaded",
                            category: "downloads",
                            label: JSON.stringify(character),
                        })
                    }}
                >
                    {t("ui.final.downloadPdf")}
                </Button>

                <Button
                    leftIcon={<FontAwesomeIcon icon={faFloppyDisk} />}
                    size="lg"
                    color="yellow"
                    variant="light"
                    onClick={() => {
                        updateHealthAndWillpowerAndBloodPotencyAndHumanity(character)
                        downloadJson(character).catch((e) => {
                            console.error(e)
                            setDownloadError(e as Error)
                        })
                        trackEvent({
                            action: "JSON downloaded (progeny)",
                            category: "downloads",
                            label: JSON.stringify(character),
                        })
                    }}
                >
                    {t("ui.final.downloadJson")}
                </Button>

                <Button
                    leftIcon={<FontAwesomeIcon icon={faFileExport} />}
                    size="lg"
                    color="blue"
                    variant="light"
                    onClick={openExportModal}
                >
                    {t("ui.final.exportTo")}
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
                    {t("ui.final.support")}
                </Button>

                <Button
                    leftIcon={<FontAwesomeIcon icon={faTrash} />}
                    size="md"
                    color="red"
                    variant="subtle"
                    onClick={openResetModal}
                >
                    {t("ui.final.reset")}
                </Button>
            </Stack>

            {downloadError ? (
                <Alert mt="50px" icon={<IconAlertCircle size="1rem" />} color="red" variant="outline" bg="rgba(0, 0, 0, 0.6)">
                    <Text fz="xl" ta="center">
                        {t("ui.final.downloadError")}: {downloadError.message}
                    </Text>
                    <Text fz="lg" ta="center" mb="xl">
                        {t("ui.final.sendScreenshot")}{" "}
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Odin68092534">
                            Twitter
                        </a>
                    </Text>
                    <Text fz="xs" ta="center">
                        {downloadError.stack}
                    </Text>
                </Alert>
            ) : null}

            <Alert mt="50px" icon={<IconAlertCircle size="1rem" />} color="violet" variant="outline" bg="rgba(0, 0, 0, 0.6)">
                <Text fz="lg" ta="center">
                    {t("ui.final.refreshWarning")}
                </Text>
            </Alert>

            <ResetModal
                setCharacter={setCharacter}
                setSelectedStep={setSelectedStep}
                resetModalOpened={resetModalOpened}
                closeResetModal={closeResetModal}
            />

            <Modal opened={exportModalOpened} onClose={closeExportModal} title={t("ui.final.exportModalTitle")} centered withCloseButton>
                <Stack>
                    <Text fz="lg" mb="md">
                        {t("ui.final.exportModalDescription")}
                    </Text>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "12px",
                            borderRadius: "8px",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px", maxWidth: "60%" }}>
                            <Text fw={600} size="md">
                                <a
                                    href="https://foundryvtt.com/packages/vtm5e"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#1976d2", textDecoration: "underline" }}
                                >
                                    Foundry WoD5E VTT
                                </a>
                            </Text>
                            <Text fz="sm" c="dimmed">
                                {t("ui.final.foundryDescription")}
                            </Text>
                        </div>
                        <Button
                            color="grape"
                            size="sm"
                            onClick={() => {
                                updateHealthAndWillpowerAndBloodPotencyAndHumanity(character)
                                try {
                                    const { json: vtt, validationErrors } = createWoD5EVttJson(character)
                                    const blob = new Blob([JSON.stringify(vtt, null, 2)], { type: "application/json" })
                                    const link = document.createElement("a")
                                    link.href = window.URL.createObjectURL(blob)
                                    link.download = `foundry_wod5e_${character.name}.json`
                                    link.click()
                                    setTimeout(() => window.URL.revokeObjectURL(link.href), 100)

                                    if (validationErrors.length > 0) {
                                        const errorCount = validationErrors.length
                                        const firstError = validationErrors[0]
                                        const message =
                                            errorCount === 1
                                                ? `Erro de validação: ${firstError}`
                                                : `${errorCount} erros de validação encontrados. Primeiro erro: ${firstError}`

                                        notifications.show({
                                            title: t("ui.final.validationWarningTitle"),
                                            message: t("ui.final.validationWarningMessage", { message }),
                                            color: "orange",
                                            autoClose: 10000,
                                        })
                                    }

                                    trackEvent({
                                        action: "JSON downloaded (foundry_wod5e vtt)",
                                        category: "downloads",
                                        label: JSON.stringify(character),
                                    })
                                    closeExportModal()
                                } catch (e) {
                                    console.error(e)
                                    setDownloadError(e as Error)
                                }
                            }}
                        >
                            {t("ui.final.exportJson")}
                        </Button>
                    </div>
                </Stack>
            </Modal>
        </div>
    )
}

export default Final
