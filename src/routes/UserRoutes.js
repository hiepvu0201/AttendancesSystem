import { addNewUser, getUsers, getUserWithId, updateUser, deleteUser } from '../controllers/UsersController';

const routes = (app) => {
    app.route('/Users')
        .get(getUsers)
        .post(addNewUser);
    app.route('/Users/:UserId')
        .get(getUserWithId)
        .put(updateUser)
        .delete(deleteUser);
}

export default routes;