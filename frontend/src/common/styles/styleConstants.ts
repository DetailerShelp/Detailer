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
  whiteTotal: "rgba(255, 255, 255, 1)",
  whiteBackground: "rgba(245, 245, 245, 1)",

  //Gray
  grayBorder: "rgba(238, 238, 238, 1)",
  grayText: "rgba(210, 210, 210, 1)",
  grayAccent: "rgb(184, 184, 184, 1)",

  //Black
  blackTotal: "rgba(0, 0, 0, 1)",
  blackHover: "rgb(50, 50, 50, 1)",
  blackActive: "rgb(75, 75, 75, 1)",


  red: 'rgba(253, 0, 0, 1)',
};

export const shadows = {
  defaultShadow: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
};

export const borders = {
  defaultBorder: `1px solid ${colors.grayBorder}`,
  borderGrayAccent: `1px solid ${colors.grayAccent}`,
  borderBlack: `1px solid ${colors.blackTotal}`,

  defaultBorderRadius: "20px",
  mediumBorderRadius: "45px",
  bigBorderRadius: "60px",
  smallBorderRadius: "5px",
  circleBorderRadius: "50%",

  outline: `${colors.blackTotal} solid 2px`,
};

export const transitions = {
  mediumTransition: 'all 0.3s ease 0s',
  fastTransition: 'all 0.2s ease 0s',
  lowTransition: 'all 0.8s ease 0s',
};

export const fonts = {
  // size
  sizes: {
    title: 30,
    titleMobile: 22,
    subTitle: 20,
    subTitleMobile: 17,
    main: 18,
    mainMobile: 15,
    small: 15,
    smallMobile: 12,
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
