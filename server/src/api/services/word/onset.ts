import ISyllableSegment from "../../../types/interfaces/ISyllableSegment";

const singleConsonantPhonemesExceptŋ: ISyllableSegment[] = [
  { ipaPhoneme: "p", graphemeSequences: ["p"] },
  { ipaPhoneme: "b", graphemeSequences: ["b"] },
  { ipaPhoneme: "t", graphemeSequences: ["t"] },
  { ipaPhoneme: "d", graphemeSequences: ["d"] },
  { ipaPhoneme: "k", graphemeSequences: ["c"] },
  { ipaPhoneme: "ɡ", graphemeSequences: ["g"] },
  { ipaPhoneme: "tʃ", graphemeSequences: ["ch"] },
  { ipaPhoneme: "dʒ", graphemeSequences: ["j"] },
  { ipaPhoneme: "f", graphemeSequences: ["f"] },
  { ipaPhoneme: "v", graphemeSequences: ["v"] },
  { ipaPhoneme: "θ", graphemeSequences: ["th"] },
  { ipaPhoneme: "ð", graphemeSequences: ["th"] },
  { ipaPhoneme: "s", graphemeSequences: ["s"] },
  { ipaPhoneme: "z", graphemeSequences: ["z"] },
  { ipaPhoneme: "ʃ", graphemeSequences: ["sh"] },
  // { ipaPhoneme: 'ʒ', graphemeSequences: ['g'] },
  { ipaPhoneme: "h", graphemeSequences: ["h"] },
  { ipaPhoneme: "m", graphemeSequences: ["m"] },
  { ipaPhoneme: "n", graphemeSequences: ["n"] },
  // { ipaPhoneme: 'ŋ', graphemeSequences: ['ng'] },
  { ipaPhoneme: "j", graphemeSequences: ["y"] },
  { ipaPhoneme: "w", graphemeSequences: ["w"] },
  { ipaPhoneme: "ɹ", graphemeSequences: ["r"] },
  { ipaPhoneme: "l", graphemeSequences: ["l"] },
];

const stopPlusApproximantOtherThanj: ISyllableSegment[] = [
  { ipaPhoneme: "pl", graphemeSequences: ["pl"] },
  { ipaPhoneme: "bl", graphemeSequences: ["bl"] },
  { ipaPhoneme: "kl", graphemeSequences: ["cl"] },
  { ipaPhoneme: "ɡl", graphemeSequences: ["gl"] },
  { ipaPhoneme: "pr", graphemeSequences: ["pr"] },
  { ipaPhoneme: "br", graphemeSequences: ["br"] },
  { ipaPhoneme: "tr", graphemeSequences: ["tr"] },
  { ipaPhoneme: "dr", graphemeSequences: ["dr"] },
  { ipaPhoneme: "kr", graphemeSequences: ["cr"] },
  { ipaPhoneme: "ɡr", graphemeSequences: ["gr"] },
  // { ipaPhoneme: 'tw', graphemeSequences: ['tw'] },
  // { ipaPhoneme: 'dw', graphemeSequences: ['dw'] },
  // { ipaPhoneme: 'ɡw', graphemeSequences: ['gw'] },
  // { ipaPhoneme: 'kw', graphemeSequences: ['kw'] },
  // { ipaPhoneme: 'pw', graphemeSequences: ['pw'] },
];

const voicelessFricativeOtherThanj: ISyllableSegment[] = [
  { ipaPhoneme: "fl", graphemeSequences: ["fl"] },
  { ipaPhoneme: "sl", graphemeSequences: ["sl"] },
  { ipaPhoneme: "θl", graphemeSequences: ["thl"] },
  { ipaPhoneme: "ʃl", graphemeSequences: ["sl"] },
  // { ipaPhoneme: 'vl', graphemeSequences: ['vl'] },
  { ipaPhoneme: "fr", graphemeSequences: ["fr"] },
  { ipaPhoneme: "θr", graphemeSequences: ["thr"] },
  { ipaPhoneme: "ʃr", graphemeSequences: ["shr"] },
  // { ipaPhoneme: 'hw', graphemeSequences: ['w'] },
  { ipaPhoneme: "sw", graphemeSequences: ["sw"] },
  // { ipaPhoneme: 'θw', graphemeSequences: ['thw'] },
  // { ipaPhoneme: 'vw', graphemeSequences: ['vw'] },
];

// const consonantsPlusj = []

const sPlusVoicelessStop: ISyllableSegment[] = [
  { ipaPhoneme: "sp", graphemeSequences: ["sp"] },
  { ipaPhoneme: "st", graphemeSequences: ["st"] },
  { ipaPhoneme: "sk", graphemeSequences: ["sk"] },
];

const sPlusNasalOtherThanŋ: ISyllableSegment[] = [
  { ipaPhoneme: "sm", graphemeSequences: ["sm"] },
  { ipaPhoneme: "sn", graphemeSequences: ["sn"] },
];

const sPlusVoicelessFricative: ISyllableSegment[] = [
  { ipaPhoneme: "sf", graphemeSequences: ["sph"] },
  // { ipaPhoneme: 'sθ', graphemeSequences: ['sth'] },
];

const sPlusVoicelessStopPlusApproximant: ISyllableSegment[] = [
  { ipaPhoneme: "spl", graphemeSequences: ["spl"] },
  { ipaPhoneme: "skl", graphemeSequences: ["scl"] },
  { ipaPhoneme: "spr", graphemeSequences: ["spr"] },
  { ipaPhoneme: "str", graphemeSequences: ["str"] },
  { ipaPhoneme: "skr", graphemeSequences: ["scr"] },
  // { ipaPhoneme: 'skw', graphemeSequences: ['squ'] },
  // { ipaPhoneme: 'smj', graphemeSequences: ['sme'] },
  // { ipaPhoneme: 'spj', graphemeSequences: ['spe'] },
  // { ipaPhoneme: 'stj', graphemeSequences: ['st'] },
  // { ipaPhoneme: 'skj', graphemeSequences: ['ske'] },
];

// const sPlusVoicelessFricativePlusApproximant = [];

/**
 * The onset structures were take from the wikipedia article on English phonology.
 * @see https://en.wikipedia.org/wiki/English_phonology#Onset
 */
const onset: ISyllableSegment[] = [
  ...singleConsonantPhonemesExceptŋ,
  ...stopPlusApproximantOtherThanj,
  ...voicelessFricativeOtherThanj,
  ...sPlusVoicelessStop,
  ...sPlusNasalOtherThanŋ,
  ...sPlusVoicelessFricative,
  ...sPlusVoicelessStopPlusApproximant,
];

export default onset;
