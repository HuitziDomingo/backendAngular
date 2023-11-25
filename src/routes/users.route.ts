import { Router } from "express"
import { Users } from '../controllers/Users.controller'

const router = Router()

router.get('/users', Users.getUsers)
router.post('/users', Users.createUser)

export default router