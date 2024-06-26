import { Router } from "express"
import { Users } from '../controllers/Users.controller'
import { check } from "express-validator"
import { ValidateFields } from "../middlewares/validate-fields"

const router = Router()

router.get('/users', Users.getUsers)
router.post('/users', [
    check('name', "El nombre es obligatorio.").not().isEmpty(),
    check('password', "El password es obligatorio.").not().isEmpty(),
    check('email', "El email es obligatorio.").isEmail(),
    ValidateFields.validateFields
], Users.createUser)
router.put('/users/:id',
    check('name', "El nombre es obligatorio.").not().isEmpty(),
    check('role', "El role es obligatorio.").not().isEmpty(),
    check('email', "El email es obligatorio.").isEmail(),
    Users.updateUser)
router.delete('/users/:id', Users.deleteUser)

export default router