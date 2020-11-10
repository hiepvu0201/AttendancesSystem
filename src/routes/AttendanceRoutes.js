import { addNewAttendance, getAttendances, getAttendanceWithId, updateAttendance, deleteAttendance } from '../controllers/AttendancesController';

const routes = (app) => {
    app.route('/Attendances')
        .get(getAttendances)
        .post(addNewAttendance);
    app.route('/Attendances/:AttendanceId')
        .get(getAttendanceWithId)
        .put(updateAttendance)
        .delete(deleteAttendance);
}

export default routes;