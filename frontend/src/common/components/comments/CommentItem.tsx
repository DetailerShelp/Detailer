import SvgHelper from "@/common/svg-helper/SvgHelper";
import { AccountsAvatar } from "@/common/components/widgets/accounts/styles";
import { CommentAnswer, CommentAuthor, CommentAvatar, CommentInformation, CommentLikesCount, CommentLikesWrapper, CommentMessage, CommentThread, CommentTimeSending, CommentWrapper } from "@/common/components/comments/styles";
import AnswersDropDown from "@/common/components/comments/AnswersDropDown";
import { Comment } from "@/store/reducers/shorts/shortsApi";
import { useActions } from "@/store/actions";

interface CommentItemProps {
    comment: Comment,
    isAnswer: boolean
}

export default function CommentItem({ comment, isAnswer }: CommentItemProps) {
    const { author, message, likes } = comment;
    const { setAnswerWhom, resetAnswerWhom } = useActions();

    const handleClickMessage = () => {
        resetAnswerWhom();
        setAnswerWhom(comment.author);
    }
    
    return (
        <CommentThread>
            <CommentWrapper onClick={() => isAnswer ? {} : handleClickMessage()}>
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
            {!isAnswer && <AnswersDropDown parentId={comment.id} />}
        </CommentThread>
    )
}
