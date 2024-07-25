export interface User {
    username: string;
    email: string;
    nickname: string;
    avatar: string;
    joinAt: Date;
    isAdmin?: boolean;
}