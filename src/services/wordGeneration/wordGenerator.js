const wordGenerator = {
  getNext() {
    return {
      pronunciation: "Ranglish",
      writing: `Ranglish${["a", "b"][Math.round(Math.random())]}`,
    };
  },
};

export default wordGenerator;
