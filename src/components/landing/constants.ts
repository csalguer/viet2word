import { WordEntry } from './types';

export const SAMPLE_WORDS: WordEntry[] = [
  {
    word: "Petrichor",
    pronunciation: "/ˈpɛtrɪkɔːr/",
    etymology: "From Ancient Greek πέτρα (pétra, “stone”) + ἰχώρ (ikhṓr, “ethereal fluid”). Coined by I. J. Bear and R. G. Thomas in 1964.",
    alternatives: ["Petr-ichor", "Stone-essence"],
    secondarySpellings: ["Paetrichor (archaic)"],
    definitions: [
      {
        id: "1",
        partOfSpeech: "n.",
        meaning: "The distinctive, earthy scent produced when rain falls on dry soil.",
        example: "The petrichor rising from the asphalt was intoxicating after the long drought.",
        meta: ["Meteorology", "Chemistry"],
        synonyms: ["earth-scent", "rain-smell"]
      },
      {
        id: "2",
        partOfSpeech: "n.",
        meaning: "A fluid flowing in the veins of the gods (in Greek mythology).",
        regions: ["Mythology", "Literary"],
        antonyms: ["mortal blood"]
      },
      {
        id: "3",
        partOfSpeech: "adj. (derivative)",
        meaning: "Relating to or resembling the scent of rain.",
        meta: ["rare"],
        example: "A petrichor quality hung in the humid air."
      }
    ]
  },
  {
    word: "Limerence",
    pronunciation: "/ˈlɪmərəns/",
    etymology: "Coined by psychologist Dorothy Tennov in her 1979 book 'Love and Limerence: The Experience of Being in Love'.",
    definitions: [
      {
        id: "1",
        partOfSpeech: "n.",
        meaning: "The state of being infatuated or obsessed with another person, typically experienced involuntarily and characterized by a strong desire for reciprocation of one's feelings.",
        meta: ["Psychology"],
        example: "His limerence for her was so consuming that he could barely focus on his work.",
        synonyms: ["infatuation", "crush", "passion"]
      },
      {
        id: "2",
        partOfSpeech: "n.",
        meaning: "An involuntary cognitive and emotional state in which a person feels an intense romantic desire for another person.",
        regions: ["Academic"],
        antonyms: ["indifference", "platonic love"]
      }
    ]
  },
  {
    word: "Defenestration",
    pronunciation: "/ˌdiːfɛnəˈstreɪʃ(ə)n/",
    etymology: "From Latin 'de-' (out of) + 'fenestra' (window or opening). First used in reference to the Defenestrations of Prague.",
    definitions: [
      {
        id: "1",
        partOfSpeech: "n.",
        meaning: "The act of throwing someone or something out of a window.",
        example: "The defenestration of the regents sparked a thirty-year war.",
        meta: ["Historical", "Formal"],
        synonyms: ["ejection", "expulsion"]
      },
      {
        id: "2",
        partOfSpeech: "n.",
        meaning: "The act of dismissing someone from a position of power or authority.",
        regions: ["Humorous", "Political"],
        example: "The voters signaled their desire for the defenestration of the ruling party."
      },
      {
        id: "3",
        partOfSpeech: "n.",
        meaning: "The act of removing the Windows operating system from a computer.",
        meta: ["Computing", "Slang"],
        synonyms: ["uninstall"]
      }
    ]
  },
  {
    word: "Sonder",
    pronunciation: "/ˈsɒndə/",
    etymology: "Coined by John Koenig for The Dictionary of Obscure Sorrows in 2012. Derived from German 'sonder-' (special) or French 'sonder' (to probe).",
    alternatives: ["sonder (verb)"],
    definitions: [
      {
        id: "1",
        partOfSpeech: "n.",
        meaning: "The profound feeling of realizing that everyone, including strangers passed in the street, has a life as complex as one's own, which they are constantly living despite one's personal lack of awareness of it.",
        example: "Sitting on the train, she was struck by a moment of sonder as she looked at the tired faces around her.",
        meta: ["Neologism", "Philosophy"],
        synonyms: ["realization", "empathy"]
      }
    ]
  }
];

// Fallback for single export if needed, though we use the array now.
export const SAMPLE_WORD = SAMPLE_WORDS[0];
