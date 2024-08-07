import { Comment } from "@/store/reducers/shorts/shortsApi"
import CommentItem from "@/common/components/comments/CommentItem"
import { CommentsWrapper } from "@/common/components/comments/styles"

interface CommentsProps {
    data: Comment[]
}

export default function Comments({data}: CommentsProps) {

    return (
        <CommentsWrapper>
            {
                data.map((comment) => <CommentItem key={comment.id} isAnswer={false} comment={comment} />)
            }
        </CommentsWrapper>
    )
}
