import { AuthSwitchLink, AuthSwitchWrapper } from '@/modules/auth/styles';
import { SwitchTextObject } from '@/modules/auth/switchText';


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
