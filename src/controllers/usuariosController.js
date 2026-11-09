import { usuarios } from '../data/usuarios.js';

export function listarUsuarios(req, res) {
    res.json(usuarios);
}

export function buscarUsuarioPorId(req, res) {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
}