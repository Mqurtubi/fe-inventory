interface DataRegister {
  name: string;
  email: string;
  passwordHash: string;
}

interface DataLogin {
  email: string,
  passwordHash : string
}

interface User{
    id:string,
    name:string,
    email:string,
    role: Role
}

interface AuthState{
  user:User | null,
  loading:boolean
}


type Role = "ADMIN" | "STAFF" | "VIEWER"


export type { DataRegister, DataLogin, AuthState };
