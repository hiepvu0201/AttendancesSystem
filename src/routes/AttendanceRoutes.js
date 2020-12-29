import { addNewAttendance, getAttendances, getAttendanceWithId, updateAttendance, deleteAttendance ,checkOut} from '../controllers/AttendancesController.js';

const routes = (app) => {
    app.route('/attendances')
        .get(getAttendances)
        .post(addNewAttendance);
    app.route('/attendances/:attendanceId')
        .get(getAttendanceWithId)
        .put(updateAttendance)
        .delete(deleteAttendance);
    app.route('/attendances/checkout/:id').post(checkOut);

    
}

export default routes;