import { addNewPayslip, getPayslips, getPayslipWithId, updatePayslip, deletePayslip } from '../controllers/PayslipsController';

const routes = (app) => {
    app.route('/payslips')
        .get(getPayslips)
        .post(addNewPayslip);
    app.route('/payslips/:payslipId')
        .get(getPayslipWithId)
        .put(updatePayslip)
        .delete(deletePayslip);
}

export default routes;