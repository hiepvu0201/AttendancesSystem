import express from 'express';
const app = express();
const port = process.env.PORT||5000;

import departmentRoutes from './src/routes/DepartmentRoutes';
import userRoutes from './src/routes/UserRoutes';
import shiftRoutes from './src/routes/ShiftRoutes';
import payslipRoutes from './src/routes/PayslipRoutes';
import attendanceRoutes from './src/routes/AttendanceRoutes';
import roleRoutes from './src/routes/RoleRoutes';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    //bodyparser setup
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

departmentRoutes(app);
userRoutes(app);
shiftRoutes(app);
payslipRoutes(app);
attendanceRoutes(app);
roleRoutes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${port}`)
)
app.listen(port, () =>
    console.log(`Your server is running on port ${port}`))