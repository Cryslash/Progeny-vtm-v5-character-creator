import { Grid, Stack, Text, Title } from "@mantine/core"
import { upcase } from "../../generator/utils"
import Tally from "../../components/Tally"
import { Skills, skillsKeySchema } from "../../data/Skills"
import {t} from "../../i18n"

export type SkillsProps = {
    skills: Skills
}

const SkillDisplay = ({ skills }: SkillsProps) => {
    const textStyle: React.CSSProperties = {
        fontFamily: "Courier New",
    }

    return (
        <Stack>
            <Title order={2}>{t("skills.title")}</Title>

            <Grid>
                <Grid.Col span={4}>
                    <Title order={4}>{t("skills.physical")}</Title>
                    {["athletics", "brawl", "craft", "drive", "firearms", "melee", "larceny", "stealth", "survival"]
                        .map((s) => skillsKeySchema.parse(s))
                        .map((skill) => {
                            return (
                                <Text style={textStyle} key={skill}>                                    
                                    {upcase(t(`skills.${skill}`)).slice(0, 3)}: <Tally n={skills[skill]} />
                                </Text>
                            )
                        })}
                </Grid.Col>

                <Grid.Col span={4}>
                    <Title order={4}>{t("skills.social")}</Title>
                    {[
                        "animal ken",
                        "etiquette",
                        "insight",
                        "intimidation",
                        "leadership",
                        "performance",
                        "persuasion",
                        "streetwise",
                        "subterfuge",
                    ]
                        .map((s) => skillsKeySchema.parse(s))
                        .map((skill) => {
                            return (
                                <Text style={textStyle} key={skill}>                                    
                                    {upcase(t(`skills.${skill}`)).slice(0, 3)}: <Tally n={skills[skill]} />
                                </Text>
                            )
                        })}
                </Grid.Col>

                <Grid.Col span={4}>
                    <Title order={4}>{t("skills.mental")}</Title>
                    {["academics", "awareness", "finance", "investigation", "medicine", "occult", "politics", "science", "technology"]
                        .map((s) => skillsKeySchema.parse(s))
                        .map((skill) => {
                            return (
                                <Text style={textStyle} key={skill}>                                    
                                    {upcase(t(`skills.${skill}`)).slice(0, 3)}: <Tally n={skills[skill]} />
                                </Text>
                            )
                        })}
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export default SkillDisplay
