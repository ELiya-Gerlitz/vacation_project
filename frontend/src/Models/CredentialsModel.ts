class CredentialsModel{
       // public username: string
       public email: string
       public password: string
   
//        public static usernameValidation={
//            required:{value: true, message: "username required!"},
//            minLength:{value: 4, message: "username has to be longer than 2 characters!"},
//            maxLength:{value: 50, message: "too long username!"},
//     }

public static emailValidation = {
       required:{value: true, message: "email required!"},
       minLength:{value: 4, message: "email has to be longer than 2 characters!"},
       maxLength:{value: 200, message: "too long email!"},
   }
   
   
    public static passwordValidation={
           required:{value: true, message: "password required!"},
           minLength:{value: 4, message: "password has to be longer than 2 characters!"},
           maxLength:{value: 250, message: "too long password!"},
    }
   }
   
   export default CredentialsModel