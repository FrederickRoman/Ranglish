import { Request, Response } from "express";
import IWord from "../../types/interfaces/IWord";
import WordService from "../services/word/WordService";

class wordController {
  static word_detail(_: Request, res: Response): void {
    const word: IWord = WordService.getNext();
    res.status(200).json(word);
  }
}

export default wordController;
