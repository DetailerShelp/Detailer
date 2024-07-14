import { GlobalStyles } from "@/common/styles/GlobalStyles";
import { getTheme } from "@/common/styles/theme";
import RoutesProvider from "@/router/RoutesProvider";
import { ThemeProvider } from "styled-components";

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