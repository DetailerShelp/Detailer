import { GlobalStyles } from "@/common/styles/GlobalStyles"
import RoutesProvider from "@/router/RoutesProvider"
import { TopBar } from "@/common/components/TopBar"

function App() {
  return (
    <>
      <GlobalStyles />
      <RoutesProvider />
      <TopBar />
    </>
  )
}

export default App