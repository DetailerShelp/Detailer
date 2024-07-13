import { GlobalStyles } from "@/common/styles/GlobalStyles"
import RoutesProvider from "@/router/RoutesProvider"
import { ThemeProvider } from "styled-components"
import { getTheme } from "@/common/styles/theme";

function App() {
  // const switchTheme = () => {
  //     theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <ThemeProvider theme={getTheme("light")}>
      <GlobalStyles />
      <RoutesProvider />
    </ThemeProvider>
  )
}

export default App