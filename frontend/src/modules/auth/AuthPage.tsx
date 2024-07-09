import { Outlet } from "react-router-dom";
import { AuthContentWrapper, AuthForm, AuthImg, AuthWrapper } from "./styles";
import logo from '@/common/svg-helper/Logo.svg';
export default function AuthPage() {

    return (
        <AuthWrapper>
            <AuthContentWrapper>
                <AuthForm>
                    <AuthImg src={logo} />
                    <Outlet />
                </AuthForm>
            </AuthContentWrapper>
        </AuthWrapper>
    )
}
