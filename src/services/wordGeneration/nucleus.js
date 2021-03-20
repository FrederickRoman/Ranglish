// General American
const allVowelSounds = [
    { ipaPhoneme: 'ɪ', graphemeSequences: ['i'] },
    { ipaPhoneme: 'i', graphemeSequences: ['ee'] },
    { ipaPhoneme: 'ʊ', graphemeSequences: ['u'] },
    { ipaPhoneme: 'u', graphemeSequences: ['oo'] },
    { ipaPhoneme: 'ɛ', graphemeSequences: ['e'] },
    // { ipaPhoneme: 'eɪ', graphemeSequences: ['a'] },
    { ipaPhoneme: 'ə', graphemeSequences: ['e'] },
    { ipaPhoneme: 'oʊ', graphemeSequences: ['o'] },
    { ipaPhoneme: 'æ', graphemeSequences: ['a'] },
    { ipaPhoneme: 'ʌ', graphemeSequences: ['u'] },
    { ipaPhoneme: 'ɑ', graphemeSequences: ['o'] },
    // { ipaPhoneme: 'aɪ ', graphemeSequences: ['i'] },
    { ipaPhoneme: 'ɔɪ', graphemeSequences: ['oi'] },
    { ipaPhoneme: 'aʊ', graphemeSequences: ['ow'] },
]

const nucleus = [...allVowelSounds];

export default nucleus;