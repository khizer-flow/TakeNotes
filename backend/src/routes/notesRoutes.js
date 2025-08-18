import express from 'express';
const router = express.Router();
import { getNotes } from '../../controllers/notesController.js';
import { createNotes } from '../../controllers/notesController.js';
import { updateNotes } from '../../controllers/notesController.js';
import { deleteNotes } from '../../controllers/notesController.js';

// Define routes for notes
// GET /api/notes

router.get('/', getNotes);
router.post('/',createNotes);
router.put('/:id', updateNotes );
router.delete('/:id',deleteNotes);






export default router;