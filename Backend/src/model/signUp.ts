import { Request } from "express"

enum roleType  {
    User = "User",
    Admin = "Admin"
}

export interface signUp {
    username : string,
    email : string,
    password : string,
    dateOfBirth : Date
    role : roleType 
}

export type customRequest = Request & {
    validationSignUp? : signUp
}

export type requestControl = Request & {
    validationSignUp : signUp
}