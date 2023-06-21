import joi from "joi"
class CredentialsModel{
    public email: string
    public password: string

    public constructor( Credentials:CredentialsModel){
        this.email = Credentials.email
        this.password = Credentials.password
    }

    public static validationScheme= joi.object({
        email: joi.string().email().min(4).max(250).required(),
        password: joi.string().min(4).max(300).required()
    })

    public validate():string{
        const result = CredentialsModel.validationScheme.validate(this)
        return result.error?.message
    }
}
export default CredentialsModel
