import { addNewAttendance, getAttendances, getAttendanceWithId, updateAttendance, deleteAttendance } from '../controllers/AttendancesController';

const routes = (app) => {
    app.route('/attendances')
        .get(getAttendances)
        .post(addNewAttendance);
    app.route('/attendances/:attendanceId')
        .get(getAttendanceWithId)
        .put(updateAttendance)
        .delete(deleteAttendance);
}

export default routes;