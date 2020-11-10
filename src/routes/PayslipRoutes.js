import { addNewPayslip, getPayslips, getPayslipWithId, updatePayslip, deletePayslip } from '../controllers/PayslipsController';

const routes = (app) => {
    app.route('/Payslips')
        .get(getPayslips)
        .post(addNewPayslip);
    app.route('/Payslips/:PayslipId')
        .get(getPayslipWithId)
        .put(updatePayslip)
        .delete(deletePayslip);
}

export default routes;