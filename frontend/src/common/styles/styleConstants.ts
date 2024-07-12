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
  graySearch: "rgba(184, 184, 184, 1)",

  //Black
  blackTotal: "rgba(0, 0, 0, 1)",
};

export const shadows = {
  defaultShadow: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
};

export const borders = {
  defaultBorder: `1px solid ${colors.grayBorder}`,
  searchBorder: `1px solid ${colors.graySearch}`,

  defaultBorderRadius: "20px",
  bigBorderRadius: "60px",
  circleBorderRadius: "50%",
};

export const transitions = {
  mediumTransition: "all 0.3s ease 0s",
  fastTransition: "all 0.2s ease 0s",
  lowTransition: "all 0.8s ease 0s",
};
