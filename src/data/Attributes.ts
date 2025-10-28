import { z } from "zod"
import { t } from "../i18n"

export const attributesSchema = z.object({
  strength: z.number().min(1).max(5).int(),
  dexterity: z.number().min(1).max(5).int(),
  stamina: z.number().min(1).max(5).int(),

  charisma: z.number().min(1).max(5).int(),
  manipulation: z.number().min(1).max(5).int(),
  composure: z.number().min(1).max(5).int(),

  intelligence: z.number().min(1).max(5).int(),
  wits: z.number().min(1).max(5).int(),
  resolve: z.number().min(1).max(5).int(),
})
export type Attributes = z.infer<typeof attributesSchema>
export const attributesKeySchema = attributesSchema.keyof()
export type AttributesKey = z.infer<typeof attributesKeySchema>

export const attributeDescriptions: Record<AttributesKey, string> = {
  strength: t("attributes.descriptions.strength"),
  dexterity: t("attributes.descriptions.dexterity"),
  stamina: t("attributes.descriptions.stamina"),
  charisma: t("attributes.descriptions.charisma"),
  manipulation: t("attributes.descriptions.manipulation"),
  composure: t("attributes.descriptions.composure"),
  intelligence: t("attributes.descriptions.intelligence"),
  wits: t("attributes.descriptions.wits"),
  resolve: t("attributes.descriptions.resolve"),
}
