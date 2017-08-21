export class LoggedInUser {
    constructor(assess_token: string, username: string, fullname: string, email: string, avatar: string) {
        this.assess_token = assess_token;
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.avatar = avatar;
    }
    public id: string;
    public assess_token: string;
    public username: string;
    public fullname: string;
    public email: string;
    public avatar: string;
}