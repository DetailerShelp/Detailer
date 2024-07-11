export const colors = {
  //White
  whiteTotal: "rgba(255, 255, 255, 1)",
  whiteBackground: "rgba(245, 245, 245, 1)",

  //Gray
  grayBorder: "rgba(238, 238, 238, 1)",
  grayText: "rgba(210, 210, 210, 1)",
  grayDark: "rgb(184, 184, 184)",

  //Black
  blackTotal: "rgba(0, 0, 0, 1)",
};

export const shadows = {
  defaultShadow: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
};

export const borders = {
  defaultBorder: `1px solid ${colors.grayBorder}`,
  borderGrayDark: `1px solid ${colors.grayDark}`,
  borderBlack: `1px solid ${colors.blackTotal}`,
  borderDark: `1px solid ${colors.grayDark}`,

  defaultBorderRadius: "20px",
  bigBorderRadius: "45px",
  biggestBorderRadius: "60px",
  checkBoxBorderRadius: "5px"
};

export const transitions = {
  mediumTransition: 'all 0.5s ease 0s',
  fastTransition: 'all 0.2s ease 0s',
  lowTransition: 'all 0.8s ease 0s',
};

export const fonts = {
  // size
  sizes: {
    title: "30px",
    subTitle: "20px",
    main: "18px",
    small: "15px",
  },

  // weight
  weights: {
    semiBold: 600,
    regular: 500,
    medium: 400,
    light: 300
  }
}
