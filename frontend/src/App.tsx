import { GlobalStyles } from "@/common/styles/GlobalStyles";
import RoutesProvider from "@/router/RoutesProvider";
import { ThemeProvider } from "styled-components";
import { useActions } from "@/store/actions";

function App() {
  const {getTheme} = useActions();

  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyles />
      <RoutesProvider />
    </ThemeProvider>
  )
}

export default App