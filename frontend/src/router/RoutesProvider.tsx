import { NavPanel } from "@/common/components/NavPanel";
import { Route, createBrowserRouter, createRoutesFromElements, Navigate, RouterProvider } from "react-router-dom"

export default function RoutesProvider() {
    const authorizedUser = true;


    // ToDo изменить elements по готовности
    const unAuthorizedProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="auth/" element={<div>AuthPage</div>}>
                    <Route path="login" element={<div>LoginPage</div>} />
                    <Route path="reg" element={<div>RegPage</div>} />
                    <Route path="forgot" element={<div>ForgotPassPAge</div>} />
                    <Route path="confirm" element={<div>ConfirmRegPage</div>} />
                </Route>
                <Route path='*' element={<Navigate to='/auth/reg' replace />} />
            </>
        )
    );

    // ToDo изменить elements по готовности
    const authorizedProvider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<NavPanel />}>
                    <Route path="user/" element={<div>UserLayout</div>} >

                    </Route>

                    <Route path="home" element={<NavPanel />} />
                    <Route path="profile" element={<NavPanel />} />
                    <Route path="messenger" element={<NavPanel />} />
                    <Route path="shorts" element={<NavPanel />} />
                    <Route path="saved" element={<NavPanel />} />
                    <Route path="qrcode" element={<NavPanel />} />
                    <Route path="settings" element={<NavPanel />} />
                    <Route path="help" element={<NavPanel />} />
                </Route>
                <Route path="error" element={<div>Error 404</div>} />
                <Route path='*' element={<Navigate to='/error' replace />} />
                {/* на страницу Error можно будет вернуться на главную страницу */}
            </>
        )
    );

    return <RouterProvider router={authorizedUser ? authorizedProvider : unAuthorizedProvider} />;
}
