import { z } from "zod"
import banuHaqimLogo from "../resources/clanIcons/BanuHaqim.webp"
import brujahLogo from "../resources/clanIcons/Brujah.webp"
import gangrelLogo from "../resources/clanIcons/Gangrel.webp"
import hecataLogo from "../resources/clanIcons/Hecata.webp"
import lasombraLogo from "../resources/clanIcons/Lasombra.webp"
import malkavianLogo from "../resources/clanIcons/Malkavian.webp"
import ministryLogo from "../resources/clanIcons/Ministry.webp"
import nosferatuLogo from "../resources/clanIcons/Nosferatu.webp"
import ravnosLogo from "../resources/clanIcons/Ravnos.webp"
import salubriLogo from "../resources/clanIcons/Salubri.webp"
import caitiffLogo from "../resources/clanIcons/logoCaitiff.png"
import thinbloodLogo from "../resources/clanIcons/logoThinblood.svg"
import toreadorLogo from "../resources/clanIcons/Toreador.webp"
import tremereLogo from "../resources/clanIcons/Tremere.webp"
import tzimisceLogo from "../resources/clanIcons/Tzimisce.webp"
import ventrueLogo from "../resources/clanIcons/Ventrue.webp"
import { ClanName, clanNameSchema, disciplineNameSchema } from "./NameSchemas"
import {t} from "../i18n"

export const clanSchema = z.object({
    name: clanNameSchema,
    description: z.string(),
    logo: z.string(),
    bane: z.string(),
    compulsion: z.string(),
    nativeDisciplines: disciplineNameSchema.array(),
})
export type Clan = z.infer<typeof clanSchema>
export const clanKeySchema = clanSchema.keyof()
export type ClanKey = z.infer<typeof clanKeySchema>

export const clans: Record<ClanName, Clan> = {
    Brujah: {
    name: "Brujah",
    description: t("clans.brujah.description"),
    logo: brujahLogo,
    bane: t("clans.brujah.bane"),
    compulsion: t("clans.brujah.compulsion"),
    nativeDisciplines: ["celerity", "potence", "presence"],
  },
  Gangrel: {
    name: "Gangrel",
    description: t("clans.gangrel.description"),
    logo: gangrelLogo,
    bane: t("clans.gangrel.bane"),
    compulsion: t("clans.gangrel.compulsion"),
    nativeDisciplines: ["animalism", "fortitude", "protean"],
  },
  Nosferatu: {
    name: "Nosferatu",
    description: t("clans.nosferatu.description"),
    logo: nosferatuLogo,
    bane: t("clans.nosferatu.bane"),
    compulsion: t("clans.nosferatu.compulsion"),
    nativeDisciplines: ["animalism", "obfuscate", "potence"],
  },
  Malkavian: {
    name: "Malkavian",
    description: t("clans.malkavian.description"),
    logo: malkavianLogo,
    bane: t("clans.malkavian.bane"),
    compulsion: t("clans.malkavian.compulsion"),
    nativeDisciplines: ["auspex", "dominate", "obfuscate"],
  },
  Tremere: {
    name: "Tremere",
    description: t("clans.tremere.description"),
    logo: tremereLogo,
    bane: t("clans.tremere.bane"),
    compulsion: t("clans.tremere.compulsion"),
    nativeDisciplines: ["auspex", "dominate", "blood sorcery"],
  },
  Ventrue: {
    name: "Ventrue",
    description: t("clans.ventrue.description"),
    logo: ventrueLogo,
    bane: t("clans.ventrue.bane"),
    compulsion: t("clans.ventrue.compulsion"),
    nativeDisciplines: ["dominate", "fortitude", "presence"],
  },
  Toreador: {
    name: "Toreador",
    description: t("clans.toreador.description"),
    logo: toreadorLogo,
    bane: t("clans.toreador.bane"),
    compulsion: t("clans.toreador.compulsion"),
    nativeDisciplines: ["auspex", "celerity", "presence"],
  },
  Lasombra: {
    name: "Lasombra",
    description: t("clans.lasombra.description"),
    logo: lasombraLogo,
    bane: t("clans.lasombra.bane"),
    compulsion: t("clans.lasombra.compulsion"),
    nativeDisciplines: ["dominate", "potence", "oblivion"],
  },
  "Banu Haqim": {
    name: "Banu Haqim",
    description: t("clans.banuHaqim.description"),
    logo: banuHaqimLogo,
    bane: t("clans.banuHaqim.bane"),
    compulsion: t("clans.banuHaqim.compulsion"),
    nativeDisciplines: ["celerity", "obfuscate", "blood sorcery"],
  },
  Ministry: {
    name: "Ministry",
    description: t("clans.ministry.description"),
    logo: ministryLogo,
    bane: t("clans.ministry.bane"),
    compulsion: t("clans.ministry.compulsion"),
    nativeDisciplines: ["obfuscate", "presence", "protean"],
  },
  Ravnos: {
    name: "Ravnos",
    description: t("clans.ravnos.description"),
    logo: ravnosLogo,
    bane: t("clans.ravnos.bane"),
    compulsion: t("clans.ravnos.compulsion"),
    nativeDisciplines: ["animalism", "obfuscate", "presence"],
  },
  Tzimisce: {
    name: "Tzimisce",
    description: t("clans.tzimisce.description"),
    logo: tzimisceLogo,
    bane: t("clans.tzimisce.bane"),
    compulsion: t("clans.tzimisce.compulsion"),
    nativeDisciplines: ["animalism", "dominate", "protean"],
  },
  Hecata: {
    name: "Hecata",
    description: t("clans.hecata.description"),
    logo: hecataLogo,
    bane: t("clans.hecata.bane"),
    compulsion: t("clans.hecata.compulsion"),
    nativeDisciplines: ["auspex", "fortitude", "oblivion"],
  },
  Salubri: {
    name: "Salubri",
    description: t("clans.salubri.description"),
    logo: salubriLogo,
    bane: t("clans.salubri.bane"),
    compulsion: t("clans.salubri.compulsion"),
    nativeDisciplines: ["auspex", "dominate", "fortitude"],
  },
  Caitiff: {
    name: "Caitiff",
    description: t("clans.caitiff.description"),
    logo: caitiffLogo,
    bane: t("clans.caitiff.bane"),
    compulsion: t("clans.caitiff.compulsion"),
    nativeDisciplines: [
      "animalism",
      "auspex",
      "celerity",
      "dominate",
      "fortitude",
      "obfuscate",
      "potence",
      "presence",
      "protean",
      "blood sorcery",
      "oblivion",
    ],
  },
  "Thin-blood": {
    name: "Thin-blood",
    description: t("clans.thinblood.description"),
    logo: thinbloodLogo,
    bane: t("clans.thinblood.bane"),
    compulsion: t("clans.thinblood.compulsion"),
    nativeDisciplines: ["thin-blood alchemy"],
  },
    "": {
        name: "",
        description: "",
        logo: "",
        bane: "",
        compulsion: "",
        nativeDisciplines: [],
    },
}
