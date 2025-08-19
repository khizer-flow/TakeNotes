import express from 'express';
const router = express.Router();
import { getNotes, createNotes, updateNotes, deleteNotes } from '../controllers/notesController.js';

// Define routes for notes
// GET /api/notes

router.get('/', getNotes);
router.post('/',createNotes);
router.put('/:id', updateNotes );
router.delete('/:id',deleteNotes);







export default router;