import SvgHelper from "@/common/svg-helper/SvgHelper";
import { AuthBackLink } from "./styles";

interface AuthReturnProps {
    to: string
}

export default function AuthReturn({to}: AuthReturnProps) {
    return (
        <AuthBackLink to={to}>
            <SvgHelper iconName="arrowLeft" />
        </AuthBackLink>
    )
}
