import { addNewDepartment, getDepartments, getDepartmentWithId, updateDepartment, deleteDepartment } from '../controllers/DepartmentsController';

const routes = (app) => {
    app.route('/departments')
        .get(GetDepartments)
        .post(AddNewDepartment);
    app.route('/departments/:departmentId')
        .get(GetDepartmentWithId)
        .put(UpdateDepartment)
        .delete(DeleteDepartment);
}

export default routes;