import { Request, Response } from "express"
import { User } from "../services/User.service"
import { Errors } from "../utils/error.handle"
import UserModel from "../models/User"
import { UsersInterface } from "../interfaces/Users.interface"

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
            let userExist = await UserModel.findOne<UsersInterface>({email: body.email})
            if (userExist) 
                return Errors.handleHTTP(res, 'USUARIO_YA_EXISTE')
            else {
                let user = await User.createUsers(body)
                return res.send(user)
            }

        } catch (error) {
            return Errors.handleHTTP(res, 'ERROR_CREATE_USER', error)
        }

    }



}