import { addNewShift, getShifts, getShiftWithId, updateShift, deleteShift } from '../controllers/ShiftsController';

const routes = (app) => {
    app.route('/Shifts')
        .get(getShifts)
        .post(addNewShift);
    app.route('/Shifts/:ShiftId')
        .get(getShiftWithId)
        .put(updateShift)
        .delete(deleteShift);
}

export default routes;