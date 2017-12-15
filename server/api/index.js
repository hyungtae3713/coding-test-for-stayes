import express from 'express';
import v10 from './v1.0';

const router = express.Router();
const API = {
  '1.0': v10
};
const CURRENT_VERSION = '1.0';

router.use(`/v${CURRENT_VERSION}`, API[CURRENT_VERSION]);

export default router;