import { addNewShift, getShifts, getShiftWithId, updateShift, deleteShift } from '../controllers/ShiftsController.js';

const routes = (app) => {
    app.route('/shifts')
        .get(getShifts)
        .post(addNewShift);
    app.route('/shifts/:shiftId')
        .get(getShiftWithId)
        .put(updateShift)
        .delete(deleteShift);
}

export default routes;