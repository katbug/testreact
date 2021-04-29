import express, { Router } from 'express';

import { index } from './controllers/anxieties';

const router = Router();

router.route('/anxieties.json')
    .get(index);

export default router;

