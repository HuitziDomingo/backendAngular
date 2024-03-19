import { hashSync, compare, genSaltSync } from "bcryptjs"

export class Bcrypt {

    public static encrypt(password: string) {
        let salt = genSaltSync()
        let passwordHash = hashSync(password, salt)
        return passwordHash
    }


}