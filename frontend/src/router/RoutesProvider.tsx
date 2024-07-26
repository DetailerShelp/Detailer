import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { NavPanel } from "@/common/components/navpanel/NavPanel";
import AuthPage from "@/modules/auth/AuthPage";
import ChangePassword from "@/modules/auth/ChangePassword";
import ForgotPassword from "@/modules/auth/ForgotPassword";
import Login from "@/modules/auth/Login";
import Reg from "@/modules/auth/Reg";
import { HomePage } from "@/modules/user/home/HomePage";
import { ProfilePage } from "@/modules/user/profile/ProfilePage";
import { PageWrapper } from "@/modules/user/PageWrapper";
import { MessengerPage } from "@/modules/user/messenger/MessengerPage";
import ShortsPage from "@/modules/user/shorts/ShortsPage";
import { EditPage } from "@/modules/user/profile/pages/edit-profile/EditPage";
import { HelpPage } from "@/modules/user/help/HelpPage";
import { SettingsPage } from "@/modules/user/settings/SettingsPage";
import { Profile } from "@/modules/user/profile/components/Profile";
import Chat from "@/modules/user/messenger/components/Chat";

export default function RoutesProvider() {
  const authorizedUser = true;

  // ToDo изменить elements по готовности
  const unAuthorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="auth/" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="reg" element={<Reg />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="change" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/reg" replace />} />
      </>
    )
  );

  // ToDo изменить elements по готовности
  const authorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PageWrapper />}>
          <Route path="home" element={<HomePage />} />
          <Route path="profile/" element={<ProfilePage />}>
            <Route path="user/" element={<Profile />} />
            <Route path="edit" element={<EditPage />} />
          </Route>
          <Route path="messenger" element={<MessengerPage />}>
            <Route path="chat/:id" element={<Chat />} />
          </Route>
          <Route path="shorts" element={<ShortsPage />} />
          <Route path="saved" element={<NavPanel />} />
          <Route path="qrcode" element={<NavPanel />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="help" element={<HelpPage />} />
        </Route>
        <Route path="error" element={<div>Error 404</div>} />
        <Route path="*" element={<Navigate to="/error" replace />} />
        {/* на страницу Error можно будет вернуться на главную страницу */}
      </>
    )
  );

  return (
    <RouterProvider
      router={authorizedUser ? authorizedProvider : unAuthorizedProvider}
    />
  );
}
