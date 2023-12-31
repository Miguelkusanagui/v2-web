import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import path from 'path';
import { fileURLToPath } from 'url';

import paymentRoutes from "./routes/payment.routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(morgan ('dev'))

app.use(paymentRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
console.log("Server on port", PORT);
console.log(__dirname);