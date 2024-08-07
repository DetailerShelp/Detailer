import { ShortUserInfo } from "@/store/reducers/user/types";

export interface PostInfo {
    id: number;
    createdAt: string;
    publicationImg?: string[];
    createdUser: ShortUserInfo;
    likedUsers?: number; //TODO to array of ShortUserInfo[]
    commentedUsers?: ShortUserInfo[];
    description?: string;
    // characteristics?: string
}

export interface ShortPostInfo {
    id: number;
    img: string;
    createUserId: number;
}