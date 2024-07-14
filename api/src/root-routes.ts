import express, { Request, Response } from 'express';
import { core } from '@tscc/core';
import { userRoutes } from './modules/user';
const router = express.Router();

router.use('/users', userRoutes);

router.use('/', (req: Request, res: Response) => {
  res.json({ message: 'Home' + core() });
});

export default router;
