import express, { Router } from 'express';
import { SuperheroController } from '../controllers/SuperheroController';

const router: Router = express.Router();

router.get('/superhero',SuperheroController.getSuperhero);



export default router;