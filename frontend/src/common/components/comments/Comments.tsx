import { CommentType } from "@/store/reducers/comments/commentsApi"
import { CommentsWrapper } from "@/common/components/comments/styles"
import CommentParent from "./CommentParent"

interface CommentsProps {
    comments: CommentType[]
}

export default function Comments({comments}: CommentsProps) {

    return (
        <CommentsWrapper>
            {
                comments.map((comment) => <CommentParent key={comment.id} comment={comment} />)
            }
        </CommentsWrapper>
    )
}
