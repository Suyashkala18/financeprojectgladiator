export class Admin{
    id:number;
    username:string;
    password:string;
    constructor(id:number=0,username:string="",password:string=""){
        this.id=id;
        this.username=username;
        this.password=password;
    }
}