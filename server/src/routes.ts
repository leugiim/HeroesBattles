import express from 'express';
import users from './routes/users';

const router = express.Router();

router.use(users);

export default router;