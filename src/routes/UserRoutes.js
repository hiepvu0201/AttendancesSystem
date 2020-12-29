import { addNewUser, getUsers, getUserWithId, updateUser, deleteUser, loginUser, registerUser, tokenIsValid} from '../controllers/UsersController.js';
import {auth} from '../../middleware/auth.js'

const routes = (app) => {
    app.route('/users')
        .get(getUsers)
        .post(addNewUser)
    app.route('/users/:userId')
        .get(getUserWithId)
        .put(updateUser)
        .delete(auth, deleteUser)
    app.route('/users/login').post(loginUser)
    app.route('/users/register').post(registerUser)
    app.route('/users/tokenisvalid').post(tokenIsValid)
}

export default routes;