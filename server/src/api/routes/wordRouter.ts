import express from 'express';
import word_controller from '../controllers/wordController';

const router = express.Router();

// const urlencodedParser = express.urlencoded({ extended: false });

router.route('/')
    // .all(urlencodedParser)
    .get(word_controller.word_detail);

export default router;




