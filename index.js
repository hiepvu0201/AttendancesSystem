import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import departmentRoutes from './src/routes/DepartmentRoutes.js';
import userRoutes from './src/routes/UserRoutes.js'; 
import shiftRoutes from './src/routes/ShiftRoutes.js';
import payslipRoutes from './src/routes/PayslipRoutes.js';
import attendanceRoutes from './src/routes/AttendanceRoutes.js';
import roleRoutes from './src/routes/RoleRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
dotenv.config();
const app = express();
const PORT = process.env.PORT||5000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    //bodyparser setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

departmentRoutes(app);
userRoutes(app);
shiftRoutes(app);
payslipRoutes(app);
attendanceRoutes(app);
roleRoutes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
)
app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`))