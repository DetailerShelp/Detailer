import { ShortPostInfo } from "@/store/reducers/post/types";

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
    isAuthorizedUser: boolean;
    isAdmin: boolean;
    posts: ShortPostInfo[];
    shorts?: ShortPostInfo[],
    garage?: ShortPostInfo[],
}

export interface ShortUserInfo {
  id: number;
  username: string;
  avatarImg?: string;
}