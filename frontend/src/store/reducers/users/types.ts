export interface ShortUserInfo {
    id: number;
    username: string;
    avatarImg?: string;
}

export interface User {
    id: number;
    createdAt: string;
    username: string;
    avatarImg?: string;
    backgroundImg?: string;
    description?: string;
    subscribers?: ShortUserInfo[];
    subscribes?: ShortUserInfo[];
}

export const UserMockData: User[] = [
  {
    createdAt: "2024-07-22T06:09:12.662Z",
    username: "Maria Flatley",
    avatarImg:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
    backgroundImg: "https://loremflickr.com/640/480/abstract",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    subscribers: [
      {
        username: "Candace Mante",
        avatarImg:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg",
        id: 1,
      },
      {
        username: "Alfred Steuber",
        avatarImg:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/146.jpg",
        id: 2,
      },
      {
        username: "Candace Manteffffffffffffffffffffffffffffffffffff",
        avatarImg:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg",
        id: 3,
      },
      {
        username: "Alfred Steuber",
        avatarImg:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/146.jpg",
        id: 4,
      },
    ],
    subscribes: [
      {
        username: "Candace Mante",
        avatarImg:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg",
        id: 1,
      },
      {
        username: "Art",
        avatarImg: "",
        id: 2,
      },
    ],
    id: 1,
  },
//   {
//     createdAt: "2024-07-21T14:20:58.972Z",
//     username: "Candace Mante",
//     avatarImg:
//       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1148.jpg",
//     backgroundImg: "https://loremflickr.com/640/480/people",
//     description:
//       "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
//     subscribers: [],
//     subscribes: [],
//     id: 2,
//   },
//   {
//     createdAt: "2024-07-21T23:21:55.729Z",
//     username: "Alfred Steuber",
//     avatarImg:
//       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/146.jpg",
//     backgroundImg: "https://loremflickr.com/640/480/people",
//     description:
//       "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
//     subscribers: [],
//     subscribes: [],
//     id: 3,
//   },
];
