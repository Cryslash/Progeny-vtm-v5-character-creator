import { List, Stack, Text, Title } from "@mantine/core"
import { Touchstone } from "../../data/Character"
import { t } from "~/i18n"

export type TouchstoneProps = {
    touchstones: Touchstone[]
}

const TouchstoneDisplay = ({ touchstones }: TouchstoneProps) => {
    return (
        <Stack>
            <Title order={2}>{t("ui.sidebar.touchstones")}</Title>
            <List>
                {touchstones.map((stone, i) => {
                    return (
                        <List.Item key={i}>
                            <Text>
                                <b>{stone.name}</b>
                            </Text>
                            <Text c="dimmed">{stone.conviction}</Text>
                        </List.Item>
                    )
                })}
            </List>
        </Stack>
    )
}

export default TouchstoneDisplay
