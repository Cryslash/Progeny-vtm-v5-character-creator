import { z } from "zod"
import { specialtySchema } from "./Specialties"
import { disciplineNameSchema, PredatorTypeName } from "./NameSchemas"
import { t } from "../i18n"

const selectableMeritsAndFlawsSchema = z.object({
  options: z
    .object({
      name: z.string(),
      summary: z.string(),
      maxLevel: z.number(),
      type: z.union([z.literal("merit"), z.literal("flaw")]),
    })
    .array(),
  totalPoints: z.number().int(),
})
export type SelectableMeritsAndFlaws = z.infer<typeof selectableMeritsAndFlawsSchema>

export const predatorTypeSchema = z.object({
  name: z.string(),
  summary: z.string(),
  specialtyOptions: specialtySchema.array(),
  disciplineOptions: z.object({ name: disciplineNameSchema }).array(),
  meritsAndFlaws: z.object({ name: z.string(), level: z.number().int(), summary: z.string(), type: z.string() }).array(),
  selectableMeritsAndFlaws: selectableMeritsAndFlawsSchema.array(),
  humanityChange: z.number().int(),
  bloodPotencyChange: z.number().int(),
})
export type PredatorType = z.infer<typeof predatorTypeSchema>

export const PredatorTypes: Record<PredatorTypeName, PredatorType> = {
  Alleycat: {
    name: t("predatorTypes.alleycat.name"),
    summary: t("predatorTypes.alleycat.summary"),
    specialtyOptions: [
      { skill: "intimidation", name: "Stickups" },
      { skill: "brawl", name: "Grappling" },
    ],
    disciplineOptions: [{ name: "celerity" }, { name: "potence" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.alleycat.merits.criminalContacts.name"), level: 3, summary: t("predatorTypes.alleycat.merits.criminalContacts.summary"), type: "merit" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: -1,
    bloodPotencyChange: 0,
  },
  Extortionist: {
    name: t("predatorTypes.extortionist.name"),
    summary: t("predatorTypes.extortionist.summary"),
    specialtyOptions: [
      { skill: "intimidation", name: "Coercion" },
      { skill: "larceny", name: "Security" },
    ],
    disciplineOptions: [{ name: "dominate" }, { name: "potence" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.extortionist.meritsAndFlaws.enemy.name"), level: 2, summary: t("predatorTypes.extortionist.meritsAndFlaws.enemy.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [
      {
        options: [
          {
            name: t("predatorTypes.extortionist.selectable.contacts.name"),
            summary: t("predatorTypes.extortionist.selectable.contacts.summary"),
            maxLevel: 3,
            type: "merit",
          },
          {
            name: t("predatorTypes.extortionist.selectable.resources.name"),
            summary: t("predatorTypes.extortionist.selectable.resources.summary"),
            maxLevel: 3,
            type: "merit",
          },
        ],
        totalPoints: 3,
      },
    ],
    humanityChange: 0,
    bloodPotencyChange: 0,
  },
  "Roadside Killer": {
    name: t("predatorTypes.roadside killer.name"),
    summary: t("predatorTypes.roadside killer.summary"),
    specialtyOptions: [
      { skill: "survival", name: "The Road" },
      { skill: "investigation", name: "Vampire Cant" },
    ],
    disciplineOptions: [{ name: "fortitude" }, { name: "protean" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.roadside killer.merits.herd.name"), level: 2, summary: t("predatorTypes.roadside killer.merits.herd.summary"), type: "merit" },
      { name: t("predatorTypes.roadside killer.merits.preyExclusion.name"), level: 1, summary: t("predatorTypes.roadside killer.merits.preyExclusion.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 0,
    bloodPotencyChange: 0,
  },
  Montero: {
    name: t("predatorTypes.montero.name"),
    summary: t("predatorTypes.montero.summary"),
    specialtyOptions: [
      { skill: "leadership", name: "Hunting Pack" },
      { skill: "stealth", name: "Stakeout" },
    ],
    disciplineOptions: [{ name: "dominate" }, { name: "obfuscate" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.montero.merits.retainers.name"), level: 2, summary: t("predatorTypes.montero.merits.retainers.summary"), type: "merit" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: -1,
    bloodPotencyChange: 0,
  },
  Cleaver: {
    name: t("predatorTypes.cleaver.name"),
    summary: t("predatorTypes.cleaver.summary"),
    specialtyOptions: [
      { skill: "persuasion", name: "Gaslighting" },
      { skill: "subterfuge", name: "Coverups" },
    ],
    disciplineOptions: [{ name: "dominate" }, { name: "animalism" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.cleaver.merits.herd.name"), level: 2, summary: t("predatorTypes.cleaver.merits.herd.summary"), type: "merit" },
      { name: t("predatorTypes.cleaver.merits.darkSecret.name"), level: 1, summary: t("predatorTypes.cleaver.merits.darkSecret.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 0,
    bloodPotencyChange: 0,
  },
  Consensualist: {
    name: t("predatorTypes.consensualist.name"),
    summary: t("predatorTypes.consensualist.summary"),
    specialtyOptions: [
      { skill: "medicine", name: "Phlebotomy" },
      { skill: "persuasion", name: "Vessels" },
    ],
    disciplineOptions: [{ name: "auspex" }, { name: "fortitude" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.consensualist.merits.masqueradeBreacher.name"), level: 1, summary: t("predatorTypes.consensualist.merits.masqueradeBreacher.summary"), type: "flaw" },
      { name: t("predatorTypes.consensualist.merits.preyExclusion.name"), level: 1, summary: t("predatorTypes.consensualist.merits.preyExclusion.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 1,
    bloodPotencyChange: 0,
  },
  Osiris: {
  name: t("predatorTypes.osiris.name"),
  summary: t("predatorTypes.osiris.summary"),
  specialtyOptions: [
    { skill: "occult", name: "[pick tradition]" },
    { skill: "performance", name: "[pick any]" },
  ],
  disciplineOptions: [{ name: "blood sorcery" }, { name: "presence" }],
  meritsAndFlaws: [],
  selectableMeritsAndFlaws: [
    {
      options: [
        {
          name: t("predatorTypes.osiris.selectable.fame.name"),
          summary: t("predatorTypes.osiris.selectable.fame.summary"),
          maxLevel: 3,
          type: "merit",
        },
        {
          name: t("predatorTypes.osiris.selectable.herd.name"),
          summary: t("predatorTypes.osiris.selectable.herd.summary"),
          maxLevel: 3,
          type: "merit",
        },
      ],
      totalPoints: 3,
    },
    {
      options: [
        {
          name: t("predatorTypes.osiris.selectable.enemies.name"),
          summary: t("predatorTypes.osiris.selectable.enemies.summary"),
          maxLevel: 3,
          type: "flaw",
        },
        {
          name: t("predatorTypes.osiris.selectable.folkloricBane.name"),
          summary: t("predatorTypes.osiris.selectable.folkloricBane.summary"),
          maxLevel: 1,
          type: "flaw",
        },
        {
          name: t("predatorTypes.osiris.selectable.folkloricBlock.name"),
          summary: t("predatorTypes.osiris.selectable.folkloricBlock.summary"),
          maxLevel: 1,
          type: "flaw",
        },
        {
          name: t("predatorTypes.osiris.selectable.stigmata.name"),
          summary: t("predatorTypes.osiris.selectable.stigmata.summary"),
          maxLevel: 1,
          type: "flaw",
        },
        {
          name: t("predatorTypes.osiris.selectable.stakeBait.name"),
          summary: t("predatorTypes.osiris.selectable.stakeBait.summary"),
          maxLevel: 2,
          type: "flaw",
        },
      ],
      totalPoints: 2,
    },
  ],
  humanityChange: 0,
  bloodPotencyChange: 0,
},
  "Scene Queen": {
  name: t("predatorTypes.scene queen.name"),
  summary: t("predatorTypes.scene queen.summary"),
  specialtyOptions: [
    { skill: "etiquette", name: "[Specific Scene]" },
    { skill: "leadership", name: "[Specific Scene]" },
    { skill: "streetwise", name: "[Specific Scene]" },
  ],
  disciplineOptions: [{ name: "dominate" }, { name: "potence" }],
  meritsAndFlaws: [
    { name: t("predatorTypes.scene queen.merits.fame.name"), level: 1, summary: t("predatorTypes.scene queen.merits.fame.summary"), type: "merit" },
    { name: t("predatorTypes.scene queen.merits.contact.name"), level: 1, summary: t("predatorTypes.scene queen.merits.contact.summary"), type: "merit" },
  ],
  selectableMeritsAndFlaws: [
    {
      options: [
        {
          name: t("predatorTypes.scene queen.selectable.disliked.name"),
          summary: t("predatorTypes.scene queen.selectable.disliked.summary"),
          maxLevel: 1,
          type: "flaw",
        },
        {
          name: t("predatorTypes.scene queen.selectable.preyExclusionScene.name"),
          summary: t("predatorTypes.scene queen.selectable.preyExclusionScene.summary"),
          maxLevel: 1,
          type: "flaw",
        },
      ],
      totalPoints: 1,
    },
  ],
  humanityChange: 0,
  bloodPotencyChange: 0,
  },
  Siren: {
    name: t("predatorTypes.siren.name"),
    summary: t("predatorTypes.siren.summary"),
    specialtyOptions: [
      { skill: "persuasion", name: "Seduction" },
      { skill: "subterfuge", name: "Seduction" },
    ],
    disciplineOptions: [{ name: "fortitude" }, { name: "presence" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.siren.merits.beautiful.name"), level: 2, summary: t("predatorTypes.siren.merits.beautiful.summary"), type: "merit" },
      { name: t("predatorTypes.siren.merits.enemy.name"), level: 1, summary: t("predatorTypes.siren.merits.enemy.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 0,
    bloodPotencyChange: 0,
  },
  Sandman: {
    name: t("predatorTypes.sandman.name"),
    summary: t("predatorTypes.sandman.summary"),
    specialtyOptions: [
      { skill: "medicine", name: "Anesthetics" },
      { skill: "stealth", name: "Break-ins" },
    ],
    disciplineOptions: [{ name: "auspex" }, { name: "obfuscate" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.sandman.merits.resources.name"), level: 1, summary: t("predatorTypes.sandman.merits.resources.summary"), type: "merit" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 0,
    bloodPotencyChange: 0,
  },
  Graverobber: {
    name: t("predatorTypes.graverobber.name"),
    summary: t("predatorTypes.graverobber.summary"),
    specialtyOptions: [
      { skill: "occult", name: "Grave rituals" },
      { skill: "medicine", name: "Cadavers" },
    ],
    disciplineOptions: [{ name: "fortitude" }, { name: "oblivion" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.graverobber.merits.ironGullet.name"), level: 3, summary: t("predatorTypes.graverobber.merits.ironGullet.summary"), type: "merit" },
      { name: t("predatorTypes.graverobber.merits.haven.name"), level: 1, summary: t("predatorTypes.graverobber.merits.haven.summary"), type: "merit" },
      { name: t("predatorTypes.graverobber.merits.obviousPredator.name"), level: 2, summary: t("predatorTypes.graverobber.merits.obviousPredator.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 0,
    bloodPotencyChange: 0,
  },
  "Grim Reaper": {
    name: t("predatorTypes.grim reaper.name"),
    summary: t("predatorTypes.grim reaper.summary"),
    specialtyOptions: [
      { skill: "awareness", name: "Death" },
      { skill: "larceny", name: "Forgery" },
    ],
    disciplineOptions: [{ name: "auspex" }, { name: "oblivion" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.grim reaper.merits.allies.name"), level: 1, summary: t("predatorTypes.grim reaper.merits.allies.summary"), type: "merit" },
      { name: t("predatorTypes.grim reaper.merits.preyExclusion.name"), level: 1, summary: t("predatorTypes.grim reaper.merits.preyExclusion.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 1,
    bloodPotencyChange: 0,
  },
  Pursuer: {
    name: t("predatorTypes.pursuer.name"),
    summary: t("predatorTypes.pursuer.summary"),
    specialtyOptions: [
      { skill: "investigation", name: "Profiling" },
      { skill: "stealth", name: "Shadowing" },
    ],
    disciplineOptions: [{ name: "animalism" }, { name: "auspex" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.pursuer.merits.bloodhound.name"), level: 1, summary: t("predatorTypes.pursuer.merits.bloodhound.summary"), type: "merit" },
      { name: t("predatorTypes.pursuer.merits.contacts.name"), level: 1, summary: t("predatorTypes.pursuer.merits.contacts.summary"), type: "merit" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: -1,
    bloodPotencyChange: 0,
  },
  Trapdoor: {
  name: t("predatorTypes.trapdoor.name"),
  summary: t("predatorTypes.trapdoor.summary"),
  specialtyOptions: [
    { skill: "persuasion", name: "Marketing" },
    { skill: "stealth", name: "Ambushes and traps" },
  ],
  disciplineOptions: [{ name: "protean" }, { name: "obfuscate" }],
  meritsAndFlaws: [
    {
      name: t("predatorTypes.trapdoor.merits.haven.name"),
      level: 1,
      summary: t("predatorTypes.trapdoor.merits.haven.summary"),
      type: "merit",
    },
  ],
  selectableMeritsAndFlaws: [
    {
      options: [
        {
          name: t("predatorTypes.trapdoor.selectable.retainer.name"),
          summary: t("predatorTypes.trapdoor.selectable.retainer.summary"),
          maxLevel: 1,
          type: "merit",
        },
        {
          name: t("predatorTypes.trapdoor.selectable.herd.name"),
          summary: t("predatorTypes.trapdoor.selectable.herd.summary"),
          maxLevel: 1,
          type: "merit",
        },
        {
          name: t("predatorTypes.trapdoor.selectable.haven.name"),
          summary: t("predatorTypes.trapdoor.selectable.haven.summary"),
          maxLevel: 1,
          type: "merit",
        },
      ],
      totalPoints: 1,
    },
    {
      options: [
        {
          name: t("predatorTypes.trapdoor.selectable.creepy.name"),
          summary: t("predatorTypes.trapdoor.selectable.creepy.summary"),
          maxLevel: 1,
          type: "flaw",
        },
        {
          name: t("predatorTypes.trapdoor.selectable.haunted.name"),
          summary: t("predatorTypes.trapdoor.selectable.haunted.summary"),
          maxLevel: 1,
          type: "flaw",
        },
      ],
      totalPoints: 1,
    },
  ],
  humanityChange: 0,
  bloodPotencyChange: 0,
  },
  Bagger: {
    name: t("predatorTypes.bagger.name"),
    summary: t("predatorTypes.bagger.summary"),
    specialtyOptions: [
      { skill: "larceny", name: "Lockpicking" },
      { skill: "streetwise", name: "Black market" },
    ],
    disciplineOptions: [{ name: "obfuscate" }, { name: "oblivion" }, { name: "blood sorcery" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.bagger.merits.ironGullet.name"), level: 3, summary: t("predatorTypes.bagger.merits.ironGullet.summary"), type: "merit" },
      { name: t("predatorTypes.bagger.merits.enemy.name"), level: 2, summary: t("predatorTypes.bagger.merits.enemy.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 0,
    bloodPotencyChange: 0,
  },
  "Blood Leech": {
  name: t("predatorTypes.blood leech.name"),
  summary: t("predatorTypes.blood leech.summary"),
  specialtyOptions: [
    { skill: "brawl", name: "Kindred" },
    { skill: "stealth", name: "Against Kindred" },
  ],
  disciplineOptions: [{ name: "celerity" }, { name: "protean" }],
  meritsAndFlaws: [],
  selectableMeritsAndFlaws: [
    {
      options: [
        {
          name: t("predatorTypes.blood leech.selectable.diablerist.name"),
          summary: t("predatorTypes.blood leech.selectable.diablerist.summary"),
          maxLevel: 3,
          type: "merit",
        },
        {
          name: t("predatorTypes.blood leech.selectable.shunned.name"),
          summary: t("predatorTypes.blood leech.selectable.shunned.summary"),
          maxLevel: 3,
          type: "flaw",
        },
      ],
      totalPoints: 3,
    },
  ],
  humanityChange: -1,
  bloodPotencyChange: 1,
  },
  Farmer: {
    name: t("predatorTypes.farmer.name"),
    summary: t("predatorTypes.farmer.summary"),
    specialtyOptions: [
      { skill: "animal ken", name: "[pick animal]" },
      { skill: "survival", name: "Hunting" },
    ],
    disciplineOptions: [{ name: "animalism" }, { name: "protean" }],
    meritsAndFlaws: [
      { name: t("predatorTypes.farmer.merits.farmer.name"), level: 2, summary: t("predatorTypes.farmer.merits.farmer.summary"), type: "flaw" },
    ],
    selectableMeritsAndFlaws: [],
    humanityChange: 1,
    bloodPotencyChange: 0,
  },
  "": {
    name: "",
    summary: "",
    specialtyOptions: [],
    disciplineOptions: [],
    meritsAndFlaws: [],
    selectableMeritsAndFlaws: [],
    humanityChange: 0,
    bloodPotencyChange: 0,
  },
}
