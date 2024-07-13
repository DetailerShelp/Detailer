import { AuthSwitchLink, AuthSwitchWrapper } from './styles';
import { SwitchTextObject } from './switchText';


interface AuthSwitchProps {
    obj: SwitchTextObject
}

export default function AuthSwitch({obj}: AuthSwitchProps) {
    return (
        <AuthSwitchWrapper>
            {obj.common} <AuthSwitchLink to={obj.to}>{obj.link}</AuthSwitchLink>
        </AuthSwitchWrapper>
    )
}
