import { ShortPostInfo } from "@/store/reducers/post/types";
import { ShortShortsInfo } from "@/store/reducers/shorts/types";
import { ShortAutoInfo } from "@/store/reducers/auto/types";

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
  shorts?: ShortShortsInfo[];
  garage?: ShortAutoInfo[];
}

export interface ShortUserInfo {
  id: number;
  username: string;
  avatarImg?: string;
}
