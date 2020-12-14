import { addNewShift, getShifts, getShiftWithId, updateShift, deleteShift } from '../controllers/ShiftsController';

const routes = (app) => {
    app.route('/shifts')
        .get(GetShifts)
        .post(AddNewShift);
    app.route('/shifts/:shiftId')
        .get(GetShiftWithId)
        .put(UpdateShift)
        .delete(DeleteShift);
}

export default routes;