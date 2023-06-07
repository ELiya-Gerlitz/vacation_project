class CredentialsModel{
       public username: string
       public password: string
   
       public static usernameValidation={
           required:{value: true, message: "username required!"},
           minLength:{value: 4, message: "username has to be longer than 2 characters!"},
           maxLength:{value: 15, message: "too long username!"},
    }
   
    public static passwordValidation={
           required:{value: true, message: "password required!"},
           minLength:{value: 4, message: "password has to be longer than 2 characters!"},
           maxLength:{value: 250, message: "too long password!"},
    }
   }
   
   export default CredentialsModel