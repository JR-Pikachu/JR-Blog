export class User {
    id: number;
    username: string;
    email: string;
    password: String;
    plainPassword: String;
    passwordRepeat: String;
    rank: number;

    /* NOT NEED ?
    constructor(id: number, username: string, email: string, plainPassword: string, rank: number) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.plainPassword = plainPassword;
        this.rank = rank;
    }*/
}

/* NOTE : RANK
0 : default - user
1 : admin
2 : main admin
*/

// let UserEvoli: User;
// let UserPyroli: User;

// UserEvoli = new User(1, 'Evoli', 'evoli@gmail.com', '123', '123', 1);
// UserPyroli = new User(1, 'Pyroli', 'pyroli@gmail.com', '123', 0);


// export let tabUser: Array<User> = [];
// tabUser.push(UserEvoli, UserPyroli);

