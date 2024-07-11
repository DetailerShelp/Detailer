export const colors = {
  //White
  whiteTotal: "rgba(255, 255, 255, 1)",
  whiteBackground: "rgba(245, 245, 245, 1)",

  //Gray
  grayBorder: "rgba(238, 238, 238, 1)",
  grayText: "rgba(210, 210, 210, 1)",
  graySearch: "rgba(184, 184, 184, 1)",
  grayBackground: "rgba(217, 217, 217, 0.7)",

  //Black
  blackTotal: "rgba(0, 0, 0, 1)",

  //Red
  redTotal: "rgba(255, 0, 0, 1)",
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

export const mainFont = "'Montserrat', sans-serif";