import { Request, Response } from "express";
const WordService = require("../services/word/WordService");

exports.word_detail = async (_: Request, res: Response) => {
  const word = WordService.getNext();
  res.status(200).json(word);
};
