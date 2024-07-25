import { PageContent } from "@/modules/user/PageContent";
import ChatPage from "./components/ChatPage";

export const MessengerPage = () => {
  return (
    <PageContent
    // TODO
      content={<ChatPage/>}
      widgetOne={<span>widget1</span>}
      widgetTwo={<span>widget2</span>}
    />
  )
}
