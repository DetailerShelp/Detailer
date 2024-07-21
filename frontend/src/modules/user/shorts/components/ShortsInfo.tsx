import { ShortsInfoAuthor, ShortsInfoAvatar, ShortsInfoDescription, ShortsInfoProfile, ShortsInfoWrapper } from "@/modules/user/shorts/styles";
import avatar from "@/common/images/avatar.png";
import { videoLinks } from "@/modules/user/shorts/videos";
import { WhiteButtonWithIcon } from "@/common/styles/tags/button/WhiteButtonWithIcon";

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
            <WhiteButtonWithIcon title="Подписаться" size={30} icon="plus" />
        </ShortsInfoWrapper>
    )
}
