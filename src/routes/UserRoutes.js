import { addNewUser, getUsers, getUserWithId, updateUser, deleteUser, loginUser, registerUser, tokenIsValid} from '../controllers/UsersController.js';
import {auth} from '../../middleware/auth.js'

const routes = (app) => {
    app.route('/users')
        .get(auth, getUsers)
        .post(auth, addNewUser)
    app.route('/users/:userId')
        .get(auth, getUserWithId)
        .put(auth, updateUser)
        .delete(auth, deleteUser)
    app.route('/users/login').post(loginUser)
    app.route('/users/register').post(registerUser)
    app.route('/users/tokenisvalid').post(tokenIsValid)
}

export default routes;