export const lightTheme = {
  alternateBackground: "rgba(255, 255, 255, 1)",
  mainBackground: "rgba(245, 245, 245, 1)",
  modalBackground: "rgba(255, 255, 255, 1)",
  border: "rgba(238, 238, 238, 1)",
  alternateText: "rgba(210, 210, 210, 1)",
  borderColor: "rgba(184, 184, 184, 1)",
  buttonActive: "rgba(75, 75, 75, 1)",
  scrollBarColor: "rgba(217, 217, 217, 1)",
  
  mainText: "rgba(0, 0, 0, 1)",
  shadow: "rgba(0, 0, 0, 0.25)",
  thumbColor: "rgba(85, 85, 85, 1)",
};

export const darkTheme = {
  alternateBackground: "rgba(5, 5, 5, 1)",
  mainBackground: "rgba(15, 15, 15, 1)",
  modalBackground: "rgba(30, 30, 30, 1)",
  border: "rgba(50, 50, 50, 1)",
  alternateText: "rgba(100, 100, 100, 1)",
  borderColor: "rgba(115, 115, 115, 1)",
  scrollBarColor: "rgba(85, 85, 85, 1)",
  buttonActive: "rgba(200, 200, 200, 1)",


  mainText: "rgba(255, 255, 255, 1)",
  shadow: "rgba(255, 255, 255, 0.25)",
  thumbColor: "rgba(237, 237, 237, 1)",
};

export const getTheme = (themeName: string): any => {
  return themeName === "light" ? lightTheme : darkTheme;
};

//TODO getTheme(...)
export const getColorName = (colorName: string): string => {
    return getTheme('light')[colorName];
}
