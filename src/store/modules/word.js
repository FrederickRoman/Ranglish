import axios from "axios";

// import { WORD_STATE } from "@/store/state-types.js";
import { SET_WORD } from "@/store/mutation-types.js";
import { FETCH_WORD } from "@/store/action-types.js";

const INIT_WORD = Object.freeze({
  writting: "Ranglish",
  pronunciation: "/ɹæŋ ɡlɪʃ/",
});

export default {
  state: {
    word: { ...INIT_WORD },
  },
  getters: {
    initWord: () => ({ ...INIT_WORD }),
    word: (state) => state.word,
  },
  mutations: {
    [SET_WORD]: (state, payload) =>
      (state.word = { ...state.word, ...payload }),
  },
  actions: {
    [FETCH_WORD]: async ({ commit }) => {
      try {
        const URL = "api/word";
        const res = await axios.get(URL);
        const word = await res.data;
        console.log("word", word);
        commit(SET_WORD, word);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
