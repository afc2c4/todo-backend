import express from 'express';
import authRoutes from './routes/auth.routes.js';

export const app = express();

app.use(express.json()); // Middleware para parsear JSON do body
app.use('/auth', authRoutes);