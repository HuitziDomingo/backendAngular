import { Schema, Types, model, Model } from "mongoose"
import { UsersInterface } from '../interfaces/Users.interface'

const UserSchema = new Schema<UsersInterface>(
    {
        name: {
            required: true,
            type: String,
        },
        password: {
            required: true,
            type: String,
        },
        email: {
            required: true,
            unique: true,
            type: String,
        },
        img: {
            type: String,
        },
        role: {
            required: true,
            default: 'USER_ROLE',
            type: String,
        },
        google: {
            default: false,
            type: Boolean,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
)

UserSchema.method('toJSON', function () {
    const { _id, password, ...object } = this.toObject()
    object.uid = _id
    return object
})

const UserModel = model('user', UserSchema)
export default UserModel