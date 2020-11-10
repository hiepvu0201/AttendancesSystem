import { addNewRole, getRoles, getRoleWithId, updateRole, deleteRole } from '../controllers/RolesController';

const routes = (app) => {
    app.route('/roles')
        .get(getRoles)
        .post(addNewRole);
    app.route('/roles/:roleId')
        .get(getRoleWithId)
        .put(updateRole)
        .delete(deleteRole);
}

export default routes;