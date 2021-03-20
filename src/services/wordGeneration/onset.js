const singleConsonantPhonemesExceptŋ = [
    { ipaPhoneme: 'p', graphemeSequences: ['p'] },
    { ipaPhoneme: 'b', graphemeSequences: ['b'] },
    { ipaPhoneme: 't', graphemeSequences: ['t'] },
    { ipaPhoneme: 'd', graphemeSequences: ['d'] },
    { ipaPhoneme: 'k', graphemeSequences: ['k'] },
    { ipaPhoneme: 'ɡ', graphemeSequences: ['g'] },
    { ipaPhoneme: 'tʃ', graphemeSequences: ['ch'] },
    { ipaPhoneme: 'dʒ', graphemeSequences: ['j'] },
    { ipaPhoneme: 'f', graphemeSequences: ['f'] },
    { ipaPhoneme: 'v', graphemeSequences: ['v'] },
    { ipaPhoneme: 'θ', graphemeSequences: ['th'] },
    { ipaPhoneme: 'ð', graphemeSequences: ['th'] },
    { ipaPhoneme: 's', graphemeSequences: ['s'] },
    { ipaPhoneme: 'z', graphemeSequences: ['z'] },
    { ipaPhoneme: 'ʃ', graphemeSequences: ['sh'] },
    // { ipaPhoneme: 'ʒ', graphemeSequences: ['g'] },
    { ipaPhoneme: 'h', graphemeSequences: ['h'] },
    { ipaPhoneme: 'm', graphemeSequences: ['m'] },
    { ipaPhoneme: 'n', graphemeSequences: ['n'] },
    // { ipaPhoneme: 'ŋ', graphemeSequences: ['ng'] },
    { ipaPhoneme: 'j', graphemeSequences: ['y'] },
    { ipaPhoneme: 'w', graphemeSequences: ['w'] },
    { ipaPhoneme: 'r', graphemeSequences: ['r'] },
    { ipaPhoneme: 'l', graphemeSequences: ['l'] },
]

const stopPlusApproximantOtherThanj = [
    { ipaPhoneme: 'pl', graphemeSequences: ['pl'] },
    { ipaPhoneme: 'bl', graphemeSequences: ['bl'] },
    { ipaPhoneme: 'kl', graphemeSequences: ['kl'] },
    { ipaPhoneme: 'ɡl', graphemeSequences: ['gl'] },
    { ipaPhoneme: 'pr', graphemeSequences: ['pr'] },
    { ipaPhoneme: 'br', graphemeSequences: ['br'] },
    { ipaPhoneme: 'tr', graphemeSequences: ['tr'] },
    { ipaPhoneme: 'dr', graphemeSequences: ['dr'] },
    { ipaPhoneme: 'kr', graphemeSequences: ['kr'] },
    { ipaPhoneme: 'ɡr', graphemeSequences: ['gr'] },
    { ipaPhoneme: 'tw', graphemeSequences: ['tw'] },
    { ipaPhoneme: 'dw', graphemeSequences: ['dw'] },
    { ipaPhoneme: 'ɡw', graphemeSequences: ['gw'] },
    { ipaPhoneme: 'kw', graphemeSequences: ['kw'] },
    { ipaPhoneme: 'pw', graphemeSequences: ['pw'] },
]



const onset = [
    ...singleConsonantPhonemesExceptŋ,
    ...stopPlusApproximantOtherThanj
];

export default onset;