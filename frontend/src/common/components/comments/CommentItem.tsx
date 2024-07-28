import SvgHelper from "@/common/svg-helper/SvgHelper";
import { AccountsAvatar } from "../widgets/accounts/styles";
import { CommentAnswer, CommentAuthor, CommentAvatar, CommentInformation, CommentLikesCount, CommentLikesWrapper, CommentMessage, CommentThread, CommentTimeSending, CommentWrapper } from "./styles";
import AnswersDropDown from "./AnswersDropDown";
import { Comment } from "@/store/reducers/shorts/shortsApi";

interface CommentItemProps {
    comment: Comment
}

export default function CommentItem({ comment }: CommentItemProps) {
    const { author, message, likes } = comment;
    
    return (
        <CommentThread>
            <CommentWrapper>
                <CommentAvatar>
                    <AccountsAvatar />
                </CommentAvatar>
                <CommentInformation>
                    <CommentAuthor>
                        {author}<CommentTimeSending>5 минут назад</CommentTimeSending>
                    </CommentAuthor>
                    <CommentMessage>{message}</CommentMessage>
                    <CommentAnswer>Ответить</CommentAnswer>
                </CommentInformation>
                <CommentLikesWrapper>
                    <SvgHelper iconName="like" width="20px" height="20px" />
                    <CommentLikesCount>{likes}</CommentLikesCount>
                </CommentLikesWrapper>
            </CommentWrapper>
            {comment.answersCount && <AnswersDropDown parentId={comment.id} />}
        </CommentThread>
    )
}
