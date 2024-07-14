import { GlobalStyles } from "@/common/styles/GlobalStyles";
import { getTheme } from "@/common/styles/theme";
import RoutesProvider from "@/router/RoutesProvider";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ModalConfirm from "./common/components/ui/ModalConfirm";
import ModalPost from "./modules/NewPost/ModalPost";

function App() {
  // const switchTheme = () => {
  //     theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  const [open, setOpen] = useState(true);
  const [openConf, setOpenConf] = useState(false);

  const handleOpen = () => {
    setOpenConf(true);
  }

  const onCancel = () => {
    setOpen(false)
    setOpenConf(false)
  }

  const onOk = () => {
    setOpenConf(false)
  }

  return (
    <ThemeProvider theme={getTheme("light")}>
      <GlobalStyles />
      <RoutesProvider />
      <ModalPost isOpen={open} setOpen={handleOpen}></ModalPost>
      <ModalConfirm 
        isOpen={openConf} 
        zIndex={1005}
        headerText={'Вы действительно хотите отменить создание поста? После закрытия данные не будут сохранены'}
        okText="Отмена"
        cancelText="Удалить"
        onOk={onOk}
        onCancel={onCancel}
        style={{borderRadius: '25px'}}
      />
    </ThemeProvider>
  )
}

export default App