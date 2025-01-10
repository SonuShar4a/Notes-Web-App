import express from 'express';
import { Login, Logout, Register } from '../Controllers/Auth.js';

const AutRoutes=express.Router();

AutRoutes.post('/register',Register)
AutRoutes.post('/login',Login)
AutRoutes.post('/logout',Logout)

export default AutRoutes;