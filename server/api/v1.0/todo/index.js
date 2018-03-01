import express from 'express';
import * as todoCtrl from './todo.ctrl';

const router = express.Router();

router.post('/', todoCtrl.create);
router.put('/', todoCtrl.update);
router.delete('/:id', todoCtrl.remove);
router.get('/download', todoCtrl.download);
router.get('/', todoCtrl.gets);

module.exports = router;