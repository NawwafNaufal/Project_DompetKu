enum roleType  {
    User = "User",
    Admin = "Admin"
}

export interface signUp {
    username : string,
    email : string,
    password : string,
    dateOfBirth : Date
    role : roleType.User
}
