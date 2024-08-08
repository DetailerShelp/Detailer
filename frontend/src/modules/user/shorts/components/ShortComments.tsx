import Comments from "@/common/components/comments/Comments";
import { HeaderShortComments, TitleShortComments, WidgetShortComments } from "@/modules/user/shorts/styles";
import SendingMessage from "@/common/components/comments/SendingMessage/SendingMessage";
import { useGetCommentsQuery } from "@/store/reducers/comments/commentsApi";

export default function ShortComments() {
    const { data } = useGetCommentsQuery();

    return (
        <WidgetShortComments>
            <HeaderShortComments>
                <TitleShortComments>
                    Комментарии <span>12</span>
                </TitleShortComments>
            </HeaderShortComments>
            <Comments data={data || []} />
            <SendingMessage />
        </WidgetShortComments>
    )
}
