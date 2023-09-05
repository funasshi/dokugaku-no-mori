import { User } from './User';

export class Session {
    constructor(
        public id: number,
        public user: User,
        public createdAt: Date,
        public updatedAt: Date,
        public token: string,
    ) {}
}
