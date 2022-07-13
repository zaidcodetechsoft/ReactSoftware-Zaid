import express from 'express';
import cors from 'cors';
import employee from './routes/employeeRoute.js';
import department from './routes/departmentRoute.js';
import user from './routes/userRoute.js';
import taxes from './routes/taxesRoute.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// const employee = require('./routes/employeeRoute');
// const department = require('./routes/departmentRoute');
app.use('/api',taxes);
app.use('/api',user);
app.use('/api',employee);
app.use('/api',department);

export default app;

// module.exports = app;