import { Route, createBrowserRouter, createRoutesFromElements, Navigate, RouterProvider } from "react-router-dom"

export default function RoutesProvider() {
    const authorizedUser = true;

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
