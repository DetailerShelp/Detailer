import SvgHelper from "@/common/svg-helper/SvgHelper";
import { AccountsAvatar } from "../widgets/accounts/styles";
import { answers, Comment } from "./Comments"
import { CommentAnswer, CommentAuthor, CommentAvatar, CommentInformation, CommentLikesCount, CommentLikesWrapper, CommentMessage, CommentThread, CommentTimeSending, CommentWrapper } from "./styles";
import AnswersDropDown from "./AnswersDropDown";

interface CommentItemProps {
    comment: Comment
}

export default function CommentItem({ comment }: CommentItemProps) {
    const { author, message, likes } = comment;
    const answersToComment = answers.filter(ans => ans.parentId === comment.id)[0];
    
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
            {answersToComment && <AnswersDropDown answerToComment={answersToComment} />}
        </CommentThread>
    )
}
