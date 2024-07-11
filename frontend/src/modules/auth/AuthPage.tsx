import { Outlet } from "react-router-dom";
import { AuthContentWrapper, AuthForm, AuthImg, AuthWrapper } from "./styles";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '@/common/svg-helper/Logo.svg';
import AuthSwitch from "./AuthSwitch";
import { loginText, regText, SwitchTextObject } from "./switchText";
import { loginUrl, regUrl } from "./authLinks";

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
                    <AuthImg src={logo} />
                    <Outlet />
                </AuthForm>
                {isSwitchShow && <AuthSwitch obj={switchText} />}
            </AuthContentWrapper>
        </AuthWrapper>
    )
}
