declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

/// <reference types="vite-plugin-svgr/client" />

/// <reference types="vite/client" />
