import { addNewDepartment, getDepartments, getDepartmentWithId, updateDepartment, deleteDepartment } from '../controllers/DepartmentsController.js';

const routes = (app) => {
    app.route('/departments')
        .get(getDepartments)
        .post(addNewDepartment);
    app.route('/departments/:departmentId')
        .get(getDepartmentWithId)
        .put(updateDepartment)
        .delete(deleteDepartment);
}

export default routes;