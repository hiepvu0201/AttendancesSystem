import { addNewAttendance, getAttendances, getAttendanceWithId, updateAttendance, deleteAttendance } from '../controllers/AttendancesController';

const routes = (app) => {
    app.route('/attendances')
        .get(GetAttendances)
        .post(AddNewAttendance);
    app.route('/attendances/:attendanceId')
        .get(GetAttendanceWithId)
        .put(UpdateAttendance)
        .delete(DeleteAttendance);
}

export default routes;