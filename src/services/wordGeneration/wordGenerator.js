import onsetList from "./onset";
import nucleusList from "./nucleus";
import codaList from "./coda";


const wordGenerator = {
  numOfOnsets: onsetList.length,
  numOfNucleus: nucleusList.length,
  numOfCoda: codaList.length,
  randIntMax(maxNum) {
    return Math.floor(Math.random() * maxNum);
  },
  randOnset() {
    return onsetList[this.randIntMax(this.numOfOnsets)];
  },
  randNucleus() {
    return nucleusList[this.randIntMax(this.numOfNucleus)];
  },
  randCoda() {
    return codaList[this.randIntMax(this.numOfCoda)];
  },
  getNext() {
    const onset = this.randOnset();
    const nucleus = this.randNucleus();
    const coda = this.randCoda();
    const syllable = [onset, nucleus, coda];

    const pronunciation = `/${syllable.map(s => s.ipaPhoneme).join('')}/`;
    const writting = `${syllable.map(s => s.graphemeSequences).join('')}`;
    return { pronunciation, writting };
  },
};

export default wordGenerator;
