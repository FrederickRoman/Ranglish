const allConsonantPhonemesButhwj = [
    { ipaPhoneme: 'p', graphemeSequences: ['p'] },
    { ipaPhoneme: 'b', graphemeSequences: ['b'] },
    { ipaPhoneme: 't', graphemeSequences: ['t'] },
    { ipaPhoneme: 'd', graphemeSequences: ['d'] },
    { ipaPhoneme: 'k', graphemeSequences: ['k'] },
    { ipaPhoneme: 'ɡ', graphemeSequences: ['g'] },
    { ipaPhoneme: 'tʃ', graphemeSequences: ['ch'] },
    { ipaPhoneme: 'dʒ', graphemeSequences: ['dge'] },
    { ipaPhoneme: 'f', graphemeSequences: ['f'] },
    { ipaPhoneme: 'v', graphemeSequences: ['v'] },
    { ipaPhoneme: 'θ', graphemeSequences: ['th'] },
    { ipaPhoneme: 'ð', graphemeSequences: ['th'] },
    { ipaPhoneme: 's', graphemeSequences: ['s'] },
    { ipaPhoneme: 'z', graphemeSequences: ['z'] },
    { ipaPhoneme: 'ʃ', graphemeSequences: ['sh'] },
    // { ipaPhoneme: 'ʒ', graphemeSequences: ['g'] },
    { ipaPhoneme: 'm', graphemeSequences: ['m'] },
    { ipaPhoneme: 'n', graphemeSequences: ['n'] },
    // { ipaPhoneme: 'ŋ', graphemeSequences: ['ng'] },
    { ipaPhoneme: 'r', graphemeSequences: ['r'] },
    { ipaPhoneme: 'l', graphemeSequences: ['l'] },
]

const lateralApproximantPlusStopOrAffricate = [
    { ipaPhoneme: 'lp', graphemeSequences: ['lp'] },
    { ipaPhoneme: 'lb', graphemeSequences: ['lb'] },
    { ipaPhoneme: 'lt', graphemeSequences: ['lt'] },
    { ipaPhoneme: 'ld', graphemeSequences: ['ld'] },
    { ipaPhoneme: 'ltʃ', graphemeSequences: ['lch'] },
    { ipaPhoneme: 'ldʒ', graphemeSequences: ['lge'] },
    { ipaPhoneme: 'lk', graphemeSequences: ['lk'] },
];

const rPlusStopOrFricatives = [
    { ipaPhoneme: 'rp', graphemeSequences: ['rp'] },
    { ipaPhoneme: 'rb', graphemeSequences: ['rb'] },
    { ipaPhoneme: 'rt', graphemeSequences: ['rt'] },
    { ipaPhoneme: 'rd', graphemeSequences: ['rd'] },
    { ipaPhoneme: 'rtʃ', graphemeSequences: ['rch'] },
    // { ipaPhoneme: 'rdʒ', graphemeSequences: ['rge'] },
    // { ipaPhoneme: 'rɡ', graphemeSequences: ['rgue'] },
];

const lateralPlusFricative = [
    { ipaPhoneme: 'lf', graphemeSequences: ['lf'] },
    { ipaPhoneme: 'lv', graphemeSequences: ['lve'] },
    { ipaPhoneme: 'lθ', graphemeSequences: ['lth'] },
    { ipaPhoneme: 'ls', graphemeSequences: ['lse'] },
    { ipaPhoneme: 'lz', graphemeSequences: ['lls'] },
    { ipaPhoneme: 'lʃ', graphemeSequences: ['lsh'] },
];

const rPlusFricative = [
    { ipaPhoneme: 'rf', graphemeSequences: ['rf'] },
    { ipaPhoneme: 'rv', graphemeSequences: ['rve'] },
    { ipaPhoneme: 'rθ', graphemeSequences: ['rth'] },
    { ipaPhoneme: 'rð', graphemeSequences: ['rth'] },
    { ipaPhoneme: 'rs', graphemeSequences: ['rce'] },
    { ipaPhoneme: 'rz', graphemeSequences: ['rs'] },
    { ipaPhoneme: 'rʃ', graphemeSequences: ['rsh'] },
];

const lateralApproximantPlusNasal = [
    { ipaPhoneme: 'lm', graphemeSequences: ['lm'] },
    { ipaPhoneme: 'ln', graphemeSequences: ['ln'] },
];

const rNasalOrLateral = [
    { ipaPhoneme: 'rm', graphemeSequences: ['rm'] },
    { ipaPhoneme: 'rn', graphemeSequences: ['rn'] },
    { ipaPhoneme: 'rl', graphemeSequences: ['rl'] },
];

const nasalPlusHomorganicStopOrAffricative = [
    { ipaPhoneme: 'mp', graphemeSequences: ['mp'] },
    { ipaPhoneme: 'nt', graphemeSequences: ['nt'] },
    { ipaPhoneme: 'nd', graphemeSequences: ['nd'] },
    { ipaPhoneme: 'ntʃ', graphemeSequences: ['nch'] },
    { ipaPhoneme: 'ndʒ', graphemeSequences: ['nge'] },
    { ipaPhoneme: 'ŋk', graphemeSequences: ['nk'] },
];

