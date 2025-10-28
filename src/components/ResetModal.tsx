import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Group, Modal, Stack, Text } from "@mantine/core"
import { Character, getEmptyCharacter } from "../data/Character"
import { t } from "../i18n"

export type ResetModalProps = {
    setCharacter: (character: Character) => void
    setSelectedStep: (step: number) => void
    resetModalOpened: boolean
    closeResetModal: () => void
}

const ResetModal = ({ resetModalOpened, closeResetModal, setCharacter, setSelectedStep }: ResetModalProps) => {
    return (
        <Modal opened={resetModalOpened} onClose={closeResetModal} title="" centered withCloseButton={false}>
            <Stack>
                <Text fz={"xl"} ta="center">                    
                    {t("ui.resetModal.resetCurrentChar")}
                </Text>
                <Divider my="sm" />
                <Group position="apart">
                    <Button color="yellow" variant="subtle" leftIcon={<FontAwesomeIcon icon={faXmark} />} onClick={closeResetModal}>
                        {t("ui.common.cancel")}
                    </Button>

                    <Button
                        color="red"
                        onClick={async () => {
                            setCharacter(getEmptyCharacter())
                            setSelectedStep(0)

                            closeResetModal()
                        }}
                    >
                        {t("ui.resetModal.resetButtonText")}                        
                    </Button>
                </Group>
            </Stack>
        </Modal>
    )
}

export default ResetModal
