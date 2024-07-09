import AuthPage from "@/modules/auth/AuthPage";
import ChangePassword from "@/modules/auth/ChangePassword";
import ForgotPassword from "@/modules/auth/ForgotPassword";
import Login from "@/modules/auth/Login";
import Reg from "@/modules/auth/Reg";
import { Route, createBrowserRouter, createRoutesFromElements, Navigate, RouterProvider } from "react-router-dom"

export default function RoutesProvider() {
    const authorizedUser = false;


    // ToDo изменить elements по готовности
    const unAuthorizedProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="auth/" element={<AuthPage />}>
                    <Route path="login" element={<Login />} />
                    <Route path="reg" element={<Reg />} />
                    <Route path="forgot" element={<ForgotPassword />} />
                    <Route path="change" element={<ChangePassword />} />
                </Route >
                <Route path='*' element={<Navigate to='/auth/reg' replace />} />
            </>
        )
    );

    // ToDo изменить elements по готовности
    const authorizedProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<div>Layout</div>}>
                    <Route path="user/" element={<div>UserLayout</div>} >

                    </Route>
                </Route>
                <Route path="error" element={<div>Error 404</div>} />
                <Route path='*' element={<Navigate to='/error' replace />} />
                {/* на страницу Error можно будет вернуться на главную страницу */}
            </>
        )
    );

    return <RouterProvider router={authorizedUser ? authorizedProvider : unAuthorizedProvider} />;
}
