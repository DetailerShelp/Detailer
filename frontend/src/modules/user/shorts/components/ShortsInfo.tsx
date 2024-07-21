import { ShortsInfoAuthor, ShortsInfoAvatar, ShortsInfoDescription, ShortsInfoProfile, ShortsInfoWrapper } from "@/modules/user/shorts/styles";
import avatar from "@/common/images/avatar.png";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { videoLinks } from "@/modules/user/shorts/videos";

interface ShortsInfoProps {
    activeVideo: number
}

export default function ShortsInfo({ activeVideo }: ShortsInfoProps) {
    const {author, description} = videoLinks[activeVideo];
    return (
        <ShortsInfoWrapper>
            <ShortsInfoProfile>
                <ShortsInfoAvatar src={avatar} />
                <ShortsInfoAuthor>{author}</ShortsInfoAuthor>
            </ShortsInfoProfile>
            <ShortsInfoDescription>
                {description}
            </ShortsInfoDescription>
            <BlackWhiteButton color={"white"} size={30} title="Подписаться" />
        </ShortsInfoWrapper>
    )
}
