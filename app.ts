import express, { Express, Request, Response } from 'express';
import { db } from './database';
import { serverStart } from "./startServer";
import setCors from "./middlewares/CORS";
import authRouter from './routes/authRoute';
import tasksRoute from "./routes/tasksRoute";
import recordingRoute from './routes/recordingRoute';
import path from 'path';

const app: Express = express();
const { swaggerUi, swaggerSpec } = require('./swagger');

// Маршрут для спецификации в формате JSON
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Redoc
app.get('/redoc', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'redoc.html'));
});

// Redoc-spec JSON (для передачи спецификации в Redoc)
app.get('/redoc-spec', (req: Request, res: Response) => {
  res.json(swaggerSpec);
});

app.use(express.json());
app.use(setCors);
app.use('/auth', authRouter);
app.use('/tasks', tasksRoute);
app.use('/refresh', recordingRoute);

app.get("/", (req: Request, res: Response) => {
  res.send('hello');
});

serverStart(app, db);