const nasalPlusFricative = [
    { ipaPhoneme: 'mf', graphemeSequences: ['mph'] },
    // { ipaPhoneme: 'ms', graphemeSequences: ['mse'] },
    { ipaPhoneme: 'mθ', graphemeSequences: ['mth'] },
    // { ipaPhoneme: 'nf', graphemeSequences: ['nf'] },
    { ipaPhoneme: 'nθ', graphemeSequences: ['mth'] },
    { ipaPhoneme: 'ns', graphemeSequences: ['nce'] },
    { ipaPhoneme: 'nz', graphemeSequences: ['nze'] },
    { ipaPhoneme: 'ŋθ', graphemeSequences: ['ngth'] },
];

const voicelessFricativePlusVoicelessStop = [
    { ipaPhoneme: 'ft', graphemeSequences: ['ft'] },
    { ipaPhoneme: 'sp', graphemeSequences: ['sp'] },
    { ipaPhoneme: 'st', graphemeSequences: ['st'] },
    { ipaPhoneme: 'sk', graphemeSequences: ['sk'] },
];

const twoVoicelessFricatives = [
    { ipaPhoneme: 'fθ', graphemeSequences: ['fth'] },
];

const twoVoicelessStops = [
    { ipaPhoneme: 'pt', graphemeSequences: ['pt'] },
    { ipaPhoneme: 'kt', graphemeSequences: ['ct'] },
];

const stopPlusFricative = [
    { ipaPhoneme: 'pθ', graphemeSequences: ['pth'] },
    { ipaPhoneme: 'ps', graphemeSequences: ['pse'] },
    // { ipaPhoneme: 'tθ', graphemeSequences: ['th'] },
    { ipaPhoneme: 'ts', graphemeSequences: ['ts'] },
    { ipaPhoneme: 'dθ', graphemeSequences: ['dth'] },
    // { ipaPhoneme: 'dz', graphemeSequences: ['dze'] },
    { ipaPhoneme: 'ks', graphemeSequences: ['x'] },
];

const lateralApproximantPlusTwoConsonants = [
    { ipaPhoneme: 'lpt', graphemeSequences: ['lpt'] },
    { ipaPhoneme: 'lps', graphemeSequences: ['lps'] },
    { ipaPhoneme: 'lfθ', graphemeSequences: ['lfth'] },
    // { ipaPhoneme: 'lts', graphemeSequences: ['ltz'] },
    { ipaPhoneme: 'lst', graphemeSequences: ['lst'] },
    // { ipaPhoneme: 'lkt', graphemeSequences: ['lct'] },
    { ipaPhoneme: 'lks', graphemeSequences: ['lx'] },
];

const rTwoConsonants = [
    { ipaPhoneme: 'rmθ', graphemeSequences: ['rmth'] },
    { ipaPhoneme: 'rpt', graphemeSequences: ['rpt'] },
    { ipaPhoneme: 'rps', graphemeSequences: ['rpse'] },
    { ipaPhoneme: 'lks', graphemeSequences: ['lx'] },
    { ipaPhoneme: 'rts', graphemeSequences: ['rtz'] },
    { ipaPhoneme: 'rst', graphemeSequences: ['rst'] },
    { ipaPhoneme: 'rkt', graphemeSequences: ['rct'] },
];

const NasalHomorganicStopPlusStopOrFricative = [
    { ipaPhoneme: 'mpt', graphemeSequences: ['mpt'] },
    { ipaPhoneme: 'mps', graphemeSequences: ['mpse'] },
    { ipaPhoneme: 'ndθ', graphemeSequences: ['ndth'] },
    { ipaPhoneme: 'ŋkt', graphemeSequences: ['nct'] },
    { ipaPhoneme: 'ŋks', graphemeSequences: ['nx'] },
    // { ipaPhoneme: 'ŋkθ', graphemeSequences: ['ngth'] },
];

const threeObstruents = [
    { ipaPhoneme: 'ksθ', graphemeSequences: ['xth'] },
    { ipaPhoneme: 'kst', graphemeSequences: ['xt'] },
];

const coda = [
    ...allConsonantPhonemesButhwj,
    ...lateralApproximantPlusStopOrAffricate,
    ...rPlusStopOrFricatives,
    ...lateralPlusFricative,
    ...rPlusFricative,
    ...lateralApproximantPlusNasal,
    ...rNasalOrLateral,
    ...nasalPlusHomorganicStopOrAffricative,
    ...nasalPlusFricative,
    ...voicelessFricativePlusVoicelessStop,
    ...twoVoicelessFricatives,
    ...twoVoicelessStops,
    ...stopPlusFricative,
    ...lateralApproximantPlusTwoConsonants,
    ...rTwoConsonants,
    ...NasalHomorganicStopPlusStopOrFricative,
    ...threeObstruents
];

export default coda;