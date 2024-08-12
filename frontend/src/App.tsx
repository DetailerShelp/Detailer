import { GlobalStyles } from "@/common/styles/GlobalStyles";
import RoutesProvider from "@/router/RoutesProvider";
import { ThemeProvider } from "styled-components";
import { getTheme } from "@/common/styles/theme";
import { ToastProvider } from "@/common/toast/RenderToasts";

function App() {
  return (
    <ToastProvider>
      <ThemeProvider theme={getTheme()}>
        <GlobalStyles />
        <RoutesProvider />
      </ThemeProvider>
    </ToastProvider>
  )
}

export default App