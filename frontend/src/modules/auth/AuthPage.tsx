import { Outlet } from "react-router-dom";
import { AuthContentWrapper, AuthForm, AuthWrapper } from "./styles";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthSwitch from "./AuthSwitch";
import { loginText, regText, SwitchTextObject } from "./switchText";
import { loginUrl, regUrl } from "./authLinks";;
import AuthLogo from "./components/AuthLogo";

export default function AuthPage() {
    const location = useLocation();
    const [isSwitchShow, setIsSwitchShow ] = useState(false);
    const [switchText, setSwitchText] = useState<SwitchTextObject>(regText);

    useEffect(() => {
        if (location.pathname === loginUrl || location.pathname === regUrl) {
            setIsSwitchShow(true);
            if (location.pathname == loginUrl) setSwitchText(loginText)
            else setSwitchText(regText);
        }
        else setIsSwitchShow(false);
    }, [location]
    )

    return (
        <AuthWrapper>
            <AuthContentWrapper>
                <AuthForm>
                    <AuthLogo />
                    <Outlet />
                </AuthForm>
                {isSwitchShow && <AuthSwitch obj={switchText} />}
            </AuthContentWrapper>
        </AuthWrapper>
    )
}
