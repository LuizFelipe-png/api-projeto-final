import { turmas } from '../data/turmas.js';

export function listarTurmas(req, res) {
    res.json(turmas);
}

export function buscarTurmaPorId(req, res) {
    const id = parseInt(req.params.id);
    const turma = turmas.find(t => t.id === id);
    if (turma) {
        res.json(turma);
    } else {
        res.status(404).json({ error: 'Turma não encontrada' });
    }
}