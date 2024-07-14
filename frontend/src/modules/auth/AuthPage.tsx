import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthSwitch from "@/modules/auth/AuthSwitch";
import { loginText, regText, SwitchTextObject } from "@/modules/auth/switchText";
import { loginUrl, regUrl } from "@/modules/auth/authLinks";
import AuthLogo from "@/modules/auth/components/AuthLogo";
import { AuthContentWrapper, AuthForm, AuthWrapper } from "@/modules/auth/styles";

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
