import { getColorName } from "@/common/styles/theme";

export const screen = {
  fullScreenWidth: 1440,

  desktopScreenWidth: "1440px",
  desktopScreenWidthAbove: "1441px",

  tabletScreenWidth: "1024px",
  tabletScreenWidthAbove: "1025px",

  mobileScreenWidth: "768px",
  mobileScreenWidthAbove: "769px",

  lMobileScreenWidth: "480px",
  lMobileScreenWidthAbove: "481px",

  mMobileScreenWidth: "375px",
  mMobileScreenWidthAbove: "376px",

  sMobileScreenWidth: "320px",
  sMobileScreenWidthAbove: "321px",
};

//HELPER use in styled-components: @media ${device.tablet} { ... }
export const device = {
  desktopAbove: `(min-width: ${screen.desktopScreenWidthAbove})`,
  desktop: `(max-width: ${screen.desktopScreenWidth})`,

  tabletAbove: `(min-width: ${screen.tabletScreenWidthAbove})`,
  tablet: `(max-width: ${screen.tabletScreenWidth})`,

  mobileAbove: `(min-width: ${screen.mobileScreenWidthAbove})`,
  mobile: `(max-width: ${screen.mobileScreenWidth})`,

  mobileLAbove: `(min-width: ${screen.lMobileScreenWidthAbove})`,
  mobileL: `(max-width: ${screen.lMobileScreenWidth})`,

  mobileMAbove: `(min-width: ${screen.mMobileScreenWidthAbove})`,
  mobileM: `(max-width: ${screen.mMobileScreenWidth})`,

  mobileSAbove: `(min-width: ${screen.sMobileScreenWidthAbove})`,
  mobileS: `(max-width: ${screen.sMobileScreenWidth})`,
};

export const colors = {
  //White
  whiteTotal: `${getColorName("alternateBackground")}`,
  whiteBackground: `${getColorName("mainBackground")}`,
  whiteModal: `${getColorName("modalBackground")}`,

  //Gray
  // gray: `${getTheme()}`,
  grayBorder: `${getColorName("border")}`,
  grayText: `${getColorName("alternateText")}`,
  grayAccent: `${getColorName("borderColor")}`,
  grayScrollBar: `${getColorName("scrollBarColor")}`,
  grayScrollBarHover: `${getColorName("scrollBarHover")}`,
  grayScrollBarActive: `${getColorName("scrollBarActive")}`,

  //Black
  blackTotal: `${getColorName("mainText")}`,
  blackActive: `${getColorName("buttonActive")}`,
  blackBackground: `${getColorName("buttonBackground")}`,
  blackThumb: `${getColorName("thumbColor")}`,
  shadow: `${getColorName("shadow")}`,

  //Constant Colors
  grayBackground: "rgba(217, 217, 217, 0.7)",
  blackTransparent: "rgba(0, 0, 0, 0.5)",
  blue: "rgba(0, 117, 255, 1)",
  darkBlue: "rgba(0, 26, 255, 1)",
  red: "rgba(253, 0, 0, 1)",
};

export const shadows = {
  defaultShadow: `0 0 5px 0 ${colors.shadow}`,
};

export const borders = {
  defaultBorder: `1px solid ${colors.grayBorder}`,
  borderGrayAccent: `1px solid ${colors.grayAccent}`,
  borderBlack: `1px solid ${colors.blackTotal}`,
  boldBorderBlack: `3px solid ${colors.blackTotal}`,
  avatarBorder: `3px solid ${colors.whiteTotal}`,

  smallBorderRadius: "5px",
  thinBorderRadius: "15px",
  defaultBorderRadius: "20px",
  mediumBorderRadius: "45px",
  bigBorderRadius: "60px",
  circleBorderRadius: "50%",

  outline: `${colors.blackTotal} solid 2px`,
};

export const transitions = {
  fastTransition: "all 0.2s ease 0s",
  mediumTransition: "all 0.3s ease 0s",
  lowTransition: "all 0.8s ease 0s",
};

export const fonts = {
  // size
  sizes: {
    title: 30,
    titleModal: 25,
    titleMobile: 22,
    subTitle: 20,
    subTitleMobile: 17,
    main: 18,
    mainMobile: 15,
    small: 15,
    smallMobile: 12,
    dropdown: 14, 
    dropdownMobile: 12,
    extraSmall: 12,
    extraSmallMobile: 10,
  },

  // weight
  weights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  }
};


export const mainFont = "'Montserrat', sans-serif";