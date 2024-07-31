const mockApiProfileUrl = "669e63d39a1bda3680067b5d.mockapi.io";

export const baseUrl = `https://${mockApiProfileUrl}/`;

export type Response<T> = {
    statusCode: number;
    subject: string;
    data: T;
  };

const profileService = '/profile';

export enum profileServiceEndpoints {
    EDIT = `${profileService}/edit`,
}