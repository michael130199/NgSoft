export class AnimalClass {
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public year: number,
        public nickname: string,
        public user: string,
        public image: string
    ) {}
}

export interface Animal {
    _id: string,
    name: string,
    description: string,
    year: number,
    nickname: string,
    image: string,
    user: string
}
