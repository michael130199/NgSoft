export class UserClass {
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string
    ) {}


};

export interface User {
    _id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    role: string,
    image: string
};
