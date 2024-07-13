import { GlobalStyles } from "@/common/styles/GlobalStyles"
import RoutesProvider from "@/router/RoutesProvider"
import { TopBar } from "@/common/components/TopBar"
import Post from "./common/NewPost/Post"
import ModalPost from "./common/NewPost/ModalPost"
import { useState } from "react"

function App() {
  const [open, setOpen] = useState(false);
  const handleSetOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <GlobalStyles />
      <RoutesProvider />
      <TopBar />
      <button onClick={handleSetOpen}>Open</button>
      <ModalPost isOpen={open} setOpen={setOpen}></ModalPost>
    </>
  )
}

export default App