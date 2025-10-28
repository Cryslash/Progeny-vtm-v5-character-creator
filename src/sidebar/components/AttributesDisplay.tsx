import { Grid, Stack, Text, Title } from "@mantine/core"
import { upcase } from "../../generator/utils"
import Tally from "../../components/Tally"
import { Attributes, attributesKeySchema } from "../../data/Attributes"
import {t} from "../../i18n"

export type AttributesProps = {
    attributes: Attributes
}

const AttributesDisplay = ({ attributes }: AttributesProps) => {
    const textStyle: React.CSSProperties = {
        fontFamily: "Courier New",
    }

    return (
        <Stack>            
            <Title order={2}>{t("attributes.title")}</Title>

            <Grid>
                <Grid.Col span={4}>
                    <Title order={4}>{t("attributes.physical")}</Title>
                    {["strength", "dexterity", "stamina"]                    
                        .map((a) => attributesKeySchema.parse(a))
                        .map((attribute) => {
                            return (
                                <Text style={textStyle} key={attribute}>                                    
                                    {upcase(t(`attributes.${attribute}`)).slice(0, 3)}: <Tally n={attributes[attribute]} />
                                </Text>
                            )
                        })}
                </Grid.Col>

                <Grid.Col span={4}>
                    <Title order={4}>{t("attributes.social")}</Title>
                    {["charisma", "manipulation", "composure"]
                        .map((a) => attributesKeySchema.parse(a))
                        .map((attribute) => {
                            return (
                                <Text style={textStyle} key={attribute}>                                    
                                    {upcase(t(`attributes.${attribute}`)).slice(0, 3)}: <Tally n={attributes[attribute]} />
                                </Text>
                            )
                        })}
                </Grid.Col>

                <Grid.Col span={4}>
                    <Title order={4}>{t("attributes.mental")}</Title>
                    {["intelligence", "wits", "resolve"]
                        .map((a) => attributesKeySchema.parse(a))
                        .map((attribute) => {
                            return (
                                <Text style={textStyle} key={attribute}>                                    
                                    {upcase(t(`attributes.${attribute}`)).slice(0, 3)}: <Tally n={attributes[attribute]} />
                                </Text>
                            )
                        })}
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default AttributesDisplay
