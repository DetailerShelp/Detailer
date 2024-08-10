import SvgHelper from "@/common/svg-helper/SvgHelper";
import { AccountsAvatar } from "@/common/components/widgets/accounts/styles";
import { CommentAnswer, CommentAuthor, CommentAvatar, CommentInformation, CommentLikesCount, CommentLikesWrapper, CommentMessage, CommentTimeSending, CommentWrapper } from "@/common/components/comments/styles";
import { normalizeCount } from "@/common/helpers/countHelpers";

interface CommentItemProps {
    author: string,
    likes: number,
    onclick: () => void,
    children: React.ReactNode
}

export default function CommentItem({ author, likes, children, onclick }: CommentItemProps) {

    return (
            <CommentWrapper onClick={onclick}>
                <CommentAvatar>
                    <AccountsAvatar />
                </CommentAvatar>
                <CommentInformation>

                    <CommentAuthor>
                        {author}<CommentTimeSending>5 минут назад</CommentTimeSending>
                    </CommentAuthor>

                    <CommentMessage>
                        {children}
                    </CommentMessage>

                    <CommentAnswer>Ответить</CommentAnswer>
                </CommentInformation>
                <CommentLikesWrapper>
                    <SvgHelper iconName="like" width="20px" height="20px" />
                    <CommentLikesCount>
                        {normalizeCount(likes)}
                    </CommentLikesCount>
                </CommentLikesWrapper>
            </CommentWrapper>
    )
}
