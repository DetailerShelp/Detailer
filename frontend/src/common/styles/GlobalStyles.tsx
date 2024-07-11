import { Global, css } from "@emotion/react";
import styled from "styled-components";
import { colors, transitions } from "./styleConstants";

export const Container = styled("div")`
  max-width: calc(1440px + 50px * 2);
  padding-inline: 50px;
  margin-inline: auto;
`;

export const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :where(ul, ol):where([class]) {
            padding-left: 0;
          }

          body,
          :where(blockquote, figure):where([class]) {
            margin: 0;
          }

          :where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {
            margin-block: 0;
          }

          :where(dd[class]) {
            margin-left: 0;
          }

          :where(fieldset[class]) {
            margin-left: 0;
            padding: 0;
            border: none;
          }

          :where(ul[class]) {
            list-style: none;
          }

          p {
            margin-block: 0;
          }

          p:where(:not([class]):not(:last-child)) {
            margin-bottom: var(--paragraphMarginBottom);
          }

          img {
            display: block;
            max-width: 100%;
          }

          input,
          textarea,
          select,
          button {
            font: inherit;
          }

          html {
            height: 100%;
            scroll-behavior: smooth;
          }

          body {
            min-height: 100%;
            line-height: 1.5;
          }

          svg *[fill] {
            fill: currentColor;
          }
          svg *[stroke] {
            stroke: currentColor;
          }

          svg * {
            transition-property: fill, stroke;
          }

          body {
            font-family: "Montserrat", sans-serif;
            color: ${colors.blackTotal};
            background-color: ${colors.whiteBackground};
            padding-top: 75px;
          }

          a,
          button {
            cursor: pointer;
          }

          a,
          button,
          input {
            user-select: none;
            transition: ${transitions.fastTransition};
          }
          a {
            color: ${colors.blackTotal};
          }

          button {
            border: none;
            background-color: transparent;
            position: relative;
          }
        `}
      />
    </>
  );
};
