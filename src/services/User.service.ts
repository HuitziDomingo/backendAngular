import { UsersInterface } from "../interfaces/Users.interface"
import UserModel from "../models/User"

export class User {


    static async getUsers() {
        let responseInsert = await UserModel.find()
        return responseInsert
    }


    static async createUsers(user: UsersInterface) {
        let response = await UserModel.create(user)
        return response
    }


}