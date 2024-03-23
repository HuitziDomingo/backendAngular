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
            Errors.handleHTTP(res, 'ERROR inesperado al listar usuarios.', error)
        }
    }


    static async createUser(req: Request, res: Response) {
        try {
            let userExist = await UserModel.findOne<UsersInterface>({ email: req.body.email })
            if (userExist)
                return Errors.handleHTTP(res, 'El usuario ya existe.')
            else {

                let user = await User.createUsers(req.body)
                return res.send(user)
            }

        } catch (error) {
            return Errors.handleHTTP(res, 'ERROR insesperado al crear el usuario.', error)
        }
    }


    static async updateUser(req: Request, res: Response) {
        try {
            let user = req.params.id
            res.json({
                user,
                ok: true,
            })
        } catch (error) {
            return Errors.handleHTTP(res, 'ERROR inesperado al actualizar usuario.', error)
        }
    }


    static async deleteUser(req: Request, res: Response) {
        try {
            console.log('delete')
            User.deleteUser()
        } catch (error) {
            return Errors.handleHTTP(res, 'ERROR inesperado al eliminar usuario.', error)
        }
    }


}