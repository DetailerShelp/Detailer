import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AuthPage from "@/modules/auth/AuthPage";
import ChangePassword from "@/modules/auth/ChangePassword";
import ForgotPassword from "@/modules/auth/ForgotPassword";
import Login from "@/modules/auth/Login";
import Reg from "@/modules/auth/Reg";
import { HomePage } from "@/modules/user/home/HomePage";
import { ProfilePage } from "@/modules/user/profile/ProfilePage";
import { PageWrapper } from "@/modules/user/PageWrapper";
import { EditPage } from "@/modules/user/profile/pages/edit-profile/EditPage";
import { SettingsPage } from "@/modules/user/settings/SettingsPage";
import { LikedPage } from "@/modules/user/profile/pages/liked/LikedPage";
import { SavedPage } from "@/modules/user/profile/pages/saved/SavedPage";
import { ErrorPage } from "@/common/components/error/ErrorPage";

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

  const authorizedProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PageWrapper />}>
          <Route path="home" element={<HomePage />} />
          <Route path="profile/:userId" element={<ProfilePage />} />
          <Route path="edit" element={<EditPage />} />
          <Route path="saved" element={<SavedPage />} />
          <Route path="liked" element={<LikedPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return (
    <RouterProvider
      router={authorizedUser ? authorizedProvider : unAuthorizedProvider}
    />
  );
}
