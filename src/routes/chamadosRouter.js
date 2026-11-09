import { Router } from 'express';
import { listarUsuarios, buscarUsuarioPorId } from '../controllers/usuariosController';

const router = Router();

router.get('/usuarios', listarUsuarios);
router.get('/usuarios/:id', buscarUsuarioPorId);

export default router;