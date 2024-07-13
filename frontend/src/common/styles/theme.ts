export const lightTheme = {
  alternateBackground: "rgba(255, 255, 255, 1)",
  mainBackground: "rgba(245, 245, 245, 1)",
  border: "rgba(238, 238, 238, 1)",
  alternateText: "rgba(210, 210, 210, 1)",
  borderColor: "rgb(184, 184, 184, 1)",

  mainText: "rgba(0, 0, 0, 1)",
  shadow: "rgba(0, 0, 0, 0.25)",
};

export const darkTheme = {
  alternateBackground: "rgba(5, 5, 5, 1)",
  mainBackground: "rgba(15, 15, 15, 1)",
  border: "rgba(130, 130, 130, 1)",
  alternateText: "rgba(100, 100, 100, 1)",
  borderColor: "rgb(115, 115, 115, 1)",

  mainText: "rgba(255, 255, 255, 1)",
  shadow: "rgba(255, 255, 255, 0.25)",
};

export const getTheme = (themeName: string): any => {
  return themeName === "light" ? lightTheme : darkTheme;
};

//TODO getTheme(...)
export const getColorName = (colorName: string): string => {
    return getTheme('dark')[colorName];
}
