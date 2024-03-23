import { UsersInterface } from "../interfaces/Users.interface"
import UserModel from "../models/User"
import { Bcrypt } from "../utils/bcrypt.handle"

export class User {


    static async getUsers() {
        let responseInsert = await UserModel.find()
        return responseInsert
    }


    static async createUsers(user: UsersInterface) {
        let passHash = await Bcrypt.encrypt(user.password)
        let response = await UserModel.create({ ...user, password: passHash })
        return response
    }


    static async updateUser(){
        return console.log('updateUser service')
    }


    static async deleteUser(){
        return console.log('deleteUser service')
    }


}