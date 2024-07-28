import { Comment } from "@/store/reducers/shorts/shortsApi"
import CommentItem from "./CommentItem"
import { CommentsWrapper } from "./styles"

interface CommentsProps {
    data: Comment[]
}

export default function Comments({data}: CommentsProps) {

    return (
        <CommentsWrapper>
            {
                data.map((comment) => <CommentItem key={comment.id} comment={comment} />)
            }
        </CommentsWrapper>
    )
}
