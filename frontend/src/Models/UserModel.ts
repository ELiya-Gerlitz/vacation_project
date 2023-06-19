class UserModel{
    public userId: number
    public firstName: string
    public lastName: string
    public email: string
    public password: string
    public role: string


public static firstNameValidation = {
    required: {value: true, message: "firstName is required"},
    minLength: {value: 4, message: "at least 2 characters required!"},
    maxlength: {value: 100, message: "not over 100 characters!"},
}

public static lastNameValidation = {
    required: {value: true, message: "last Name required!"},
    minLength: {value: 4, message: "at least 2 characters required!"},
    maxLength: {value: 100, message: "not over 100 characters!"},
}

public static emailValidation = {
    required:{value: true, message: "email required!"},
    minLength:{value: 4, message: "email has to be longer than 2 characters!"},
    maxLength:{value: 200, message: "too long email!"},
}

public static passwordValidation = {
    required:{value: true, message: "password required!"},
    minLength:{value: 4, message: "password has to be longer than 2 characters!"},
    maxLength:{value: 200, message: "too long password!"},
}
}

export default UserModel