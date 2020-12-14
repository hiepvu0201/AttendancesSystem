import { addNewUser, getUsers, getUserWithId, updateUser, deleteUser } from '../controllers/UsersController';

const routes = (app) => {
    app.route('/users')
        .get(getUsers)
        .post(addNewUser);
    app.route('/users/:userId')
        .get(getUserWithId)
        .put(updateUser)
        .delete(deleteUser);
}

export default routes;