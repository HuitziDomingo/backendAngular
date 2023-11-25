import { Request, Response } from "express"
import { User } from "../services/User.service"
import { Errors } from "../utils/error.handle"

export class Users {

    static async getUsers(req: Request, res: Response) {
        try {
            let getUsers = await User.getUsers()
            return res.send(getUsers)
        } catch (error) {
            Errors.handleHTTP(res, 'ERROR_GET_USER', error)
        }
    }


    static async createUser({ body }: Request, res: Response) {
        try {
            let user = await User.createUsers(body)
            res.send(user)
        } catch (error) {
            Errors.handleHTTP(res, 'ERROR_CREATE_USER', error)

        }

    }



}