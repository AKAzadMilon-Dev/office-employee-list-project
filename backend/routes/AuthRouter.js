import express from 'express';
import AuthModel from '../models/UserModel.js';
import RegisController from '../controller/AuthController.js'

const AuthRouter = express.Router()

AuthRouter.post('/register', RegisController)

export default AuthRouter