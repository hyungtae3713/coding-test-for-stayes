import express from 'express';
import * as postCtrl from './post.ctrl';

const router = express.Router();

router.get('/', postCtrl.gets);

module.exports = router;