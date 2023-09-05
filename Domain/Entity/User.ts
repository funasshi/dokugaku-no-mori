export class User {
    constructor(
        public id: number,
        public email: string,
        public name: string,
        public avatar: string,
        public createdAt: Date,
        public updatedAt: Date,
        public introduction: string,
    ) {}
}
