import joi from "joi"
import RoleModel from "./RoleModel"
class UserModel{
    public userId: number
    public firstName: string
    public lastName: string
    public email: string
    public password: string
    public role: RoleModel
    // public username: string

    public constructor( user:UserModel ) {
        this.userId= user.userId
        this.firstName= user.firstName
        this.lastName= user.lastName
        this.email= user.email
        this.password= user.password
        this.role= user.role
        // this.username= user.username
    }

    public static validationScheme= joi.object({
        firstName: joi.string().min(2).max(100).required(),
        lastName: joi.string().min(2).max(100).required(),
        email: joi.string().email().max(225).required(),
        password: joi.string().min(4).max(19).required(),
        role: joi.string().min(2).max(19).required(),
        // username: joi.string().min(4).max(200).required()

    })

    public validate():string{
        const result= UserModel.validationScheme.validate(this)
        return result.error?.message
    }

}
export default UserModel