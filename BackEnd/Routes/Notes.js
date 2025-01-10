import express from 'express';
import { Create, DeleteNotes,GetNotes, UpdateNotes } from '../Controllers/Notes.js';
import { Verificationtoken } from '../middlewares/Verificationtoken.js';

const NotesRoutes=express.Router();

NotesRoutes.post('/createnote',Verificationtoken,Create)
NotesRoutes.put('/updateNotes/:id',Verificationtoken,UpdateNotes)
NotesRoutes.delete('/deleteNotes/:id',Verificationtoken,DeleteNotes)
NotesRoutes.get('/getNotes',Verificationtoken,GetNotes)
export default NotesRoutes;