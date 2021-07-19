import onsetList from "./onset";
import nucleusList from "./nucleus";
import codaList from "./coda";

import ISyllableSegment from "../../../types/interfaces/ISyllableSegment";
import IWord from "../../../types/interfaces/IWord";

const numOfOnsets: number = onsetList.length;
const numOfNucleus: number = nucleusList.length;
const numOfCoda: number = codaList.length;

const randIntMax = (maxNum: number): number =>
  Math.floor(Math.random() * maxNum);

const randOnset = (): ISyllableSegment => onsetList[randIntMax(numOfOnsets)];
const randNucleus = (): ISyllableSegment =>
  nucleusList[randIntMax(numOfNucleus)];
const randCoda = (): ISyllableSegment => codaList[randIntMax(numOfCoda)];

class WordService {
  static getNext(): IWord {
    const onset: ISyllableSegment = randOnset();
    const nucleus: ISyllableSegment = randNucleus();
    const coda: ISyllableSegment = randCoda();
    const syllableSegments: ISyllableSegment[] = [onset, nucleus, coda];

    let phonemeSeq: string = "";
    let graphemeSeq: string = "";
    for (const { ipaPhoneme, graphemeSequences } of syllableSegments) {
      phonemeSeq += ipaPhoneme;
      graphemeSeq += graphemeSequences.join("");
    }
    const pronunciation: string = `/${phonemeSeq}/`;
    const writting: string = `${graphemeSeq}`;
    return { pronunciation, writting };
  }
}

export default WordService;
