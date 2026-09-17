import express from "express"
import ControllerExercicio from '../controller/exercicio.js'

const router = express.Router()

router.get('/api/lista', ControllerExercicio.Lista );

router.post('/api/cf', ControllerExercicio.CF );

router.post('/api/fc', ControllerExercicio.FC );

router.post('/api/ck', ControllerExercicio.CK);

export default router