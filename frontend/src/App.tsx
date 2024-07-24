import { GlobalStyles } from "@/common/styles/GlobalStyles";
import RoutesProvider from "@/router/RoutesProvider";
import { ThemeProvider } from "styled-components";
import { getTheme } from "@/common/styles/theme";

function App() {
  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <RoutesProvider />
    </ThemeProvider>
  )
}

export default App