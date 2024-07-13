import { Outlet } from "react-router-dom";
import { AuthContentWrapper, AuthForm, AuthWrapper } from "./styles";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthSwitch from "./AuthSwitch";
import { loginText, regText, SwitchTextObject } from "./switchText";
import { loginUrl, regUrl } from "./authLinks";
import styled from "styled-components";
import { clampWidth } from "@/common/styles/mixins";

// временно используется вместо logo
const Block = styled('div')`
${clampWidth(150, 360)};
height: 30px;
background-color: black;
`;

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
                    {/* <SvgHelper iconName="logo" width="360px" height="70px" /> */}
                    <Block></Block>
                    <Outlet />
                </AuthForm>
                {isSwitchShow && <AuthSwitch obj={switchText} />}
            </AuthContentWrapper>
        </AuthWrapper>
    )
}
