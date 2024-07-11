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
};

export const transitions = {
  mediumTransition: 'all 0.3s ease 0s',
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
};
