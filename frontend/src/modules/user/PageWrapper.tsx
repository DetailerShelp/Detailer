import { TopBar } from "@/common/components/TopBar";
import { Outlet } from "react-router-dom";

export const PageWrapper = () => {
  return (
    <>
      <TopBar />

      <Outlet />
    </>
  );
};
