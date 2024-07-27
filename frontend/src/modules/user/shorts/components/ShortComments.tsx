import Comments from "@/common/components/comments/Comments";
import { HeaderShortComments, TitleShortComments, WidgetShortComments } from "../styles";

export default function ShortComments() {
    return (
        <WidgetShortComments>
            <HeaderShortComments>
                <TitleShortComments>
                    Комментарии <span>12</span>
                </TitleShortComments>
            </HeaderShortComments>
            <Comments />
            <HeaderShortComments>
                <TitleShortComments>
                    Комментарии <span>12</span>
                </TitleShortComments>
            </HeaderShortComments>
        </WidgetShortComments>
    )
}
