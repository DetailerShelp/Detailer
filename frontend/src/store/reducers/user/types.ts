export interface User {
    id: number;
    createdAt: string;
    email: string;
    username: string;
    avatarImg?: string;
    backgroundImg?: string;
    description?: string;
    subscribers?: ShortUserInfo[];
    subscribes?: ShortUserInfo[];
    publications?: object;
    isAuthorizedUser: boolean;
    isAdmin: boolean;
}

export interface ShortUserInfo {
  id: number;
  username: string;
  avatarImg?: string;
}