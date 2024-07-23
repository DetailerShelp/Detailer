import video1 from "@/modules/user/shorts/video1.mp4";
import video2 from "@/modules/user/shorts/video2.mp4";
import video3 from "@/modules/user/shorts/video3.mp4";
import video4 from "@/modules/user/shorts/video4.mp4";
import video5 from "@/modules/user/shorts/video5.mp4";

export interface VideoLinksType {
    src: string,
    likes: number,
    comments: number,
    repost: number,
    author: string,
    description: string
}

export const videoLinks: VideoLinksType[] = [
    {
        src: video1,
        likes: 52,
        comments: 52,
        repost: 52,
        author: 'user1',
        description: 'Очаровательное видео, запечатлевающее первые лучи солнца, проникающие сквозь плотный туман и освещающие живописные леса.',
    },
    {
        src: video2,
        likes: 7400,
        comments: 325,
        repost: 24,
        author: 'user2',
        description: 'Увлекательная съемка разноцветных цветов, колышущихся на ветру, создающих гармоничное и красивое зрелище.',
    },
    {
        src: video3,
        likes: 12300,
        comments: 1200,
        repost: 980,
        author: 'user3',
        description: 'Динамичное видео, демонстрирующее взаимодействие природных элементов: воды, ветра, деревьев, вплетенное в потрясающую симфонию живой природы.',
    },
    {
        src: video4,
        likes: 12,
        comments: 2,
        repost: 1,
        author: 'user4',
        description: 'Захватывающее плавание по кристально чистым водам озера, показывающее красоту подводного мира и игру света на поверхности.',
    },
    {
        src: video5,
        likes: 789,
        comments: 58,
        repost: 5,
        author: 'user5',
        description: 'Видео, сопровождаемое звуками леса, птицами и шелестом листвы, создающее атмосферу умиротворения и гармонии.',
    },
    {
        src: video2,
        likes: 1200,
        comments: 100,
        repost: 10,
        author: 'user6',
        description: 'Романтическое видео, запечатлевающее великолепный закат, окрашивающий небо в огненные оттенки и создающий неповторимую атмосферу магии и спокойствия.',
    }
]