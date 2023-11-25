import { Users } from "../interfaces/Users.interface"
import UserModel from "../models/User"

export class User {


    static async getUsers() {
        let responseInsert = await UserModel.find()
        return responseInsert
    }


    static async createUsers(user: Users) {
        let response = await UserModel.create(user)
        return response
    }



}