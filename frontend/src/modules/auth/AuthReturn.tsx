import { AuthBackLink, AuthBackLinkImg } from "./styles";
import arrowLeft from "@/common/svg-helper/arrow-left.svg";

interface AuthReturnProps {
    to: string
}

export default function AuthReturn({to}: AuthReturnProps) {
    return (
        <AuthBackLink to={to}>
            <AuthBackLinkImg src={arrowLeft} />
        </AuthBackLink>
    )
}
